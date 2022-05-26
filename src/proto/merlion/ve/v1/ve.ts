/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "merlion.ve.v1";

/** LockedBalance represents locked amount and unlock time of a ve. */
export interface LockedBalance {
  /** locked amount */
  amount: string;
  /** unlocking unix time */
  end: Long;
}

/** Checkpoint defines a checkpoint of voting power. */
export interface Checkpoint {
  /** voting power at checkpoint */
  bias: string;
  /**
   * weight decay slope
   * so voting power at time t: bias - slope * (t - timestamp)
   */
  slope: string;
  /** unix timestamp at checkpoint */
  timestamp: Long;
  /** block height at checkpoint */
  block: Long;
}

function createBaseLockedBalance(): LockedBalance {
  return { amount: "", end: Long.UZERO };
}

export const LockedBalance = {
  encode(message: LockedBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (!message.end.isZero()) {
      writer.uint32(16).uint64(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.end = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedBalance {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      end: isSet(object.end) ? Long.fromValue(object.end) : Long.UZERO,
    };
  },

  toJSON(message: LockedBalance): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.end !== undefined && (obj.end = (message.end || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockedBalance>, I>>(object: I): LockedBalance {
    const message = createBaseLockedBalance();
    message.amount = object.amount ?? "";
    message.end = object.end !== undefined && object.end !== null ? Long.fromValue(object.end) : Long.UZERO;
    return message;
  },
};

function createBaseCheckpoint(): Checkpoint {
  return { bias: "", slope: "", timestamp: Long.UZERO, block: Long.ZERO };
}

export const Checkpoint = {
  encode(message: Checkpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bias !== "") {
      writer.uint32(10).string(message.bias);
    }
    if (message.slope !== "") {
      writer.uint32(18).string(message.slope);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    if (!message.block.isZero()) {
      writer.uint32(32).int64(message.block);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checkpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bias = reader.string();
          break;
        case 2:
          message.slope = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64() as Long;
          break;
        case 4:
          message.block = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Checkpoint {
    return {
      bias: isSet(object.bias) ? String(object.bias) : "",
      slope: isSet(object.slope) ? String(object.slope) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.ZERO,
    };
  },

  toJSON(message: Checkpoint): unknown {
    const obj: any = {};
    message.bias !== undefined && (obj.bias = message.bias);
    message.slope !== undefined && (obj.slope = message.slope);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.block !== undefined && (obj.block = (message.block || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Checkpoint>, I>>(object: I): Checkpoint {
    const message = createBaseCheckpoint();
    message.bias = object.bias ?? "";
    message.slope = object.slope ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    message.block =
      object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.ZERO;
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
