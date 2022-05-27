import { TypedData } from "./eip712";
import * as web3 from "./proto/ethermint/types/v1/web3";
import Long from "long";
import { ethers } from "ethers";
import { EncodeObject } from "@cosmjs/proto-signing";

export async function signEIP712(from: string, msgParams: TypedData): Promise<string> {
  return await (window as any).ethereum.request({
    method: "eth_signTypedData_v4",
    params: [from, JSON.stringify(msgParams)],
  });
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
  msgParams: TypedData,
  chainId: number,
): Promise<EncodeObject> {
  const sig = await signEIP712(from, msgParams);
  return createWeb3Extension(from, sig, chainId);
}
