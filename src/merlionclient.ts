import {
    AminoConverters,
    AminoTypes,
    createAuthzAminoConverters,
    createBankAminoConverters,
    createDistributionAminoConverters, createFreegrantAminoConverters,
    createGovAminoConverters, createIbcAminoConverters, createStakingAminoConverters,
    HttpEndpoint,
    SignerData,
    SigningStargateClient,
    SigningStargateClientOptions,
    StargateClientOptions,
    StdFee
} from '@cosmjs/stargate'
import {
    EncodeObject,
    encodePubkey,
    isOfflineDirectSigner, makeAuthInfoBytes,
    OfflineSigner,
    TxBodyEncodeObject
} from '@cosmjs/proto-signing'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { assert } from '@cosmjs/utils'
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino } from '@cosmjs/amino'
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing'
import { createVestingAminoConverters } from '@cosmjs/stargate/build/modules'
import { Int53 } from '@cosmjs/math'
import { fromBase64 } from '@cosmjs/encoding'

function createDefaultTypes(prefix: string): AminoConverters {
    return {
        ...createAuthzAminoConverters(),
        ...createBankAminoConverters(),
        ...createDistributionAminoConverters(),
        ...createGovAminoConverters(),
        ...createStakingAminoConverters(prefix),
        ...createIbcAminoConverters(),
        ...createFreegrantAminoConverters(),
        ...createVestingAminoConverters(),
    };
}

export class MerlionClient extends SigningStargateClient {
    private readonly _signer: OfflineSigner;
    private readonly _aminoTypes: AminoTypes;

    public static async connect(
        endpoint: string | HttpEndpoint,
        options: StargateClientOptions = {},
    ): Promise<MerlionClient> {
        const tmClient = await Tendermint34Client.connect(endpoint);
        return new MerlionClient(tmClient, undefined, options);
    }

    public static async connectWithSigner(
        endpoint: string | HttpEndpoint,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {},
    ): Promise<MerlionClient> {
        const tmClient = await Tendermint34Client.connect(endpoint);
        return new MerlionClient(tmClient, signer, options);
    }

    public static async offline(
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {},
    ): Promise<MerlionClient> {
        return new MerlionClient(undefined, signer, options);
    }

    protected constructor(
        tmClient: Tendermint34Client | undefined,
        signer: OfflineSigner | undefined,
        options: SigningStargateClientOptions,
    ) {
        super(tmClient, signer as OfflineSigner, options);
        this._signer = signer as OfflineSigner;
        const prefix = options.prefix ?? "cosmos";
        const { aminoTypes = new AminoTypes(createDefaultTypes(prefix)) } = options;
        this._aminoTypes = aminoTypes;
    }

    private async signAminoEIP712(
        signerAddress: string,
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo: string,
        { accountNumber, sequence, chainId }: SignerData,
    ): Promise<TxRaw> {
        assert(!isOfflineDirectSigner(this._signer));
        const accountFromSigner = (await this._signer.getAccounts()).find(
            (account) => account.address === signerAddress,
        );
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
        const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        const msgs = messages.map((msg) => this._aminoTypes.toAmino(msg));
        const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
        const { signature, signed } = await this._signer.signAmino(signerAddress, signDoc);
        const signedTxBody = {
            messages: signed.msgs.map((msg) => this._aminoTypes.fromAmino(msg)),
            memo: signed.memo,
            extensionOptions: [], // TODO
        };
        const signedTxBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: signedTxBody,
        };
        const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
        const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
        const signedSequence = Int53.fromString(signed.sequence).toNumber();
        const signedAuthInfoBytes = makeAuthInfoBytes(
            [{ pubkey, sequence: signedSequence }],
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
}
