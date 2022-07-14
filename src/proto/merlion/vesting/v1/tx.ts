/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { Airdrop } from "../../../merlion/vesting/v1/vesting";

export const protobufPackage = "merlion.vesting.v1";

/** MsgAddAirdrops represents a message to add airdrop targets. */
export interface MsgAddAirdrops {
  sender: string;
  airdrops: Airdrop[];
}

/** MsgMintBySwapResponse defines the Msg/AddAirdrops response type. */
export interface MsgAddAirdropsResponse {}

export interface MsgExecuteAirdrops {
  sender: string;
  /** max count of airdrops performed this time */
  maxCount: Long;
}

export interface MsgExecuteAirdropsResponse {}

/** MsgSetAllocationAddress represents a message to set allocation address. */
export interface MsgSetAllocationAddress {
  sender: string;
  teamVestingAddr: string;
  strategicReserveCustodianAddr: string;
}

/**
 * MsgSetAllocationAddressResponse defines the Msg/SetAllocationAddress response
 * type.
 */
export interface MsgSetAllocationAddressResponse {}

function createBaseMsgAddAirdrops(): MsgAddAirdrops {
  return { sender: "", airdrops: [] };
}

export const MsgAddAirdrops = {
  encode(message: MsgAddAirdrops, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAirdrops {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAirdrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAirdrops {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      airdrops: Array.isArray(object?.airdrops) ? object.airdrops.map((e: any) => Airdrop.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgAddAirdrops): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) => (e ? Airdrop.toJSON(e) : undefined));
    } else {
      obj.airdrops = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddAirdrops>, I>>(object: I): MsgAddAirdrops {
    const message = createBaseMsgAddAirdrops();
    message.sender = object.sender ?? "";
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgAddAirdropsResponse(): MsgAddAirdropsResponse {
  return {};
}

export const MsgAddAirdropsResponse = {
  encode(_: MsgAddAirdropsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAirdropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAirdropsResponse();
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

  fromJSON(_: any): MsgAddAirdropsResponse {
    return {};
  },

  toJSON(_: MsgAddAirdropsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddAirdropsResponse>, I>>(_: I): MsgAddAirdropsResponse {
    const message = createBaseMsgAddAirdropsResponse();
    return message;
  },
};

function createBaseMsgExecuteAirdrops(): MsgExecuteAirdrops {
  return { sender: "", maxCount: Long.UZERO };
}

export const MsgExecuteAirdrops = {
  encode(message: MsgExecuteAirdrops, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.maxCount.isZero()) {
      writer.uint32(16).uint64(message.maxCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteAirdrops {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteAirdrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.maxCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteAirdrops {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      maxCount: isSet(object.maxCount) ? Long.fromValue(object.maxCount) : Long.UZERO,
    };
  },

  toJSON(message: MsgExecuteAirdrops): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.maxCount !== undefined && (obj.maxCount = (message.maxCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteAirdrops>, I>>(object: I): MsgExecuteAirdrops {
    const message = createBaseMsgExecuteAirdrops();
    message.sender = object.sender ?? "";
    message.maxCount =
      object.maxCount !== undefined && object.maxCount !== null
        ? Long.fromValue(object.maxCount)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgExecuteAirdropsResponse(): MsgExecuteAirdropsResponse {
  return {};
}

export const MsgExecuteAirdropsResponse = {
  encode(_: MsgExecuteAirdropsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteAirdropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteAirdropsResponse();
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

  fromJSON(_: any): MsgExecuteAirdropsResponse {
    return {};
  },

  toJSON(_: MsgExecuteAirdropsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteAirdropsResponse>, I>>(_: I): MsgExecuteAirdropsResponse {
    const message = createBaseMsgExecuteAirdropsResponse();
    return message;
  },
};

function createBaseMsgSetAllocationAddress(): MsgSetAllocationAddress {
  return { sender: "", teamVestingAddr: "", strategicReserveCustodianAddr: "" };
}

export const MsgSetAllocationAddress = {
  encode(message: MsgSetAllocationAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.teamVestingAddr !== "") {
      writer.uint32(18).string(message.teamVestingAddr);
    }
    if (message.strategicReserveCustodianAddr !== "") {
      writer.uint32(26).string(message.strategicReserveCustodianAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAllocationAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAllocationAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.teamVestingAddr = reader.string();
          break;
        case 3:
          message.strategicReserveCustodianAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAllocationAddress {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      teamVestingAddr: isSet(object.teamVestingAddr) ? String(object.teamVestingAddr) : "",
      strategicReserveCustodianAddr: isSet(object.strategicReserveCustodianAddr)
        ? String(object.strategicReserveCustodianAddr)
        : "",
    };
  },

  toJSON(message: MsgSetAllocationAddress): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.teamVestingAddr !== undefined && (obj.teamVestingAddr = message.teamVestingAddr);
    message.strategicReserveCustodianAddr !== undefined &&
      (obj.strategicReserveCustodianAddr = message.strategicReserveCustodianAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAllocationAddress>, I>>(object: I): MsgSetAllocationAddress {
    const message = createBaseMsgSetAllocationAddress();
    message.sender = object.sender ?? "";
    message.teamVestingAddr = object.teamVestingAddr ?? "";
    message.strategicReserveCustodianAddr = object.strategicReserveCustodianAddr ?? "";
    return message;
  },
};

function createBaseMsgSetAllocationAddressResponse(): MsgSetAllocationAddressResponse {
  return {};
}

export const MsgSetAllocationAddressResponse = {
  encode(_: MsgSetAllocationAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAllocationAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAllocationAddressResponse();
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

  fromJSON(_: any): MsgSetAllocationAddressResponse {
    return {};
  },

  toJSON(_: MsgSetAllocationAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAllocationAddressResponse>, I>>(
    _: I,
  ): MsgSetAllocationAddressResponse {
    const message = createBaseMsgSetAllocationAddressResponse();
    return message;
  },
};

/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * AddAirdrops adds airdrop targets.
   * Should only be called by core team multisig.
   */
  AddAirdrops(request: MsgAddAirdrops): Promise<MsgAddAirdropsResponse>;
  /**
   * ExecuteAirdrops performs airdrops.
   * Should only be called by core team multisig.
   */
  ExecuteAirdrops(request: MsgExecuteAirdrops): Promise<MsgExecuteAirdropsResponse>;
  /**
   * SetAllocationAddress sets allocation address of team vesting or
   * strategic_reserve_custodian.
   */
  SetAllocationAddress(request: MsgSetAllocationAddress): Promise<MsgSetAllocationAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddAirdrops = this.AddAirdrops.bind(this);
    this.ExecuteAirdrops = this.ExecuteAirdrops.bind(this);
    this.SetAllocationAddress = this.SetAllocationAddress.bind(this);
  }
  AddAirdrops(request: MsgAddAirdrops): Promise<MsgAddAirdropsResponse> {
    const data = MsgAddAirdrops.encode(request).finish();
    const promise = this.rpc.request("merlion.vesting.v1.Msg", "AddAirdrops", data);
    return promise.then((data) => MsgAddAirdropsResponse.decode(new _m0.Reader(data)));
  }

  ExecuteAirdrops(request: MsgExecuteAirdrops): Promise<MsgExecuteAirdropsResponse> {
    const data = MsgExecuteAirdrops.encode(request).finish();
    const promise = this.rpc.request("merlion.vesting.v1.Msg", "ExecuteAirdrops", data);
    return promise.then((data) => MsgExecuteAirdropsResponse.decode(new _m0.Reader(data)));
  }

  SetAllocationAddress(request: MsgSetAllocationAddress): Promise<MsgSetAllocationAddressResponse> {
    const data = MsgSetAllocationAddress.encode(request).finish();
    const promise = this.rpc.request("merlion.vesting.v1.Msg", "SetAllocationAddress", data);
    return promise.then((data) => MsgSetAllocationAddressResponse.decode(new _m0.Reader(data)));
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
