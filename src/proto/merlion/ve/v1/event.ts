/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.ve.v1";

export interface EventCreate {
  sender: string;
  receiver: string;
  veId: string;
  amount?: Coin;
  unlockTime: Long;
}

export interface EventDeposit {
  sender: string;
  veId: string;
  amount?: Coin;
}

export interface EventExtendTime {
  sender: string;
  veId: string;
  unlockTime: Long;
}

export interface EventMerge {
  sender: string;
  fromVeId: string;
  toVeId: string;
}

export interface EventWithdraw {
  sender: string;
  veId: string;
}

function createBaseEventCreate(): EventCreate {
  return { sender: "", receiver: "", veId: "", amount: undefined, unlockTime: Long.UZERO };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.veId !== "") {
      writer.uint32(26).string(message.veId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (!message.unlockTime.isZero()) {
      writer.uint32(40).uint64(message.unlockTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.veId = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.unlockTime = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      veId: isSet(object.veId) ? String(object.veId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      unlockTime: isSet(object.unlockTime) ? Long.fromValue(object.unlockTime) : Long.UZERO,
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.veId !== undefined && (obj.veId = message.veId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.unlockTime !== undefined && (obj.unlockTime = (message.unlockTime || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreate>, I>>(object: I): EventCreate {
    const message = createBaseEventCreate();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.veId = object.veId ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.unlockTime =
      object.unlockTime !== undefined && object.unlockTime !== null
        ? Long.fromValue(object.unlockTime)
        : Long.UZERO;
    return message;
  },
};

function createBaseEventDeposit(): EventDeposit {
  return { sender: "", veId: "", amount: undefined };
}

export const EventDeposit = {
  encode(message: EventDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.veId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeposit {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      veId: isSet(object.veId) ? String(object.veId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeposit>, I>>(object: I): EventDeposit {
    const message = createBaseEventDeposit();
    message.sender = object.sender ?? "";
    message.veId = object.veId ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
};

function createBaseEventExtendTime(): EventExtendTime {
  return { sender: "", veId: "", unlockTime: Long.UZERO };
}

export const EventExtendTime = {
  encode(message: EventExtendTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    if (!message.unlockTime.isZero()) {
      writer.uint32(24).uint64(message.unlockTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExtendTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExtendTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.veId = reader.string();
          break;
        case 3:
          message.unlockTime = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExtendTime {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      veId: isSet(object.veId) ? String(object.veId) : "",
      unlockTime: isSet(object.unlockTime) ? Long.fromValue(object.unlockTime) : Long.UZERO,
    };
  },

  toJSON(message: EventExtendTime): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.unlockTime !== undefined && (obj.unlockTime = (message.unlockTime || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExtendTime>, I>>(object: I): EventExtendTime {
    const message = createBaseEventExtendTime();
    message.sender = object.sender ?? "";
    message.veId = object.veId ?? "";
    message.unlockTime =
      object.unlockTime !== undefined && object.unlockTime !== null
        ? Long.fromValue(object.unlockTime)
        : Long.UZERO;
    return message;
  },
};

function createBaseEventMerge(): EventMerge {
  return { sender: "", fromVeId: "", toVeId: "" };
}

export const EventMerge = {
  encode(message: EventMerge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.fromVeId !== "") {
      writer.uint32(18).string(message.fromVeId);
    }
    if (message.toVeId !== "") {
      writer.uint32(26).string(message.toVeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMerge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMerge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.fromVeId = reader.string();
          break;
        case 3:
          message.toVeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMerge {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      fromVeId: isSet(object.fromVeId) ? String(object.fromVeId) : "",
      toVeId: isSet(object.toVeId) ? String(object.toVeId) : "",
    };
  },

  toJSON(message: EventMerge): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.fromVeId !== undefined && (obj.fromVeId = message.fromVeId);
    message.toVeId !== undefined && (obj.toVeId = message.toVeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMerge>, I>>(object: I): EventMerge {
    const message = createBaseEventMerge();
    message.sender = object.sender ?? "";
    message.fromVeId = object.fromVeId ?? "";
    message.toVeId = object.toVeId ?? "";
    return message;
  },
};

function createBaseEventWithdraw(): EventWithdraw {
  return { sender: "", veId: "" };
}

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.veId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdraw {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      veId: isSet(object.veId) ? String(object.veId) : "",
    };
  },

  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdraw>, I>>(object: I): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.sender = object.sender ?? "";
    message.veId = object.veId ?? "";
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
