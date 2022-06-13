import { TypedData } from "./eip712";
import * as web3 from "./proto/ethermint/types/v1/web3";
import Long from "long";
import { ethers } from "ethers";
import { EncodeObject } from "@cosmjs/proto-signing";
import { Secp256k1 } from "@cosmjs/crypto";
import { OfflineSigner } from "./proto-signing/signer";

export interface EIP712Signer {
  readonly getAddress: () => Promise<string>;
  readonly getPubkey: () => Promise<Uint8Array>;
  readonly signEIP712: (from: string, msgParams: TypedData) => Promise<string>;
}

export function isEIP712Signer(signer: OfflineSigner | EIP712Signer): signer is EIP712Signer {
  return (signer as EIP712Signer).signEIP712 !== undefined;
}

export interface PubkeyCache {
  readonly set: (address: string, pubkey: Uint8Array) => Promise<void>;
  readonly get: (address: string) => Promise<Uint8Array | null>;
}

export class Web3EIP712Signer implements EIP712Signer {
  constructor(
    private readonly provider: ethers.providers.JsonRpcProvider,
    private readonly pubkeyCache?: PubkeyCache,
  ) {}

  async getAddress(): Promise<string> {
    return this.provider.getSigner().getAddress();
  }

  async getPubkey(): Promise<Uint8Array> {
    if (this.pubkeyCache) {
      const pubkey = await this.pubkeyCache.get(await this.getAddress());
      if (pubkey) {
        return pubkey;
      }
    }

    const msg =
      "Merlion requests public key of current account since it has not sent any transaction on chain";
    const signature = await this.provider.getSigner().signMessage(msg);
    const msgHashBytes = ethers.utils.arrayify(ethers.utils.hashMessage(msg));
    const recoveredPubKey = ethers.utils.recoverPublicKey(msgHashBytes, signature);
    const uncompressedPubKey = ethers.utils.arrayify(recoveredPubKey);
    const pubkey = Secp256k1.compressPubkey(uncompressedPubKey);

    if (this.pubkeyCache) {
      await this.pubkeyCache.set(await this.getAddress(), pubkey);
    }

    return pubkey;
  }

  async signEIP712(from: string, msgParams: TypedData): Promise<string> {
    const sig = await this.provider.send("eth_signTypedData_v4", [
      from.toLowerCase(),
      JSON.stringify(msgParams),
    ]);
    return sig as string;
  }
}

export function createWeb3Extension(from: string, eip712Sig: string, chainId: number): EncodeObject {
  const message = web3.ExtensionOptionsWeb3Tx.fromPartial({
    typedDataChainId: Long.fromNumber(chainId),
    feePayer: from,
    feePayerSig: ethers.utils.arrayify(eip712Sig),
  });
  return {
    typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
    value: web3.ExtensionOptionsWeb3Tx.encode(message).finish(),
  };
}

export async function signWeb3Extension(
  from: string,
  bech32From: string,
  msgParams: TypedData,
  chainId: number,
  signer: EIP712Signer,
): Promise<EncodeObject> {
  const sig = await signer.signEIP712(from, msgParams);
  return createWeb3Extension(bech32From, sig, chainId);
}
