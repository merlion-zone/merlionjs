import * as eip712 from "../eip712";
import { bankEIP712Types } from "./bank/eip712";

export const defaultRegistryTypes: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  ...bankEIP712Types,
];

export function createDefaultEIP712Registry(): eip712.Registry {
  return new eip712.Registry(defaultRegistryTypes);
}
