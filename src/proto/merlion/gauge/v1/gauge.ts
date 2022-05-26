/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "merlion.gauge.v1";

export interface Checkpoint {
  /** unix timestamp */
  timestamp: Long;
  amount: string;
}

export interface Reward {
  /** reward coin denom */
  denom: string;
  /** reward amount per second */
  rate: string;
  /** reward finish unix time */
  finishTime: Long;
  /** unix time of last reward update */
  lastUpdateTime: Long;
  /** cumulative reward per voting ticket */
  cumulativePerTicket: string;
  /** accrued reward amount which has not been used for distributing rateably */
  accruedAmount: string;
}

export interface UserReward {
  /** reward coin denom */
  denom: string;
  /** ve id */
  veId: Long;
  /** last claim unix time */
  lastClaimTime: Long;
  /** cumulative reward per voting ticket */
  cumulativePerTicket: string;
}

function createBaseCheckpoint(): Checkpoint {
  return { timestamp: Long.UZERO, amount: "" };
}

export const Checkpoint = {
  encode(message: Checkpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
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
          message.timestamp = reader.uint64() as Long;
          break;
        case 2:
          message.amount = reader.string();
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
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: Checkpoint): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Checkpoint>, I>>(object: I): Checkpoint {
    const message = createBaseCheckpoint();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseReward(): Reward {
  return {
    denom: "",
    rate: "",
    finishTime: Long.UZERO,
    lastUpdateTime: Long.UZERO,
    cumulativePerTicket: "",
    accruedAmount: "",
  };
}

export const Reward = {
  encode(message: Reward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    if (!message.finishTime.isZero()) {
      writer.uint32(24).uint64(message.finishTime);
    }
    if (!message.lastUpdateTime.isZero()) {
      writer.uint32(32).uint64(message.lastUpdateTime);
    }
    if (message.cumulativePerTicket !== "") {
      writer.uint32(42).string(message.cumulativePerTicket);
    }
    if (message.accruedAmount !== "") {
      writer.uint32(50).string(message.accruedAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rate = reader.string();
          break;
        case 3:
          message.finishTime = reader.uint64() as Long;
          break;
        case 4:
          message.lastUpdateTime = reader.uint64() as Long;
          break;
        case 5:
          message.cumulativePerTicket = reader.string();
          break;
        case 6:
          message.accruedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Reward {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      rate: isSet(object.rate) ? String(object.rate) : "",
      finishTime: isSet(object.finishTime) ? Long.fromValue(object.finishTime) : Long.UZERO,
      lastUpdateTime: isSet(object.lastUpdateTime) ? Long.fromValue(object.lastUpdateTime) : Long.UZERO,
      cumulativePerTicket: isSet(object.cumulativePerTicket) ? String(object.cumulativePerTicket) : "",
      accruedAmount: isSet(object.accruedAmount) ? String(object.accruedAmount) : "",
    };
  },

  toJSON(message: Reward): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rate !== undefined && (obj.rate = message.rate);
    message.finishTime !== undefined && (obj.finishTime = (message.finishTime || Long.UZERO).toString());
    message.lastUpdateTime !== undefined &&
      (obj.lastUpdateTime = (message.lastUpdateTime || Long.UZERO).toString());
    message.cumulativePerTicket !== undefined && (obj.cumulativePerTicket = message.cumulativePerTicket);
    message.accruedAmount !== undefined && (obj.accruedAmount = message.accruedAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward {
    const message = createBaseReward();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? "";
    message.finishTime =
      object.finishTime !== undefined && object.finishTime !== null
        ? Long.fromValue(object.finishTime)
        : Long.UZERO;
    message.lastUpdateTime =
      object.lastUpdateTime !== undefined && object.lastUpdateTime !== null
        ? Long.fromValue(object.lastUpdateTime)
        : Long.UZERO;
    message.cumulativePerTicket = object.cumulativePerTicket ?? "";
    message.accruedAmount = object.accruedAmount ?? "";
    return message;
  },
};

function createBaseUserReward(): UserReward {
  return { denom: "", veId: Long.UZERO, lastClaimTime: Long.UZERO, cumulativePerTicket: "" };
}

export const UserReward = {
  encode(message: UserReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.veId.isZero()) {
      writer.uint32(16).uint64(message.veId);
    }
    if (!message.lastClaimTime.isZero()) {
      writer.uint32(24).uint64(message.lastClaimTime);
    }
    if (message.cumulativePerTicket !== "") {
      writer.uint32(34).string(message.cumulativePerTicket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.veId = reader.uint64() as Long;
          break;
        case 3:
          message.lastClaimTime = reader.uint64() as Long;
          break;
        case 4:
          message.cumulativePerTicket = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserReward {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      veId: isSet(object.veId) ? Long.fromValue(object.veId) : Long.UZERO,
      lastClaimTime: isSet(object.lastClaimTime) ? Long.fromValue(object.lastClaimTime) : Long.UZERO,
      cumulativePerTicket: isSet(object.cumulativePerTicket) ? String(object.cumulativePerTicket) : "",
    };
  },

  toJSON(message: UserReward): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.veId !== undefined && (obj.veId = (message.veId || Long.UZERO).toString());
    message.lastClaimTime !== undefined &&
      (obj.lastClaimTime = (message.lastClaimTime || Long.UZERO).toString());
    message.cumulativePerTicket !== undefined && (obj.cumulativePerTicket = message.cumulativePerTicket);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserReward>, I>>(object: I): UserReward {
    const message = createBaseUserReward();
    message.denom = object.denom ?? "";
    message.veId =
      object.veId !== undefined && object.veId !== null ? Long.fromValue(object.veId) : Long.UZERO;
    message.lastClaimTime =
      object.lastClaimTime !== undefined && object.lastClaimTime !== null
        ? Long.fromValue(object.lastClaimTime)
        : Long.UZERO;
    message.cumulativePerTicket = object.cumulativePerTicket ?? "";
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
