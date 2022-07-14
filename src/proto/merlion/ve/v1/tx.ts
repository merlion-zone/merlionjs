/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.ve.v1";

export interface MsgCreate {
  sender: string;
  to: string;
  amount?: Coin;
  lockDuration: Long;
}

export interface MsgCreateResponse {
  veId: string;
  unlockTime: Long;
}

export interface MsgDeposit {
  sender: string;
  veId: string;
  /** Amount to deposit, must be greater than 0 */
  amount?: Coin;
}

export interface MsgDepositResponse {}

export interface MsgExtendTime {
  sender: string;
  veId: string;
  /** Locking duration, must be greater than current locking duration */
  lockDuration: Long;
}

export interface MsgExtendTimeResponse {}

export interface MsgMerge {
  sender: string;
  fromVeId: string;
  toVeId: string;
}

export interface MsgMergeResponse {}

export interface MsgWithdraw {
  sender: string;
  veId: string;
}

export interface MsgWithdrawResponse {}

function createBaseMsgCreate(): MsgCreate {
  return { sender: "", to: "", amount: undefined, lockDuration: Long.UZERO };
}

export const MsgCreate = {
  encode(message: MsgCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (!message.lockDuration.isZero()) {
      writer.uint32(32).uint64(message.lockDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lockDuration = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      lockDuration: isSet(object.lockDuration) ? Long.fromValue(object.lockDuration) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.lockDuration !== undefined &&
      (obj.lockDuration = (message.lockDuration || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreate>, I>>(object: I): MsgCreate {
    const message = createBaseMsgCreate();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.lockDuration =
      object.lockDuration !== undefined && object.lockDuration !== null
        ? Long.fromValue(object.lockDuration)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return { veId: "", unlockTime: Long.UZERO };
}

export const MsgCreateResponse = {
  encode(message: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.veId !== "") {
      writer.uint32(10).string(message.veId);
    }
    if (!message.unlockTime.isZero()) {
      writer.uint32(16).uint64(message.unlockTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = reader.string();
          break;
        case 2:
          message.unlockTime = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResponse {
    return {
      veId: isSet(object.veId) ? String(object.veId) : "",
      unlockTime: isSet(object.unlockTime) ? Long.fromValue(object.unlockTime) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateResponse): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = message.veId);
    message.unlockTime !== undefined && (obj.unlockTime = (message.unlockTime || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponse>, I>>(object: I): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.veId = object.veId ?? "";
    message.unlockTime =
      object.unlockTime !== undefined && object.unlockTime !== null
        ? Long.fromValue(object.unlockTime)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgDeposit(): MsgDeposit {
  return { sender: "", veId: "", amount: undefined };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
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

  fromJSON(object: any): MsgDeposit {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      veId: isSet(object.veId) ? String(object.veId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.sender = object.sender ?? "";
    message.veId = object.veId ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDepositResponse {
    return {};
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
};

function createBaseMsgExtendTime(): MsgExtendTime {
  return { sender: "", veId: "", lockDuration: Long.UZERO };
}

export const MsgExtendTime = {
  encode(message: MsgExtendTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    if (!message.lockDuration.isZero()) {
      writer.uint32(24).uint64(message.lockDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendTime();
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
          message.lockDuration = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExtendTime {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      veId: isSet(object.veId) ? String(object.veId) : "",
      lockDuration: isSet(object.lockDuration) ? Long.fromValue(object.lockDuration) : Long.UZERO,
    };
  },

  toJSON(message: MsgExtendTime): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.lockDuration !== undefined &&
      (obj.lockDuration = (message.lockDuration || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExtendTime>, I>>(object: I): MsgExtendTime {
    const message = createBaseMsgExtendTime();
    message.sender = object.sender ?? "";
    message.veId = object.veId ?? "";
    message.lockDuration =
      object.lockDuration !== undefined && object.lockDuration !== null
        ? Long.fromValue(object.lockDuration)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgExtendTimeResponse(): MsgExtendTimeResponse {
  return {};
}

export const MsgExtendTimeResponse = {
  encode(_: MsgExtendTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExtendTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExtendTimeResponse {
    return {};
  },

  toJSON(_: MsgExtendTimeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExtendTimeResponse>, I>>(_: I): MsgExtendTimeResponse {
    const message = createBaseMsgExtendTimeResponse();
    return message;
  },
};

function createBaseMsgMerge(): MsgMerge {
  return { sender: "", fromVeId: "", toVeId: "" };
}

export const MsgMerge = {
  encode(message: MsgMerge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMerge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMerge();
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

  fromJSON(object: any): MsgMerge {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      fromVeId: isSet(object.fromVeId) ? String(object.fromVeId) : "",
      toVeId: isSet(object.toVeId) ? String(object.toVeId) : "",
    };
  },

  toJSON(message: MsgMerge): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.fromVeId !== undefined && (obj.fromVeId = message.fromVeId);
    message.toVeId !== undefined && (obj.toVeId = message.toVeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMerge>, I>>(object: I): MsgMerge {
    const message = createBaseMsgMerge();
    message.sender = object.sender ?? "";
    message.fromVeId = object.fromVeId ?? "";
    message.toVeId = object.toVeId ?? "";
    return message;
  },
};

function createBaseMsgMergeResponse(): MsgMergeResponse {
  return {};
}

export const MsgMergeResponse = {
  encode(_: MsgMergeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMergeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMergeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMergeResponse {
    return {};
  },

  toJSON(_: MsgMergeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMergeResponse>, I>>(_: I): MsgMergeResponse {
    const message = createBaseMsgMergeResponse();
    return message;
  },
};

function createBaseMsgWithdraw(): MsgWithdraw {
  return { sender: "", veId: "" };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
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

  fromJSON(object: any): MsgWithdraw {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      veId: isSet(object.veId) ? String(object.veId) : "",
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(object: I): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.sender = object.sender ?? "";
    message.veId = object.veId ?? "";
    return message;
  },
};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },

  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(_: I): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
};

/** Msg defines the ve Msg service. */
export interface Msg {
  /** Create creates a veNFT. */
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  /** Deposit deposits some coin amount for a veNFT. */
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** ExtendTime extends locking duration for a veNFT. */
  ExtendTime(request: MsgExtendTime): Promise<MsgExtendTimeResponse>;
  /** Merge merges a veNFT (burn it) to another veNFT. */
  Merge(request: MsgMerge): Promise<MsgMergeResponse>;
  /** Withdraw withdraws all coin amount of a veNFT. */
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.ExtendTime = this.ExtendTime.bind(this);
    this.Merge = this.Merge.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
  }
  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Create", data);
    return promise.then((data) => MsgCreateResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  ExtendTime(request: MsgExtendTime): Promise<MsgExtendTimeResponse> {
    const data = MsgExtendTime.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "ExtendTime", data);
    return promise.then((data) => MsgExtendTimeResponse.decode(new _m0.Reader(data)));
  }

  Merge(request: MsgMerge): Promise<MsgMergeResponse> {
    const data = MsgMerge.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Merge", data);
    return promise.then((data) => MsgMergeResponse.decode(new _m0.Reader(data)));
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Withdraw", data);
    return promise.then((data) => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
