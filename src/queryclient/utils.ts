import { Uint64 } from "@cosmjs/math";
import Long from "long";

export interface Pagination {
  key?: Uint8Array;
  offset?: string | number;
  limit?: string | number;
  countTotal?: boolean;
  reverse?: boolean;
}

/**
 * Takes a uint64 value as string, number, Long or Uint64 and returns an unsigned Long instance
 * of it.
 */
export function longify(value: string | number | Long | Uint64): Long {
  const checkedValue = Uint64.fromString(value.toString());
  return Long.fromBytesBE([...checkedValue.toBytesBigEndian()], true);
}
