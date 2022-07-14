/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { NFT } from "../../../cosmos/nft/v1beta1/nft";
import { Params } from "../../../merlion/ve/v1/genesis";

export const protobufPackage = "merlion.ve.v1";

export interface QueryTotalVotingPowerRequest {
  atTime: Long;
  atBlock: Long;
}

export interface QueryTotalVotingPowerResponse {
  power: string;
}

export interface QueryVotingPowerRequest {
  veId: string;
  atTime: Long;
  atBlock: Long;
}

export interface QueryVotingPowerResponse {
  power: string;
}

/** QueryVeNftsRequest is the request type for the Query/VeNfts RPC method */
export interface QueryVeNftsRequest {
  owner: string;
  pagination?: PageRequest;
}

/** QueryVeNftsResponse is the response type for the Query/VeNfts RPC methods */
export interface QueryVeNftsResponse {
  nfts: NFT[];
  pagination?: PageResponse;
}

/** QueryVeNftRequest is the request type for the Query/VeNft RPC method */
export interface QueryVeNftRequest {
  id: string;
}

/** QueryVeNftResponse is the response type for the Query/VeNft RPC method */
export interface QueryVeNftResponse {
  nft?: NFT;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

function createBaseQueryTotalVotingPowerRequest(): QueryTotalVotingPowerRequest {
  return { atTime: Long.UZERO, atBlock: Long.ZERO };
}

export const QueryTotalVotingPowerRequest = {
  encode(message: QueryTotalVotingPowerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.atTime.isZero()) {
      writer.uint32(8).uint64(message.atTime);
    }
    if (!message.atBlock.isZero()) {
      writer.uint32(16).int64(message.atBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalVotingPowerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalVotingPowerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.atTime = reader.uint64() as Long;
          break;
        case 2:
          message.atBlock = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalVotingPowerRequest {
    return {
      atTime: isSet(object.atTime) ? Long.fromValue(object.atTime) : Long.UZERO,
      atBlock: isSet(object.atBlock) ? Long.fromValue(object.atBlock) : Long.ZERO,
    };
  },

  toJSON(message: QueryTotalVotingPowerRequest): unknown {
    const obj: any = {};
    message.atTime !== undefined && (obj.atTime = (message.atTime || Long.UZERO).toString());
    message.atBlock !== undefined && (obj.atBlock = (message.atBlock || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalVotingPowerRequest>, I>>(
    object: I,
  ): QueryTotalVotingPowerRequest {
    const message = createBaseQueryTotalVotingPowerRequest();
    message.atTime =
      object.atTime !== undefined && object.atTime !== null ? Long.fromValue(object.atTime) : Long.UZERO;
    message.atBlock =
      object.atBlock !== undefined && object.atBlock !== null ? Long.fromValue(object.atBlock) : Long.ZERO;
    return message;
  },
};

function createBaseQueryTotalVotingPowerResponse(): QueryTotalVotingPowerResponse {
  return { power: "" };
}

export const QueryTotalVotingPowerResponse = {
  encode(message: QueryTotalVotingPowerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalVotingPowerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalVotingPowerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalVotingPowerResponse {
    return {
      power: isSet(object.power) ? String(object.power) : "",
    };
  },

  toJSON(message: QueryTotalVotingPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalVotingPowerResponse>, I>>(
    object: I,
  ): QueryTotalVotingPowerResponse {
    const message = createBaseQueryTotalVotingPowerResponse();
    message.power = object.power ?? "";
    return message;
  },
};

function createBaseQueryVotingPowerRequest(): QueryVotingPowerRequest {
  return { veId: "", atTime: Long.UZERO, atBlock: Long.ZERO };
}

export const QueryVotingPowerRequest = {
  encode(message: QueryVotingPowerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.veId !== "") {
      writer.uint32(10).string(message.veId);
    }
    if (!message.atTime.isZero()) {
      writer.uint32(16).uint64(message.atTime);
    }
    if (!message.atBlock.isZero()) {
      writer.uint32(24).int64(message.atBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotingPowerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingPowerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = reader.string();
          break;
        case 2:
          message.atTime = reader.uint64() as Long;
          break;
        case 3:
          message.atBlock = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotingPowerRequest {
    return {
      veId: isSet(object.veId) ? String(object.veId) : "",
      atTime: isSet(object.atTime) ? Long.fromValue(object.atTime) : Long.UZERO,
      atBlock: isSet(object.atBlock) ? Long.fromValue(object.atBlock) : Long.ZERO,
    };
  },

  toJSON(message: QueryVotingPowerRequest): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = message.veId);
    message.atTime !== undefined && (obj.atTime = (message.atTime || Long.UZERO).toString());
    message.atBlock !== undefined && (obj.atBlock = (message.atBlock || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotingPowerRequest>, I>>(object: I): QueryVotingPowerRequest {
    const message = createBaseQueryVotingPowerRequest();
    message.veId = object.veId ?? "";
    message.atTime =
      object.atTime !== undefined && object.atTime !== null ? Long.fromValue(object.atTime) : Long.UZERO;
    message.atBlock =
      object.atBlock !== undefined && object.atBlock !== null ? Long.fromValue(object.atBlock) : Long.ZERO;
    return message;
  },
};

function createBaseQueryVotingPowerResponse(): QueryVotingPowerResponse {
  return { power: "" };
}

export const QueryVotingPowerResponse = {
  encode(message: QueryVotingPowerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotingPowerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingPowerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotingPowerResponse {
    return {
      power: isSet(object.power) ? String(object.power) : "",
    };
  },

  toJSON(message: QueryVotingPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotingPowerResponse>, I>>(
    object: I,
  ): QueryVotingPowerResponse {
    const message = createBaseQueryVotingPowerResponse();
    message.power = object.power ?? "";
    return message;
  },
};

function createBaseQueryVeNftsRequest(): QueryVeNftsRequest {
  return { owner: "", pagination: undefined };
}

export const QueryVeNftsRequest = {
  encode(message: QueryVeNftsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVeNftsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVeNftsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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

  fromJSON(object: any): QueryVeNftsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryVeNftsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVeNftsRequest>, I>>(object: I): QueryVeNftsRequest {
    const message = createBaseQueryVeNftsRequest();
    message.owner = object.owner ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVeNftsResponse(): QueryVeNftsResponse {
  return { nfts: [], pagination: undefined };
}

export const QueryVeNftsResponse = {
  encode(message: QueryVeNftsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVeNftsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVeNftsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryVeNftsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryVeNftsResponse): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVeNftsResponse>, I>>(object: I): QueryVeNftsResponse {
    const message = createBaseQueryVeNftsResponse();
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVeNftRequest(): QueryVeNftRequest {
  return { id: "" };
}

export const QueryVeNftRequest = {
  encode(message: QueryVeNftRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVeNftRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVeNftRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVeNftRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryVeNftRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVeNftRequest>, I>>(object: I): QueryVeNftRequest {
    const message = createBaseQueryVeNftRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryVeNftResponse(): QueryVeNftResponse {
  return { nft: undefined };
}

export const QueryVeNftResponse = {
  encode(message: QueryVeNftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVeNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVeNftResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVeNftResponse {
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined,
    };
  },

  toJSON(message: QueryVeNftResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVeNftResponse>, I>>(object: I): QueryVeNftResponse {
    const message = createBaseQueryVeNftResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
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

/** Query defines the ve gRPC querier service. */
export interface Query {
  /** TotalVotingPower queries the total voting power. */
  TotalVotingPower(request: QueryTotalVotingPowerRequest): Promise<QueryTotalVotingPowerResponse>;
  /** VotingPower queries the voting power of a veNFT. */
  VotingPower(request: QueryVotingPowerRequest): Promise<QueryVotingPowerResponse>;
  /** VeNfts queries all veNFTs of a given owner. */
  VeNfts(request: QueryVeNftsRequest): Promise<QueryVeNftsResponse>;
  /** VeNft queries an veNFT based on its id. */
  VeNft(request: QueryVeNftRequest): Promise<QueryVeNftResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TotalVotingPower = this.TotalVotingPower.bind(this);
    this.VotingPower = this.VotingPower.bind(this);
    this.VeNfts = this.VeNfts.bind(this);
    this.VeNft = this.VeNft.bind(this);
    this.Params = this.Params.bind(this);
  }
  TotalVotingPower(request: QueryTotalVotingPowerRequest): Promise<QueryTotalVotingPowerResponse> {
    const data = QueryTotalVotingPowerRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Query", "TotalVotingPower", data);
    return promise.then((data) => QueryTotalVotingPowerResponse.decode(new _m0.Reader(data)));
  }

  VotingPower(request: QueryVotingPowerRequest): Promise<QueryVotingPowerResponse> {
    const data = QueryVotingPowerRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Query", "VotingPower", data);
    return promise.then((data) => QueryVotingPowerResponse.decode(new _m0.Reader(data)));
  }

  VeNfts(request: QueryVeNftsRequest): Promise<QueryVeNftsResponse> {
    const data = QueryVeNftsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Query", "VeNfts", data);
    return promise.then((data) => QueryVeNftsResponse.decode(new _m0.Reader(data)));
  }

  VeNft(request: QueryVeNftRequest): Promise<QueryVeNftResponse> {
    const data = QueryVeNftRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Query", "VeNft", data);
    return promise.then((data) => QueryVeNftResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Query", "Params", data);
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
