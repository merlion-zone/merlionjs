/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.vesting.v1";

export interface Airdrop {
  targetAddr: string;
  amount?: Coin;
}

function createBaseAirdrop(): Airdrop {
  return { targetAddr: "", amount: undefined };
}

export const Airdrop = {
  encode(message: Airdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAddr !== "") {
      writer.uint32(10).string(message.targetAddr);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetAddr = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Airdrop {
    return {
      targetAddr: isSet(object.targetAddr) ? String(object.targetAddr) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: Airdrop): unknown {
    const obj: any = {};
    message.targetAddr !== undefined && (obj.targetAddr = message.targetAddr);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Airdrop>, I>>(object: I): Airdrop {
    const message = createBaseAirdrop();
    message.targetAddr = object.targetAddr ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
