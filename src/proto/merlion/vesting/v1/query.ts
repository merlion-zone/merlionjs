/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "../../../merlion/vesting/v1/genesis";
import { Airdrop } from "../../../merlion/vesting/v1/vesting";

export const protobufPackage = "merlion.vesting.v1";

export interface QueryAirdropsRequest {
  /** pagination defines an optional pagination for the request. */
  completed: boolean;
  pagination?: PageRequest;
}

export interface QueryAirdropsResponse {
  /** airdrops contains all the queried airdrops. */
  airdrops: Airdrop[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

export interface QueryAirdropRequest {
  targetAddr: string;
  completed: boolean;
}

export interface QueryAirdropResponse {
  airdrop?: Airdrop;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

function createBaseQueryAirdropsRequest(): QueryAirdropsRequest {
  return { completed: false, pagination: undefined };
}

export const QueryAirdropsRequest = {
  encode(message: QueryAirdropsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completed === true) {
      writer.uint32(8).bool(message.completed);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completed = reader.bool();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropsRequest {
    return {
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAirdropsRequest): unknown {
    const obj: any = {};
    message.completed !== undefined && (obj.completed = message.completed);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropsRequest>, I>>(object: I): QueryAirdropsRequest {
    const message = createBaseQueryAirdropsRequest();
    message.completed = object.completed ?? false;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAirdropsResponse(): QueryAirdropsResponse {
  return { airdrops: [], pagination: undefined };
}

export const QueryAirdropsResponse = {
  encode(message: QueryAirdropsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropsResponse {
    return {
      airdrops: Array.isArray(object?.airdrops) ? object.airdrops.map((e: any) => Airdrop.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAirdropsResponse): unknown {
    const obj: any = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) => (e ? Airdrop.toJSON(e) : undefined));
    } else {
      obj.airdrops = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropsResponse>, I>>(object: I): QueryAirdropsResponse {
    const message = createBaseQueryAirdropsResponse();
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAirdropRequest(): QueryAirdropRequest {
  return { targetAddr: "", completed: false };
}

export const QueryAirdropRequest = {
  encode(message: QueryAirdropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAddr !== "") {
      writer.uint32(10).string(message.targetAddr);
    }
    if (message.completed === true) {
      writer.uint32(16).bool(message.completed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetAddr = reader.string();
          break;
        case 2:
          message.completed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropRequest {
    return {
      targetAddr: isSet(object.targetAddr) ? String(object.targetAddr) : "",
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
    };
  },

  toJSON(message: QueryAirdropRequest): unknown {
    const obj: any = {};
    message.targetAddr !== undefined && (obj.targetAddr = message.targetAddr);
    message.completed !== undefined && (obj.completed = message.completed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropRequest>, I>>(object: I): QueryAirdropRequest {
    const message = createBaseQueryAirdropRequest();
    message.targetAddr = object.targetAddr ?? "";
    message.completed = object.completed ?? false;
    return message;
  },
};

function createBaseQueryAirdropResponse(): QueryAirdropResponse {
  return { airdrop: undefined };
}

export const QueryAirdropResponse = {
  encode(message: QueryAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdrop !== undefined) {
      Airdrop.encode(message.airdrop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrop = Airdrop.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAirdropResponse {
    return {
      airdrop: isSet(object.airdrop) ? Airdrop.fromJSON(object.airdrop) : undefined,
    };
  },

  toJSON(message: QueryAirdropResponse): unknown {
    const obj: any = {};
    message.airdrop !== undefined &&
      (obj.airdrop = message.airdrop ? Airdrop.toJSON(message.airdrop) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAirdropResponse>, I>>(object: I): QueryAirdropResponse {
    const message = createBaseQueryAirdropResponse();
    message.airdrop =
      object.airdrop !== undefined && object.airdrop !== null
        ? Airdrop.fromPartial(object.airdrop)
        : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

/** Query defines the vesting gRPC querier service. */
export interface Query {
  /** Airdrops queries airdrop targets. */
  Airdrops(request: QueryAirdropsRequest): Promise<QueryAirdropsResponse>;
  /** Airdrops queries airdrop target for given address. */
  Airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Airdrops = this.Airdrops.bind(this);
    this.Airdrop = this.Airdrop.bind(this);
    this.Params = this.Params.bind(this);
  }
  Airdrops(request: QueryAirdropsRequest): Promise<QueryAirdropsResponse> {
    const data = QueryAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.vesting.v1.Query", "Airdrops", data);
    return promise.then((data) => QueryAirdropsResponse.decode(new _m0.Reader(data)));
  }

  Airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse> {
    const data = QueryAirdropRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.vesting.v1.Query", "Airdrop", data);
    return promise.then((data) => QueryAirdropResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.vesting.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
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
