import {
  Account,
  AminoTypes,
  AuthExtension,
  BankExtension,
  calculateFee,
  DeliverTxResponse,
  GasPrice,
  HttpEndpoint,
  MsgSendEncodeObject,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupStakingExtension,
  SignerData as StargateSignerData,
  SigningStargateClientOptions,
  StakingExtension,
  StargateClient,
  StdFee,
  TxExtension,
} from "@cosmjs/stargate";
import {
  EncodeObject,
  makeAuthInfoBytes,
  makeSignDoc,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { assert, assertDefined } from "@cosmjs/utils";
import { makeSignDoc as makeSignDocAmino, Pubkey } from "@cosmjs/amino";
import { fromBase64, toHex } from "@cosmjs/encoding";
import { Int53, Uint53 } from "@cosmjs/math";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { TxMsgData } from "cosmjs-types/cosmos/base/abci/v1beta1/abci";
import { ChainId } from "./chainid";
import { Address } from "./address";
import { EIP712Signer, isEIP712Signer, signWeb3Extension } from "./web3extension";
import * as eip712 from "./eip712";
import { createDefaultRegistry } from "./modules";
import { createDefaultEIP712Registry } from "./modules";
import { createDefaultAminoTypes } from "./modules";
import { typeUrls } from "./modules";
import { encodeEthSecp256k1Pubkey } from "./amino";
import { accountFromAny } from "./account";
import { SignDocAmino } from "./eip712";
import { encodePubkey, isOfflineDirectSigner, OfflineSigner } from "./proto-signing";
import { SequenceManager } from "./sequenceManager";
import { setupTxExtension } from "./modules";

export interface MerlionClientOptions extends SigningStargateClientOptions {
  readonly eip712Registry?: eip712.Registry;
  readonly manageSequence?: boolean;
}

export interface SignerData extends StargateSignerData {
  pubkey: Pubkey;
}

export class MerlionClient extends StargateClient {
  public readonly registry: Registry;
  public readonly eip712Registry: eip712.Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: OfflineSigner | EIP712Signer | undefined;
  private readonly aminoTypes: AminoTypes;
  private readonly gasPrice: GasPrice | undefined;
  private readonly prefix: string;
  private readonly sequenceManager: SequenceManager | undefined;

  private readonly _queryClient:
    | (QueryClient & AuthExtension & BankExtension & StakingExtension & TxExtension)
    | undefined;

  public static override async connect(
    endpoint: string | HttpEndpoint,
    options: MerlionClientOptions = {},
  ): Promise<MerlionClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new MerlionClient(tmClient, undefined, options);
  }

  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner | EIP712Signer,
    options: MerlionClientOptions = {},
  ): Promise<MerlionClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new MerlionClient(tmClient, signer, options);
  }

  public static async offline(
    signer: OfflineSigner | EIP712Signer,
    options: MerlionClientOptions = {},
  ): Promise<MerlionClient> {
    return new MerlionClient(undefined, signer, options);
  }

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner | EIP712Signer | undefined,
    options: MerlionClientOptions,
  ) {
    options = {
      ...options,
      registry: options.registry ?? createDefaultRegistry(),
      eip712Registry: options.eip712Registry ?? createDefaultEIP712Registry(),
      prefix: options.prefix ?? "mer",
      aminoTypes: options.aminoTypes ?? createDefaultAminoTypes(options.prefix ?? "mer"),
      accountParser: options.accountParser ?? accountFromAny,
    };
    super(tmClient, options);
    this.registry = options.registry!;
    this.eip712Registry = options.eip712Registry!;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.signer = signer;
    this.aminoTypes = options.aminoTypes!;
    this.gasPrice = options.gasPrice;
    this.prefix = options.prefix!;
    if (options.manageSequence) {
      this.sequenceManager = new SequenceManager();
    }
    if (tmClient) {
      this._queryClient = QueryClient.withExtensions(
        tmClient,
        setupAuthExtension,
        setupBankExtension,
        setupStakingExtension,
        setupTxExtension,
      );
    }
  }

  public override getQueryClient():
    | (QueryClient & AuthExtension & BankExtension & StakingExtension & TxExtension)
    | undefined {
    return this._queryClient;
  }

  public override forceGetQueryClient(): QueryClient &
    AuthExtension &
    BankExtension &
    StakingExtension &
    TxExtension {
    if (!this._queryClient) {
      throw new Error("Query client not available. You cannot use online functionality in offline mode.");
    }
    return this._queryClient;
  }

  public async simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo: string | undefined,
  ): Promise<number> {
    signerAddress = new Address(signerAddress).bech32(this.prefix);
    const account = await this.getAccount(signerAddress);
    if (!account) {
      throw new Error("Account does not exist on chain");
    }
    const { sequence, pubkey } = account;
    if (!pubkey) {
      throw new Error("Account has no pubkey");
    }

    const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence);
    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
  }

  public async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: readonly Coin[],
    fee: StdFee | "auto" | number = "auto",
    memo = "",
  ): Promise<DeliverTxResponse> {
    const sendMsg: MsgSendEncodeObject = {
      typeUrl: typeUrls.MsgSend,
      value: {
        fromAddress: senderAddress,
        toAddress: recipientAddress,
        amount: [...amount],
      },
    };
    return this.signAndBroadcast(senderAddress, [sendMsg], fee, memo);
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number = "auto",
    memo = "",
    block = false,
  ): Promise<DeliverTxResponse> {
    signerAddress = new Address(signerAddress).bech32(this.prefix);
    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      assertDefined(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
      const gasEstimation = await this.simulate(signerAddress, messages, memo);
      const multiplier = typeof fee === "number" ? fee : 1.3;
      usedFee = calculateFee(Math.round(gasEstimation * multiplier), this.gasPrice);
    } else {
      usedFee = fee;
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    return !block
      ? this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs)
      : this.broadcastTxBlock(txBytes);
  }

  public async signAndBroadcastBlock(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number = "auto",
    memo = "",
  ): Promise<DeliverTxResponse> {
    return this.signAndBroadcast(signerAddress, messages, fee, memo, true);
  }

  public async broadcastTxBlock(tx: Uint8Array): Promise<DeliverTxResponse> {
    const { height, hash, checkTx, deliverTx } = await this.forceGetTmClient().broadcastTxCommit({ tx });
    if (checkTx.code) {
      return Promise.reject(
        new Error(
          `Broadcasting transaction failed with code ${checkTx.code} (codespace: ${checkTx.codeSpace}). Log: ${checkTx.log}`,
        ),
      );
    }
    if (!deliverTx) {
      return Promise.reject(new Error("Empty deliverTx while successful checkTx"));
    }
    if (deliverTx.code) {
      return Promise.reject(
        new Error(
          `Broadcasting transaction failed with code ${deliverTx.code} (codespace: ${deliverTx.codeSpace}). Log: ${deliverTx.log}`,
        ),
      );
    }
    const transactionId = toHex(hash).toUpperCase();

    const txMsgData = deliverTx.data ? TxMsgData.decode(deliverTx.data) : undefined;

    return {
      height,
      code: deliverTx.code,
      transactionHash: transactionId,
      rawLog: deliverTx.log,
      data: txMsgData?.data,
      gasUsed: deliverTx.gasUsed,
      gasWanted: deliverTx.gasWanted,
    };
  }

  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
  ): Promise<TxRaw> {
    signerAddress = new Address(signerAddress).bech32(this.prefix);
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const account = await this.getAccount(signerAddress);
      if (!account) {
        throw new Error("Account does not exist on chain");
      }
      const { accountNumber, sequence, pubkey } = account;
      if (!pubkey) {
        throw new Error("Account has no pubkey");
      }
      const chainId = await this.getChainId();

      let seq = sequence;
      if (this.sequenceManager) {
        this.sequenceManager.mayInit(sequence);
        seq = this.sequenceManager.getSequence();
        this.sequenceManager.incrementSequence();
      }

      signerData = {
        accountNumber: accountNumber,
        sequence: seq,
        chainId: chainId,
        pubkey: pubkey,
      };
    }
    assertDefined(this.signer);
    if (isEIP712Signer(this.signer)) {
      assert(messages.length === 1, "EIP712 signing only allows one message at present");
      return this.signAminoEIP712(signerAddress, messages, fee, memo, signerData);
    } else if (isOfflineDirectSigner(this.signer)) {
      return this.signDirect(signerAddress, messages, fee, memo, signerData);
    } else {
      return this.signAmino(signerAddress, messages, fee, memo, signerData);
    }
  }

  private async signAminoEIP712(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId, pubkey }: SignerData,
  ): Promise<TxRaw> {
    for (let i = 1; i < messages.length; i++) {
      if (messages[i].typeUrl !== messages[0].typeUrl) {
        throw new Error("EIP712 signing only support messages of the same type");
      }
    }

    const pubkeyAny = encodePubkey(pubkey);
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;

    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    let signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence) as SignDocAmino;
    signDoc = {
      ...signDoc,
      fee: {
        ...signDoc.fee,
        feePayer: signerAddress,
      },
    };

    const eip155ChainId = new ChainId(chainId).eip155;
    const eip712Types = this.eip712Registry.generateTypedDataTypes(messages[0]);
    const msgParams = eip712.createTypedData(eip712Types, eip155ChainId, signDoc);
    assertDefined(this.signer);
    assert(isEIP712Signer(this.signer));
    const web3Extension = await signWeb3Extension(
      new Address(signerAddress).eth(),
      signerAddress,
      msgParams,
      eip155ChainId,
      this.signer,
    );

    const signedTxBody = {
      messages: signDoc.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
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
      [{ pubkey: pubkeyAny, sequence: signedSequence }],
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

  private async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId, pubkey }: SignerData,
  ): Promise<TxRaw> {
    assertDefined(this.signer);
    assert(!isEIP712Signer(this.signer));
    assert(!isOfflineDirectSigner(this.signer));
    const pubkeyAny = encodePubkey(pubkey);
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const { signature, signed } = await this.signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey: pubkeyAny, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signMode,
    );
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId, pubkey }: SignerData,
  ): Promise<TxRaw> {
    assertDefined(this.signer);
    assert(!isEIP712Signer(this.signer));
    assert(isOfflineDirectSigner(this.signer));
    const pubkeyAny = encodePubkey(pubkey);
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes([{ pubkey: pubkeyAny, sequence }], fee.amount, gasLimit);
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
    const { signature, signed } = await this.signer.signDirect(signerAddress, signDoc);
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  public override async getAccount(searchAddress: string): Promise<Account | null> {
    const account = await super.getAccount(searchAddress);
    if (!account) {
      return null;
    }

    if (account.pubkey) {
      return account;
    }
    if (!this.signer) {
      return account; // with null pubkey
    } else if (isEIP712Signer(this.signer)) {
      const pubkey = await this.signer.getPubkey();
      return {
        ...account,
        pubkey: encodeEthSecp256k1Pubkey(pubkey),
      };
    } else {
      const accountFromSigner = (await this.signer.getAccounts()).find(
        (account) => account.address === searchAddress,
      );
      if (!accountFromSigner) {
        throw new Error("Failed to retrieve account from signer");
      }
      return {
        ...account,
        pubkey: encodeEthSecp256k1Pubkey(accountFromSigner.pubkey),
      };
    }
  }
}
