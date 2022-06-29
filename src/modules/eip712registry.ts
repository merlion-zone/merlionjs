import * as eip712 from "../eip712";
import { bankEIP712Types } from "./bank/eip712";
import { govEIP712Types } from "./gov/eip712";
import { makerEIP712Types } from "./maker/eip712";

export const defaultEIP712RegistryTypes: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  ...bankEIP712Types,
  ...govEIP712Types,
  ...makerEIP712Types,
];

export function createDefaultEIP712Registry(): eip712.Registry {
  return new eip712.Registry(defaultEIP712RegistryTypes);
}
