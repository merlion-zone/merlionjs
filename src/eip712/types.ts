import { StdFee as StdFeeAmino, StdSignDoc as StdSignDocAmino } from "@cosmjs/amino";
import { ethers } from "ethers";

export interface TypeEntry {
  name: string;
  type: string;
}

export interface TypedDataTypes extends TypedDataTypesMsgValue {
  EIP712Domain: TypeEntry[];
  Tx: TypeEntry[];
  Fee: TypeEntry[];
  Coin: TypeEntry[];
  Msg: TypeEntry[];
}

export interface TypedDataTypesMsgValue {
  MsgValue: TypeEntry[];

  [prop: string]: TypeEntry[];
}

export function generateTypedDataTypes(typesMsgValue: TypedDataTypesMsgValue): TypedDataTypes {
  return {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "string" },
      { name: "salt", type: "string" },
    ],
    Tx: [
      { name: "account_number", type: "string" },
      { name: "chain_id", type: "string" },
      { name: "fee", type: "Fee" },
      { name: "memo", type: "string" },
      { name: "msgs", type: "Msg[]" },
      { name: "sequence", type: "string" },
    ],
    Fee: [
      { name: "feePayer", type: "string" },
      { name: "amount", type: "Coin[]" },
      { name: "gas", type: "string" },
    ],
    Coin: [
      { name: "denom", type: "string" },
      { name: "amount", type: "string" },
    ],
    Msg: [
      { name: "type", type: "string" },
      { name: "value", type: "MsgValue" },
    ],
    ...typesMsgValue,
  };
}

export interface TypedData {
  domain: object;
  message: SignDocAmino;
  primaryType: "Tx";
  types: TypedDataTypes;
}

export function createTypedData(types: TypedDataTypes, chainId: number, message: SignDocAmino): TypedData {
  return {
    domain: {
      chainId: ethers.utils.hexlify(chainId),
      name: "Cosmos Web3",
      verifyingContract: "cosmos",
      version: "1.0.0",
      salt: "0",
    },
    message,
    primaryType: "Tx",
    types,
  };
}

export interface FeeAmino extends StdFeeAmino {
  readonly feePayer: string;
}

export interface SignDocAmino extends StdSignDocAmino {
  readonly fee: FeeAmino;
}
