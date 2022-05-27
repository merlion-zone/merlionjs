import {
  AminoTypes,
  calculateFee,
  DeliverTxResponse,
  GasPrice,
  HttpEndpoint,
  SignerData as StargateSignerData,
  SigningStargateClient,
  SigningStargateClientOptions,
  StdFee,
} from "@cosmjs/stargate";
import {
  EncodeObject,
  encodePubkey,
  makeAuthInfoBytes,
  OfflineSigner,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { assertDefined } from "@cosmjs/utils";
import { makeSignDoc as makeSignDocAmino, Pubkey } from "@cosmjs/amino";
import { Int53 } from "@cosmjs/math";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import ChainId from "./chainid";
import Address from "./address";
import { signWeb3Extension } from "./web3extension";
import * as eip712 from "./eip712";
import { createDefaultEIP712Registry } from "./modules/eip712registry";
import { createDefaultAminoTypes } from "./modules/amino";

export interface MerlionClientOptions extends SigningStargateClientOptions {
  readonly eip712Registry?: eip712.Registry;
}

export interface SignerData extends StargateSignerData {
  pubkey: Pubkey;
}

export class MerlionClient extends SigningStargateClient {
  public readonly eip712Registry: eip712.Registry;

  private readonly _signer: OfflineSigner;
  private readonly _aminoTypes: AminoTypes;
  private readonly _gasPrice: GasPrice | undefined;
  private readonly _prefix: string;

  public static async connect(
    endpoint: string | HttpEndpoint,
    options: MerlionClientOptions = {},
  ): Promise<MerlionClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new MerlionClient(tmClient, undefined, options);
  }

  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: MerlionClientOptions = {},
  ): Promise<MerlionClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new MerlionClient(tmClient, signer, options);
  }

  public static async offline(
    signer: OfflineSigner,
    options: MerlionClientOptions = {},
  ): Promise<MerlionClient> {
    return new MerlionClient(undefined, signer, options);
  }

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner | undefined,
    options: MerlionClientOptions,
  ) {
    super(tmClient, signer as OfflineSigner, options);
    this.eip712Registry = options.eip712Registry ?? createDefaultEIP712Registry();
    this._signer = signer as OfflineSigner;
    this._prefix = options.prefix ?? "mer";
    const { aminoTypes = createDefaultAminoTypes(this._prefix) } = options;
    this._aminoTypes = aminoTypes;
    this._gasPrice = options.gasPrice;
  }

  public async signEIP712AndBroadcast(
    signerAddress: string,
    message: EncodeObject,
    fee: StdFee | "auto" | number = "auto",
    memo = "",
  ): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      assertDefined(this._gasPrice, "Gas price must be set in the client options when auto gas is used.");
      const gasEstimation = await this.simulate(
        new Address(signerAddress).bech32(this._prefix),
        [message],
        memo,
      );
      const multiplier = typeof fee === "number" ? fee : 1.3;
      usedFee = calculateFee(Math.round(gasEstimation * multiplier), this._gasPrice);
    } else {
      usedFee = fee;
    }
    const txRaw = await this.signEIP712(signerAddress, message, usedFee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
  }

  public async signEIP712(
    signerAddress: string,
    message: EncodeObject,
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const account = await this.getAccount(new Address(signerAddress).bech32(this._prefix));
      if (!account) {
        throw new Error("Account does not exist on chain");
      }
      const { accountNumber, sequence, pubkey } = account;
      if (!pubkey) {
        throw new Error("Account has no pubkey");
      }
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
        pubkey: pubkey,
      };
    }
    return this.signAminoEIP712(signerAddress, message, fee, memo, signerData);
  }

  private async signAminoEIP712(
    signerAddress: string,
    message: EncodeObject,
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId, pubkey }: SignerData,
  ): Promise<TxRaw> {
    const encodedPubkey = encodePubkey(pubkey);
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;

    const messages = [message];
    const msgs = messages.map((msg) => this._aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);

    const eip155ChainId = new ChainId(chainId).eip155;
    const eip712Types = this.eip712Registry.generateTypedDataTypes(message);
    const msgParams = eip712.createTypedData(eip712Types, eip155ChainId, signDoc);
    const web3Extension = await signWeb3Extension(new Address(signerAddress).eth(), msgParams, eip155ChainId);

    const signedTxBody = {
      messages: signDoc.msgs.map((msg) => this._aminoTypes.fromAmino(msg)),
      memo: signDoc.memo,
      extensionOptions: [web3Extension],
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);

    const signedGasLimit = Int53.fromString(signDoc.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signDoc.sequence).toNumber();

    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey: encodedPubkey, sequence: signedSequence }],
      signDoc.fee.amount,
      signedGasLimit,
      signMode,
    );

    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [new Uint8Array()],
    });
  }
}
