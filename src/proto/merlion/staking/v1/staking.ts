/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "merlion.staking.v1";

export interface VeValidator {
  operatorAddress: string;
  veDelegatorShares: string;
}

export interface VeDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  veShares: VeShares[];
}

export interface VeShares {
  veId: Long;
  tokensMayUnsettled: string;
  shares: string;
}

export interface VeUnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  entries: VeUnbondingDelegationEntry[];
}

export interface VeUnbondingDelegationEntry {
  veBalances: VeUnbondingDelegationEntryBalances[];
}

export interface VeUnbondingDelegationEntryBalances {
  veId: Long;
  initialBalance: string;
  balance: string;
}

export interface VeRedelegation {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  entries: VeRedelegationEntry[];
}

export interface VeRedelegationEntry {
  veShares: VeRedelegationEntryShares[];
}

export interface VeRedelegationEntryShares {
  veId: Long;
  initialBalance: string;
  sharesDst: string;
}

export interface VeTokens {
  veId: Long;
  tokens: string;
}

function createBaseVeValidator(): VeValidator {
  return { operatorAddress: "", veDelegatorShares: "" };
}

export const VeValidator = {
  encode(message: VeValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.veDelegatorShares !== "") {
      writer.uint32(18).string(message.veDelegatorShares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.veDelegatorShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeValidator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      veDelegatorShares: isSet(object.veDelegatorShares) ? String(object.veDelegatorShares) : "",
    };
  },

  toJSON(message: VeValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.veDelegatorShares !== undefined && (obj.veDelegatorShares = message.veDelegatorShares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeValidator>, I>>(object: I): VeValidator {
    const message = createBaseVeValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.veDelegatorShares = object.veDelegatorShares ?? "";
    return message;
  },
};

function createBaseVeDelegation(): VeDelegation {
  return { delegatorAddress: "", validatorAddress: "", veShares: [] };
}

export const VeDelegation = {
  encode(message: VeDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.veShares) {
      VeShares.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.veShares.push(VeShares.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeDelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      veShares: Array.isArray(object?.veShares) ? object.veShares.map((e: any) => VeShares.fromJSON(e)) : [],
    };
  },

  toJSON(message: VeDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.veShares) {
      obj.veShares = message.veShares.map((e) => (e ? VeShares.toJSON(e) : undefined));
    } else {
      obj.veShares = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeDelegation>, I>>(object: I): VeDelegation {
    const message = createBaseVeDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.veShares = object.veShares?.map((e) => VeShares.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVeShares(): VeShares {
  return { veId: Long.UZERO, tokensMayUnsettled: "", shares: "" };
}

export const VeShares = {
  encode(message: VeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.veId.isZero()) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.tokensMayUnsettled !== "") {
      writer.uint32(18).string(message.tokensMayUnsettled);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = reader.uint64() as Long;
          break;
        case 2:
          message.tokensMayUnsettled = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeShares {
    return {
      veId: isSet(object.veId) ? Long.fromValue(object.veId) : Long.UZERO,
      tokensMayUnsettled: isSet(object.tokensMayUnsettled) ? String(object.tokensMayUnsettled) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: VeShares): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = (message.veId || Long.UZERO).toString());
    message.tokensMayUnsettled !== undefined && (obj.tokensMayUnsettled = message.tokensMayUnsettled);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeShares>, I>>(object: I): VeShares {
    const message = createBaseVeShares();
    message.veId =
      object.veId !== undefined && object.veId !== null ? Long.fromValue(object.veId) : Long.UZERO;
    message.tokensMayUnsettled = object.tokensMayUnsettled ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};

function createBaseVeUnbondingDelegation(): VeUnbondingDelegation {
  return { delegatorAddress: "", validatorAddress: "", entries: [] };
}

export const VeUnbondingDelegation = {
  encode(message: VeUnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      VeUnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeUnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(VeUnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => VeUnbondingDelegationEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VeUnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? VeUnbondingDelegationEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeUnbondingDelegation>, I>>(object: I): VeUnbondingDelegation {
    const message = createBaseVeUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map((e) => VeUnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVeUnbondingDelegationEntry(): VeUnbondingDelegationEntry {
  return { veBalances: [] };
}

export const VeUnbondingDelegationEntry = {
  encode(message: VeUnbondingDelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.veBalances) {
      VeUnbondingDelegationEntryBalances.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeUnbondingDelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veBalances.push(VeUnbondingDelegationEntryBalances.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegationEntry {
    return {
      veBalances: Array.isArray(object?.veBalances)
        ? object.veBalances.map((e: any) => VeUnbondingDelegationEntryBalances.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VeUnbondingDelegationEntry): unknown {
    const obj: any = {};
    if (message.veBalances) {
      obj.veBalances = message.veBalances.map((e) =>
        e ? VeUnbondingDelegationEntryBalances.toJSON(e) : undefined,
      );
    } else {
      obj.veBalances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeUnbondingDelegationEntry>, I>>(
    object: I,
  ): VeUnbondingDelegationEntry {
    const message = createBaseVeUnbondingDelegationEntry();
    message.veBalances =
      object.veBalances?.map((e) => VeUnbondingDelegationEntryBalances.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVeUnbondingDelegationEntryBalances(): VeUnbondingDelegationEntryBalances {
  return { veId: Long.UZERO, initialBalance: "", balance: "" };
}

export const VeUnbondingDelegationEntryBalances = {
  encode(message: VeUnbondingDelegationEntryBalances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.veId.isZero()) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.initialBalance !== "") {
      writer.uint32(18).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeUnbondingDelegationEntryBalances {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeUnbondingDelegationEntryBalances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = reader.uint64() as Long;
          break;
        case 2:
          message.initialBalance = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegationEntryBalances {
    return {
      veId: isSet(object.veId) ? Long.fromValue(object.veId) : Long.UZERO,
      initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
    };
  },

  toJSON(message: VeUnbondingDelegationEntryBalances): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = (message.veId || Long.UZERO).toString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeUnbondingDelegationEntryBalances>, I>>(
    object: I,
  ): VeUnbondingDelegationEntryBalances {
    const message = createBaseVeUnbondingDelegationEntryBalances();
    message.veId =
      object.veId !== undefined && object.veId !== null ? Long.fromValue(object.veId) : Long.UZERO;
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseVeRedelegation(): VeRedelegation {
  return { delegatorAddress: "", validatorSrcAddress: "", validatorDstAddress: "", entries: [] };
}

export const VeRedelegation = {
  encode(message: VeRedelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      VeRedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeRedelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(VeRedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => VeRedelegationEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VeRedelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? VeRedelegationEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeRedelegation>, I>>(object: I): VeRedelegation {
    const message = createBaseVeRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = object.entries?.map((e) => VeRedelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVeRedelegationEntry(): VeRedelegationEntry {
  return { veShares: [] };
}

export const VeRedelegationEntry = {
  encode(message: VeRedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.veShares) {
      VeRedelegationEntryShares.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeRedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veShares.push(VeRedelegationEntryShares.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegationEntry {
    return {
      veShares: Array.isArray(object?.veShares)
        ? object.veShares.map((e: any) => VeRedelegationEntryShares.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VeRedelegationEntry): unknown {
    const obj: any = {};
    if (message.veShares) {
      obj.veShares = message.veShares.map((e) => (e ? VeRedelegationEntryShares.toJSON(e) : undefined));
    } else {
      obj.veShares = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeRedelegationEntry>, I>>(object: I): VeRedelegationEntry {
    const message = createBaseVeRedelegationEntry();
    message.veShares = object.veShares?.map((e) => VeRedelegationEntryShares.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVeRedelegationEntryShares(): VeRedelegationEntryShares {
  return { veId: Long.UZERO, initialBalance: "", sharesDst: "" };
}

export const VeRedelegationEntryShares = {
  encode(message: VeRedelegationEntryShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.veId.isZero()) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.initialBalance !== "") {
      writer.uint32(18).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(26).string(message.sharesDst);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeRedelegationEntryShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeRedelegationEntryShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = reader.uint64() as Long;
          break;
        case 2:
          message.initialBalance = reader.string();
          break;
        case 3:
          message.sharesDst = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegationEntryShares {
    return {
      veId: isSet(object.veId) ? Long.fromValue(object.veId) : Long.UZERO,
      initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
      sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : "",
    };
  },

  toJSON(message: VeRedelegationEntryShares): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = (message.veId || Long.UZERO).toString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeRedelegationEntryShares>, I>>(
    object: I,
  ): VeRedelegationEntryShares {
    const message = createBaseVeRedelegationEntryShares();
    message.veId =
      object.veId !== undefined && object.veId !== null ? Long.fromValue(object.veId) : Long.UZERO;
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    return message;
  },
};

function createBaseVeTokens(): VeTokens {
  return { veId: Long.UZERO, tokens: "" };
}

export const VeTokens = {
  encode(message: VeTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.veId.isZero()) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.tokens !== "") {
      writer.uint32(18).string(message.tokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VeTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVeTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = reader.uint64() as Long;
          break;
        case 2:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeTokens {
    return {
      veId: isSet(object.veId) ? Long.fromValue(object.veId) : Long.UZERO,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
    };
  },

  toJSON(message: VeTokens): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = (message.veId || Long.UZERO).toString());
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VeTokens>, I>>(object: I): VeTokens {
    const message = createBaseVeTokens();
    message.veId =
      object.veId !== undefined && object.veId !== null ? Long.fromValue(object.veId) : Long.UZERO;
    message.tokens = object.tokens ?? "";
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
