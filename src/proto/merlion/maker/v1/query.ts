/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PoolBacking,
  PoolCollateral,
  AccountCollateral,
  TotalBacking,
  TotalCollateral,
  BackingRiskParams,
  CollateralRiskParams,
} from "../../../merlion/maker/v1/maker";
import { Params } from "../../../merlion/maker/v1/genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.maker.v1";

export interface QueryAllBackingRiskParamsRequest {}

export interface QueryAllBackingRiskParamsResponse {
  riskParams: BackingRiskParams[];
}

export interface QueryAllCollateralRiskParamsRequest {}

export interface QueryAllCollateralRiskParamsResponse {
  riskParams: CollateralRiskParams[];
}

export interface QueryAllBackingPoolsRequest {}

export interface QueryAllBackingPoolsResponse {
  backingPools: PoolBacking[];
}

export interface QueryAllCollateralPoolsRequest {}

export interface QueryAllCollateralPoolsResponse {
  collateralPools: PoolCollateral[];
}

export interface QueryBackingPoolRequest {
  backingDenom: string;
}

export interface QueryBackingPoolResponse {
  backingPool?: PoolBacking;
}

export interface QueryCollateralPoolRequest {
  collateralDenom: string;
}

export interface QueryCollateralPoolResponse {
  collateralPool?: PoolCollateral;
}

export interface QueryCollateralOfAccountRequest {
  account: string;
  collateralDenom: string;
}

export interface QueryCollateralOfAccountResponse {
  accountCollateral?: AccountCollateral;
}

export interface QueryTotalBackingRequest {}

export interface QueryTotalBackingResponse {
  totalBacking?: TotalBacking;
}

export interface QueryTotalCollateralRequest {}

export interface QueryTotalCollateralResponse {
  totalCollateral?: TotalCollateral;
}

export interface QueryCollateralRatioRequest {}

export interface QueryCollateralRatioResponse {
  collateralRatio: string;
  lastUpdateBlock: Long;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryMintBySwapRequirementRequest {
  mintTarget?: Coin;
  backingDenom: string;
  fullCollateral: boolean;
}

export interface QueryMintBySwapRequirementResponse {
  backingIn?: Coin;
  lionIn?: Coin;
  mintFee?: Coin;
}

export interface QueryMintBySwapCapacityRequest {
  backingAvail?: Coin;
  lionAvail?: Coin;
}

export interface QueryMintBySwapCapacityResponse {
  backingIn?: Coin;
  lionIn?: Coin;
  mintOut?: Coin;
  mintFee?: Coin;
}

export interface QueryBurnBySwapRequest {
  burnTarget?: Coin;
  backingDenom: string;
}

export interface QueryBurnBySwapResponse {
  backingOut?: Coin;
  lionOut?: Coin;
  burnFee?: Coin;
}

export interface QueryBuyBackingRequest {
  lionIn?: Coin;
  backingDenom: string;
}

export interface QueryBuyBackingResponse {
  backingOut?: Coin;
  buybackFee?: Coin;
}

export interface QuerySellBackingRequest {
  backingIn?: Coin;
}

export interface QuerySellBackingResponse {
  lionOut?: Coin;
  sellbackFee?: Coin;
}

function createBaseQueryAllBackingRiskParamsRequest(): QueryAllBackingRiskParamsRequest {
  return {};
}

export const QueryAllBackingRiskParamsRequest = {
  encode(_: QueryAllBackingRiskParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingRiskParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingRiskParamsRequest();
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

  fromJSON(_: any): QueryAllBackingRiskParamsRequest {
    return {};
  },

  toJSON(_: QueryAllBackingRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingRiskParamsRequest>, I>>(
    _: I,
  ): QueryAllBackingRiskParamsRequest {
    const message = createBaseQueryAllBackingRiskParamsRequest();
    return message;
  },
};

function createBaseQueryAllBackingRiskParamsResponse(): QueryAllBackingRiskParamsResponse {
  return { riskParams: [] };
}

export const QueryAllBackingRiskParamsResponse = {
  encode(message: QueryAllBackingRiskParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.riskParams) {
      BackingRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingRiskParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingRiskParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskParams.push(BackingRiskParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBackingRiskParamsResponse {
    return {
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => BackingRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllBackingRiskParamsResponse): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? BackingRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingRiskParamsResponse>, I>>(
    object: I,
  ): QueryAllBackingRiskParamsResponse {
    const message = createBaseQueryAllBackingRiskParamsResponse();
    message.riskParams = object.riskParams?.map((e) => BackingRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllCollateralRiskParamsRequest(): QueryAllCollateralRiskParamsRequest {
  return {};
}

export const QueryAllCollateralRiskParamsRequest = {
  encode(_: QueryAllCollateralRiskParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralRiskParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralRiskParamsRequest();
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

  fromJSON(_: any): QueryAllCollateralRiskParamsRequest {
    return {};
  },

  toJSON(_: QueryAllCollateralRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralRiskParamsRequest>, I>>(
    _: I,
  ): QueryAllCollateralRiskParamsRequest {
    const message = createBaseQueryAllCollateralRiskParamsRequest();
    return message;
  },
};

function createBaseQueryAllCollateralRiskParamsResponse(): QueryAllCollateralRiskParamsResponse {
  return { riskParams: [] };
}

export const QueryAllCollateralRiskParamsResponse = {
  encode(
    message: QueryAllCollateralRiskParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.riskParams) {
      CollateralRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralRiskParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralRiskParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskParams.push(CollateralRiskParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCollateralRiskParamsResponse {
    return {
      riskParams: Array.isArray(object?.riskParams)
        ? object.riskParams.map((e: any) => CollateralRiskParams.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllCollateralRiskParamsResponse): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) => (e ? CollateralRiskParams.toJSON(e) : undefined));
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralRiskParamsResponse>, I>>(
    object: I,
  ): QueryAllCollateralRiskParamsResponse {
    const message = createBaseQueryAllCollateralRiskParamsResponse();
    message.riskParams = object.riskParams?.map((e) => CollateralRiskParams.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllBackingPoolsRequest(): QueryAllBackingPoolsRequest {
  return {};
}

export const QueryAllBackingPoolsRequest = {
  encode(_: QueryAllBackingPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingPoolsRequest();
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

  fromJSON(_: any): QueryAllBackingPoolsRequest {
    return {};
  },

  toJSON(_: QueryAllBackingPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingPoolsRequest>, I>>(
    _: I,
  ): QueryAllBackingPoolsRequest {
    const message = createBaseQueryAllBackingPoolsRequest();
    return message;
  },
};

function createBaseQueryAllBackingPoolsResponse(): QueryAllBackingPoolsResponse {
  return { backingPools: [] };
}

export const QueryAllBackingPoolsResponse = {
  encode(message: QueryAllBackingPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.backingPools) {
      PoolBacking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBackingPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBackingPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingPools.push(PoolBacking.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBackingPoolsResponse {
    return {
      backingPools: Array.isArray(object?.backingPools)
        ? object.backingPools.map((e: any) => PoolBacking.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllBackingPoolsResponse): unknown {
    const obj: any = {};
    if (message.backingPools) {
      obj.backingPools = message.backingPools.map((e) => (e ? PoolBacking.toJSON(e) : undefined));
    } else {
      obj.backingPools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBackingPoolsResponse>, I>>(
    object: I,
  ): QueryAllBackingPoolsResponse {
    const message = createBaseQueryAllBackingPoolsResponse();
    message.backingPools = object.backingPools?.map((e) => PoolBacking.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllCollateralPoolsRequest(): QueryAllCollateralPoolsRequest {
  return {};
}

export const QueryAllCollateralPoolsRequest = {
  encode(_: QueryAllCollateralPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralPoolsRequest();
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

  fromJSON(_: any): QueryAllCollateralPoolsRequest {
    return {};
  },

  toJSON(_: QueryAllCollateralPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralPoolsRequest>, I>>(
    _: I,
  ): QueryAllCollateralPoolsRequest {
    const message = createBaseQueryAllCollateralPoolsRequest();
    return message;
  },
};

function createBaseQueryAllCollateralPoolsResponse(): QueryAllCollateralPoolsResponse {
  return { collateralPools: [] };
}

export const QueryAllCollateralPoolsResponse = {
  encode(message: QueryAllCollateralPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collateralPools) {
      PoolCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCollateralPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCollateralPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralPools.push(PoolCollateral.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCollateralPoolsResponse {
    return {
      collateralPools: Array.isArray(object?.collateralPools)
        ? object.collateralPools.map((e: any) => PoolCollateral.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllCollateralPoolsResponse): unknown {
    const obj: any = {};
    if (message.collateralPools) {
      obj.collateralPools = message.collateralPools.map((e) => (e ? PoolCollateral.toJSON(e) : undefined));
    } else {
      obj.collateralPools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCollateralPoolsResponse>, I>>(
    object: I,
  ): QueryAllCollateralPoolsResponse {
    const message = createBaseQueryAllCollateralPoolsResponse();
    message.collateralPools = object.collateralPools?.map((e) => PoolCollateral.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBackingPoolRequest(): QueryBackingPoolRequest {
  return { backingDenom: "" };
}

export const QueryBackingPoolRequest = {
  encode(message: QueryBackingPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingDenom !== "") {
      writer.uint32(10).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBackingPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackingPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolRequest {
    return {
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
    };
  },

  toJSON(message: QueryBackingPoolRequest): unknown {
    const obj: any = {};
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBackingPoolRequest>, I>>(object: I): QueryBackingPoolRequest {
    const message = createBaseQueryBackingPoolRequest();
    message.backingDenom = object.backingDenom ?? "";
    return message;
  },
};

function createBaseQueryBackingPoolResponse(): QueryBackingPoolResponse {
  return { backingPool: undefined };
}

export const QueryBackingPoolResponse = {
  encode(message: QueryBackingPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingPool !== undefined) {
      PoolBacking.encode(message.backingPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBackingPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBackingPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingPool = PoolBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolResponse {
    return {
      backingPool: isSet(object.backingPool) ? PoolBacking.fromJSON(object.backingPool) : undefined,
    };
  },

  toJSON(message: QueryBackingPoolResponse): unknown {
    const obj: any = {};
    message.backingPool !== undefined &&
      (obj.backingPool = message.backingPool ? PoolBacking.toJSON(message.backingPool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBackingPoolResponse>, I>>(
    object: I,
  ): QueryBackingPoolResponse {
    const message = createBaseQueryBackingPoolResponse();
    message.backingPool =
      object.backingPool !== undefined && object.backingPool !== null
        ? PoolBacking.fromPartial(object.backingPool)
        : undefined;
    return message;
  },
};

function createBaseQueryCollateralPoolRequest(): QueryCollateralPoolRequest {
  return { collateralDenom: "" };
}

export const QueryCollateralPoolRequest = {
  encode(message: QueryCollateralPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralDenom !== "") {
      writer.uint32(10).string(message.collateralDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralPoolRequest {
    return {
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
    };
  },

  toJSON(message: QueryCollateralPoolRequest): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralPoolRequest>, I>>(
    object: I,
  ): QueryCollateralPoolRequest {
    const message = createBaseQueryCollateralPoolRequest();
    message.collateralDenom = object.collateralDenom ?? "";
    return message;
  },
};

function createBaseQueryCollateralPoolResponse(): QueryCollateralPoolResponse {
  return { collateralPool: undefined };
}

export const QueryCollateralPoolResponse = {
  encode(message: QueryCollateralPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralPool !== undefined) {
      PoolCollateral.encode(message.collateralPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralPool = PoolCollateral.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralPoolResponse {
    return {
      collateralPool: isSet(object.collateralPool)
        ? PoolCollateral.fromJSON(object.collateralPool)
        : undefined,
    };
  },

  toJSON(message: QueryCollateralPoolResponse): unknown {
    const obj: any = {};
    message.collateralPool !== undefined &&
      (obj.collateralPool = message.collateralPool
        ? PoolCollateral.toJSON(message.collateralPool)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralPoolResponse>, I>>(
    object: I,
  ): QueryCollateralPoolResponse {
    const message = createBaseQueryCollateralPoolResponse();
    message.collateralPool =
      object.collateralPool !== undefined && object.collateralPool !== null
        ? PoolCollateral.fromPartial(object.collateralPool)
        : undefined;
    return message;
  },
};

function createBaseQueryCollateralOfAccountRequest(): QueryCollateralOfAccountRequest {
  return { account: "", collateralDenom: "" };
}

export const QueryCollateralOfAccountRequest = {
  encode(message: QueryCollateralOfAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralOfAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralOfAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralOfAccountRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
    };
  },

  toJSON(message: QueryCollateralOfAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralOfAccountRequest>, I>>(
    object: I,
  ): QueryCollateralOfAccountRequest {
    const message = createBaseQueryCollateralOfAccountRequest();
    message.account = object.account ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    return message;
  },
};

function createBaseQueryCollateralOfAccountResponse(): QueryCollateralOfAccountResponse {
  return { accountCollateral: undefined };
}

export const QueryCollateralOfAccountResponse = {
  encode(message: QueryCollateralOfAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountCollateral !== undefined) {
      AccountCollateral.encode(message.accountCollateral, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralOfAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralOfAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountCollateral = AccountCollateral.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralOfAccountResponse {
    return {
      accountCollateral: isSet(object.accountCollateral)
        ? AccountCollateral.fromJSON(object.accountCollateral)
        : undefined,
    };
  },

  toJSON(message: QueryCollateralOfAccountResponse): unknown {
    const obj: any = {};
    message.accountCollateral !== undefined &&
      (obj.accountCollateral = message.accountCollateral
        ? AccountCollateral.toJSON(message.accountCollateral)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralOfAccountResponse>, I>>(
    object: I,
  ): QueryCollateralOfAccountResponse {
    const message = createBaseQueryCollateralOfAccountResponse();
    message.accountCollateral =
      object.accountCollateral !== undefined && object.accountCollateral !== null
        ? AccountCollateral.fromPartial(object.accountCollateral)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalBackingRequest(): QueryTotalBackingRequest {
  return {};
}

export const QueryTotalBackingRequest = {
  encode(_: QueryTotalBackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBackingRequest();
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

  fromJSON(_: any): QueryTotalBackingRequest {
    return {};
  },

  toJSON(_: QueryTotalBackingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalBackingRequest>, I>>(_: I): QueryTotalBackingRequest {
    const message = createBaseQueryTotalBackingRequest();
    return message;
  },
};

function createBaseQueryTotalBackingResponse(): QueryTotalBackingResponse {
  return { totalBacking: undefined };
}

export const QueryTotalBackingResponse = {
  encode(message: QueryTotalBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalBacking !== undefined) {
      TotalBacking.encode(message.totalBacking, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBacking = TotalBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBackingResponse {
    return {
      totalBacking: isSet(object.totalBacking) ? TotalBacking.fromJSON(object.totalBacking) : undefined,
    };
  },

  toJSON(message: QueryTotalBackingResponse): unknown {
    const obj: any = {};
    message.totalBacking !== undefined &&
      (obj.totalBacking = message.totalBacking ? TotalBacking.toJSON(message.totalBacking) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalBackingResponse>, I>>(
    object: I,
  ): QueryTotalBackingResponse {
    const message = createBaseQueryTotalBackingResponse();
    message.totalBacking =
      object.totalBacking !== undefined && object.totalBacking !== null
        ? TotalBacking.fromPartial(object.totalBacking)
        : undefined;
    return message;
  },
};

function createBaseQueryTotalCollateralRequest(): QueryTotalCollateralRequest {
  return {};
}

export const QueryTotalCollateralRequest = {
  encode(_: QueryTotalCollateralRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralRequest();
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

  fromJSON(_: any): QueryTotalCollateralRequest {
    return {};
  },

  toJSON(_: QueryTotalCollateralRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalCollateralRequest>, I>>(
    _: I,
  ): QueryTotalCollateralRequest {
    const message = createBaseQueryTotalCollateralRequest();
    return message;
  },
};

function createBaseQueryTotalCollateralResponse(): QueryTotalCollateralResponse {
  return { totalCollateral: undefined };
}

export const QueryTotalCollateralResponse = {
  encode(message: QueryTotalCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalCollateral !== undefined) {
      TotalCollateral.encode(message.totalCollateral, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCollateral = TotalCollateral.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalCollateralResponse {
    return {
      totalCollateral: isSet(object.totalCollateral)
        ? TotalCollateral.fromJSON(object.totalCollateral)
        : undefined,
    };
  },

  toJSON(message: QueryTotalCollateralResponse): unknown {
    const obj: any = {};
    message.totalCollateral !== undefined &&
      (obj.totalCollateral = message.totalCollateral
        ? TotalCollateral.toJSON(message.totalCollateral)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalCollateralResponse>, I>>(
    object: I,
  ): QueryTotalCollateralResponse {
    const message = createBaseQueryTotalCollateralResponse();
    message.totalCollateral =
      object.totalCollateral !== undefined && object.totalCollateral !== null
        ? TotalCollateral.fromPartial(object.totalCollateral)
        : undefined;
    return message;
  },
};

function createBaseQueryCollateralRatioRequest(): QueryCollateralRatioRequest {
  return {};
}

export const QueryCollateralRatioRequest = {
  encode(_: QueryCollateralRatioRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralRatioRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralRatioRequest();
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

  fromJSON(_: any): QueryCollateralRatioRequest {
    return {};
  },

  toJSON(_: QueryCollateralRatioRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralRatioRequest>, I>>(
    _: I,
  ): QueryCollateralRatioRequest {
    const message = createBaseQueryCollateralRatioRequest();
    return message;
  },
};

function createBaseQueryCollateralRatioResponse(): QueryCollateralRatioResponse {
  return { collateralRatio: "", lastUpdateBlock: Long.ZERO };
}

export const QueryCollateralRatioResponse = {
  encode(message: QueryCollateralRatioResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralRatio !== "") {
      writer.uint32(10).string(message.collateralRatio);
    }
    if (!message.lastUpdateBlock.isZero()) {
      writer.uint32(16).int64(message.lastUpdateBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollateralRatioResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollateralRatioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralRatio = reader.string();
          break;
        case 2:
          message.lastUpdateBlock = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralRatioResponse {
    return {
      collateralRatio: isSet(object.collateralRatio) ? String(object.collateralRatio) : "",
      lastUpdateBlock: isSet(object.lastUpdateBlock) ? Long.fromValue(object.lastUpdateBlock) : Long.ZERO,
    };
  },

  toJSON(message: QueryCollateralRatioResponse): unknown {
    const obj: any = {};
    message.collateralRatio !== undefined && (obj.collateralRatio = message.collateralRatio);
    message.lastUpdateBlock !== undefined &&
      (obj.lastUpdateBlock = (message.lastUpdateBlock || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollateralRatioResponse>, I>>(
    object: I,
  ): QueryCollateralRatioResponse {
    const message = createBaseQueryCollateralRatioResponse();
    message.collateralRatio = object.collateralRatio ?? "";
    message.lastUpdateBlock =
      object.lastUpdateBlock !== undefined && object.lastUpdateBlock !== null
        ? Long.fromValue(object.lastUpdateBlock)
        : Long.ZERO;
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

function createBaseQueryMintBySwapRequirementRequest(): QueryMintBySwapRequirementRequest {
  return { mintTarget: undefined, backingDenom: "", fullCollateral: false };
}

export const QueryMintBySwapRequirementRequest = {
  encode(message: QueryMintBySwapRequirementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintTarget !== undefined) {
      Coin.encode(message.mintTarget, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    if (message.fullCollateral === true) {
      writer.uint32(24).bool(message.fullCollateral);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintBySwapRequirementRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintBySwapRequirementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintTarget = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        case 3:
          message.fullCollateral = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintBySwapRequirementRequest {
    return {
      mintTarget: isSet(object.mintTarget) ? Coin.fromJSON(object.mintTarget) : undefined,
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
      fullCollateral: isSet(object.fullCollateral) ? Boolean(object.fullCollateral) : false,
    };
  },

  toJSON(message: QueryMintBySwapRequirementRequest): unknown {
    const obj: any = {};
    message.mintTarget !== undefined &&
      (obj.mintTarget = message.mintTarget ? Coin.toJSON(message.mintTarget) : undefined);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    message.fullCollateral !== undefined && (obj.fullCollateral = message.fullCollateral);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintBySwapRequirementRequest>, I>>(
    object: I,
  ): QueryMintBySwapRequirementRequest {
    const message = createBaseQueryMintBySwapRequirementRequest();
    message.mintTarget =
      object.mintTarget !== undefined && object.mintTarget !== null
        ? Coin.fromPartial(object.mintTarget)
        : undefined;
    message.backingDenom = object.backingDenom ?? "";
    message.fullCollateral = object.fullCollateral ?? false;
    return message;
  },
};

function createBaseQueryMintBySwapRequirementResponse(): QueryMintBySwapRequirementResponse {
  return { backingIn: undefined, lionIn: undefined, mintFee: undefined };
}

export const QueryMintBySwapRequirementResponse = {
  encode(message: QueryMintBySwapRequirementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintBySwapRequirementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintBySwapRequirementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintBySwapRequirementResponse {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      lionIn: isSet(object.lionIn) ? Coin.fromJSON(object.lionIn) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: QueryMintBySwapRequirementResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    message.lionIn !== undefined && (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintBySwapRequirementResponse>, I>>(
    object: I,
  ): QueryMintBySwapRequirementResponse {
    const message = createBaseQueryMintBySwapRequirementResponse();
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    message.lionIn =
      object.lionIn !== undefined && object.lionIn !== null ? Coin.fromPartial(object.lionIn) : undefined;
    message.mintFee =
      object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    return message;
  },
};

function createBaseQueryMintBySwapCapacityRequest(): QueryMintBySwapCapacityRequest {
  return { backingAvail: undefined, lionAvail: undefined };
}

export const QueryMintBySwapCapacityRequest = {
  encode(message: QueryMintBySwapCapacityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingAvail !== undefined) {
      Coin.encode(message.backingAvail, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionAvail !== undefined) {
      Coin.encode(message.lionAvail, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintBySwapCapacityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintBySwapCapacityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingAvail = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionAvail = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintBySwapCapacityRequest {
    return {
      backingAvail: isSet(object.backingAvail) ? Coin.fromJSON(object.backingAvail) : undefined,
      lionAvail: isSet(object.lionAvail) ? Coin.fromJSON(object.lionAvail) : undefined,
    };
  },

  toJSON(message: QueryMintBySwapCapacityRequest): unknown {
    const obj: any = {};
    message.backingAvail !== undefined &&
      (obj.backingAvail = message.backingAvail ? Coin.toJSON(message.backingAvail) : undefined);
    message.lionAvail !== undefined &&
      (obj.lionAvail = message.lionAvail ? Coin.toJSON(message.lionAvail) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintBySwapCapacityRequest>, I>>(
    object: I,
  ): QueryMintBySwapCapacityRequest {
    const message = createBaseQueryMintBySwapCapacityRequest();
    message.backingAvail =
      object.backingAvail !== undefined && object.backingAvail !== null
        ? Coin.fromPartial(object.backingAvail)
        : undefined;
    message.lionAvail =
      object.lionAvail !== undefined && object.lionAvail !== null
        ? Coin.fromPartial(object.lionAvail)
        : undefined;
    return message;
  },
};

function createBaseQueryMintBySwapCapacityResponse(): QueryMintBySwapCapacityResponse {
  return { backingIn: undefined, lionIn: undefined, mintOut: undefined, mintFee: undefined };
}

export const QueryMintBySwapCapacityResponse = {
  encode(message: QueryMintBySwapCapacityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintBySwapCapacityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintBySwapCapacityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintBySwapCapacityResponse {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      lionIn: isSet(object.lionIn) ? Coin.fromJSON(object.lionIn) : undefined,
      mintOut: isSet(object.mintOut) ? Coin.fromJSON(object.mintOut) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: QueryMintBySwapCapacityResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    message.lionIn !== undefined && (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut ? Coin.toJSON(message.mintOut) : undefined);
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintBySwapCapacityResponse>, I>>(
    object: I,
  ): QueryMintBySwapCapacityResponse {
    const message = createBaseQueryMintBySwapCapacityResponse();
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    message.lionIn =
      object.lionIn !== undefined && object.lionIn !== null ? Coin.fromPartial(object.lionIn) : undefined;
    message.mintOut =
      object.mintOut !== undefined && object.mintOut !== null ? Coin.fromPartial(object.mintOut) : undefined;
    message.mintFee =
      object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    return message;
  },
};

function createBaseQueryBurnBySwapRequest(): QueryBurnBySwapRequest {
  return { burnTarget: undefined, backingDenom: "" };
}

export const QueryBurnBySwapRequest = {
  encode(message: QueryBurnBySwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnTarget !== undefined) {
      Coin.encode(message.burnTarget, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnBySwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnBySwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnTarget = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBurnBySwapRequest {
    return {
      burnTarget: isSet(object.burnTarget) ? Coin.fromJSON(object.burnTarget) : undefined,
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
    };
  },

  toJSON(message: QueryBurnBySwapRequest): unknown {
    const obj: any = {};
    message.burnTarget !== undefined &&
      (obj.burnTarget = message.burnTarget ? Coin.toJSON(message.burnTarget) : undefined);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurnBySwapRequest>, I>>(object: I): QueryBurnBySwapRequest {
    const message = createBaseQueryBurnBySwapRequest();
    message.burnTarget =
      object.burnTarget !== undefined && object.burnTarget !== null
        ? Coin.fromPartial(object.burnTarget)
        : undefined;
    message.backingDenom = object.backingDenom ?? "";
    return message;
  },
};

function createBaseQueryBurnBySwapResponse(): QueryBurnBySwapResponse {
  return { backingOut: undefined, lionOut: undefined, burnFee: undefined };
}

export const QueryBurnBySwapResponse = {
  encode(message: QueryBurnBySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnBySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnBySwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burnFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBurnBySwapResponse {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      lionOut: isSet(object.lionOut) ? Coin.fromJSON(object.lionOut) : undefined,
      burnFee: isSet(object.burnFee) ? Coin.fromJSON(object.burnFee) : undefined,
    };
  },

  toJSON(message: QueryBurnBySwapResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut ? Coin.toJSON(message.lionOut) : undefined);
    message.burnFee !== undefined &&
      (obj.burnFee = message.burnFee ? Coin.toJSON(message.burnFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurnBySwapResponse>, I>>(object: I): QueryBurnBySwapResponse {
    const message = createBaseQueryBurnBySwapResponse();
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    message.lionOut =
      object.lionOut !== undefined && object.lionOut !== null ? Coin.fromPartial(object.lionOut) : undefined;
    message.burnFee =
      object.burnFee !== undefined && object.burnFee !== null ? Coin.fromPartial(object.burnFee) : undefined;
    return message;
  },
};

function createBaseQueryBuyBackingRequest(): QueryBuyBackingRequest {
  return { lionIn: undefined, backingDenom: "" };
}

export const QueryBuyBackingRequest = {
  encode(message: QueryBuyBackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBuyBackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuyBackingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBuyBackingRequest {
    return {
      lionIn: isSet(object.lionIn) ? Coin.fromJSON(object.lionIn) : undefined,
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
    };
  },

  toJSON(message: QueryBuyBackingRequest): unknown {
    const obj: any = {};
    message.lionIn !== undefined && (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBuyBackingRequest>, I>>(object: I): QueryBuyBackingRequest {
    const message = createBaseQueryBuyBackingRequest();
    message.lionIn =
      object.lionIn !== undefined && object.lionIn !== null ? Coin.fromPartial(object.lionIn) : undefined;
    message.backingDenom = object.backingDenom ?? "";
    return message;
  },
};

function createBaseQueryBuyBackingResponse(): QueryBuyBackingResponse {
  return { backingOut: undefined, buybackFee: undefined };
}

export const QueryBuyBackingResponse = {
  encode(message: QueryBuyBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.buybackFee !== undefined) {
      Coin.encode(message.buybackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBuyBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBuyBackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.buybackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBuyBackingResponse {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      buybackFee: isSet(object.buybackFee) ? Coin.fromJSON(object.buybackFee) : undefined,
    };
  },

  toJSON(message: QueryBuyBackingResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.buybackFee !== undefined &&
      (obj.buybackFee = message.buybackFee ? Coin.toJSON(message.buybackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBuyBackingResponse>, I>>(object: I): QueryBuyBackingResponse {
    const message = createBaseQueryBuyBackingResponse();
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    message.buybackFee =
      object.buybackFee !== undefined && object.buybackFee !== null
        ? Coin.fromPartial(object.buybackFee)
        : undefined;
    return message;
  },
};

function createBaseQuerySellBackingRequest(): QuerySellBackingRequest {
  return { backingIn: undefined };
}

export const QuerySellBackingRequest = {
  encode(message: QuerySellBackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellBackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellBackingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySellBackingRequest {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
    };
  },

  toJSON(message: QuerySellBackingRequest): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellBackingRequest>, I>>(object: I): QuerySellBackingRequest {
    const message = createBaseQuerySellBackingRequest();
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    return message;
  },
};

function createBaseQuerySellBackingResponse(): QuerySellBackingResponse {
  return { lionOut: undefined, sellbackFee: undefined };
}

export const QuerySellBackingResponse = {
  encode(message: QuerySellBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.sellbackFee !== undefined) {
      Coin.encode(message.sellbackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellBackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sellbackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySellBackingResponse {
    return {
      lionOut: isSet(object.lionOut) ? Coin.fromJSON(object.lionOut) : undefined,
      sellbackFee: isSet(object.sellbackFee) ? Coin.fromJSON(object.sellbackFee) : undefined,
    };
  },

  toJSON(message: QuerySellBackingResponse): unknown {
    const obj: any = {};
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut ? Coin.toJSON(message.lionOut) : undefined);
    message.sellbackFee !== undefined &&
      (obj.sellbackFee = message.sellbackFee ? Coin.toJSON(message.sellbackFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySellBackingResponse>, I>>(
    object: I,
  ): QuerySellBackingResponse {
    const message = createBaseQuerySellBackingResponse();
    message.lionOut =
      object.lionOut !== undefined && object.lionOut !== null ? Coin.fromPartial(object.lionOut) : undefined;
    message.sellbackFee =
      object.sellbackFee !== undefined && object.sellbackFee !== null
        ? Coin.fromPartial(object.sellbackFee)
        : undefined;
    return message;
  },
};

/** Query defines the maker gRPC querier service. */
export interface Query {
  /** AllBackingRiskParams queries risk params of all the backing pools. */
  AllBackingRiskParams(request: QueryAllBackingRiskParamsRequest): Promise<QueryAllBackingRiskParamsResponse>;
  /** AllCollateralRiskParams queries risk params of all the collateral pools. */
  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest,
  ): Promise<QueryAllCollateralRiskParamsResponse>;
  /** AllBackingPools queries all the backing pools. */
  AllBackingPools(request: QueryAllBackingPoolsRequest): Promise<QueryAllBackingPoolsResponse>;
  /** AllCollateralPools queries all the collateral pools. */
  AllCollateralPools(request: QueryAllCollateralPoolsRequest): Promise<QueryAllCollateralPoolsResponse>;
  /** BackingPool queries a backing pool. */
  BackingPool(request: QueryBackingPoolRequest): Promise<QueryBackingPoolResponse>;
  /** CollateralPool queries a collateral pool. */
  CollateralPool(request: QueryCollateralPoolRequest): Promise<QueryCollateralPoolResponse>;
  /** CollateralOfAccount queries the collateral of an account. */
  CollateralOfAccount(request: QueryCollateralOfAccountRequest): Promise<QueryCollateralOfAccountResponse>;
  /** TotalBacking queries the total backing. */
  TotalBacking(request: QueryTotalBackingRequest): Promise<QueryTotalBackingResponse>;
  /** TotalCollateral queries the total collateral. */
  TotalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse>;
  /** CollateralRatio queries the collateral ratio. */
  CollateralRatio(request: QueryCollateralRatioRequest): Promise<QueryCollateralRatioResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * MintBySwapRequirement queries requirement of backing and lion for the mint
   * target.
   */
  MintBySwapRequirement(
    request: QueryMintBySwapRequirementRequest,
  ): Promise<QueryMintBySwapRequirementResponse>;
  /**
   * MintBySwapCapacity queries how much mer can be minted with provided backing
   * and lion.
   */
  MintBySwapCapacity(request: QueryMintBySwapCapacityRequest): Promise<QueryMintBySwapCapacityResponse>;
  /**
   * QueryBurnBySwap queries how much backing and lion will be returned when mer
   * is burned.
   */
  QueryBurnBySwap(request: QueryBurnBySwapRequest): Promise<QueryBurnBySwapResponse>;
  /** QueryBuyBacking queries how much backing can be bought with provided lion. */
  QueryBuyBacking(request: QueryBuyBackingRequest): Promise<QueryBuyBackingResponse>;
  /**
   * QuerySellBacking queries how much lion can be exchanged for provided
   * backing.
   */
  QuerySellBacking(request: QuerySellBackingRequest): Promise<QuerySellBackingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AllBackingRiskParams = this.AllBackingRiskParams.bind(this);
    this.AllCollateralRiskParams = this.AllCollateralRiskParams.bind(this);
    this.AllBackingPools = this.AllBackingPools.bind(this);
    this.AllCollateralPools = this.AllCollateralPools.bind(this);
    this.BackingPool = this.BackingPool.bind(this);
    this.CollateralPool = this.CollateralPool.bind(this);
    this.CollateralOfAccount = this.CollateralOfAccount.bind(this);
    this.TotalBacking = this.TotalBacking.bind(this);
    this.TotalCollateral = this.TotalCollateral.bind(this);
    this.CollateralRatio = this.CollateralRatio.bind(this);
    this.Params = this.Params.bind(this);
    this.MintBySwapRequirement = this.MintBySwapRequirement.bind(this);
    this.MintBySwapCapacity = this.MintBySwapCapacity.bind(this);
    this.QueryBurnBySwap = this.QueryBurnBySwap.bind(this);
    this.QueryBuyBacking = this.QueryBuyBacking.bind(this);
    this.QuerySellBacking = this.QuerySellBacking.bind(this);
  }
  AllBackingRiskParams(
    request: QueryAllBackingRiskParamsRequest,
  ): Promise<QueryAllBackingRiskParamsResponse> {
    const data = QueryAllBackingRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "AllBackingRiskParams", data);
    return promise.then((data) => QueryAllBackingRiskParamsResponse.decode(new _m0.Reader(data)));
  }

  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest,
  ): Promise<QueryAllCollateralRiskParamsResponse> {
    const data = QueryAllCollateralRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "AllCollateralRiskParams", data);
    return promise.then((data) => QueryAllCollateralRiskParamsResponse.decode(new _m0.Reader(data)));
  }

  AllBackingPools(request: QueryAllBackingPoolsRequest): Promise<QueryAllBackingPoolsResponse> {
    const data = QueryAllBackingPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "AllBackingPools", data);
    return promise.then((data) => QueryAllBackingPoolsResponse.decode(new _m0.Reader(data)));
  }

  AllCollateralPools(request: QueryAllCollateralPoolsRequest): Promise<QueryAllCollateralPoolsResponse> {
    const data = QueryAllCollateralPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "AllCollateralPools", data);
    return promise.then((data) => QueryAllCollateralPoolsResponse.decode(new _m0.Reader(data)));
  }

  BackingPool(request: QueryBackingPoolRequest): Promise<QueryBackingPoolResponse> {
    const data = QueryBackingPoolRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "BackingPool", data);
    return promise.then((data) => QueryBackingPoolResponse.decode(new _m0.Reader(data)));
  }

  CollateralPool(request: QueryCollateralPoolRequest): Promise<QueryCollateralPoolResponse> {
    const data = QueryCollateralPoolRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "CollateralPool", data);
    return promise.then((data) => QueryCollateralPoolResponse.decode(new _m0.Reader(data)));
  }

  CollateralOfAccount(request: QueryCollateralOfAccountRequest): Promise<QueryCollateralOfAccountResponse> {
    const data = QueryCollateralOfAccountRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "CollateralOfAccount", data);
    return promise.then((data) => QueryCollateralOfAccountResponse.decode(new _m0.Reader(data)));
  }

  TotalBacking(request: QueryTotalBackingRequest): Promise<QueryTotalBackingResponse> {
    const data = QueryTotalBackingRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "TotalBacking", data);
    return promise.then((data) => QueryTotalBackingResponse.decode(new _m0.Reader(data)));
  }

  TotalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse> {
    const data = QueryTotalCollateralRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "TotalCollateral", data);
    return promise.then((data) => QueryTotalCollateralResponse.decode(new _m0.Reader(data)));
  }

  CollateralRatio(request: QueryCollateralRatioRequest): Promise<QueryCollateralRatioResponse> {
    const data = QueryCollateralRatioRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "CollateralRatio", data);
    return promise.then((data) => QueryCollateralRatioResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  MintBySwapRequirement(
    request: QueryMintBySwapRequirementRequest,
  ): Promise<QueryMintBySwapRequirementResponse> {
    const data = QueryMintBySwapRequirementRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "MintBySwapRequirement", data);
    return promise.then((data) => QueryMintBySwapRequirementResponse.decode(new _m0.Reader(data)));
  }

  MintBySwapCapacity(request: QueryMintBySwapCapacityRequest): Promise<QueryMintBySwapCapacityResponse> {
    const data = QueryMintBySwapCapacityRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "MintBySwapCapacity", data);
    return promise.then((data) => QueryMintBySwapCapacityResponse.decode(new _m0.Reader(data)));
  }

  QueryBurnBySwap(request: QueryBurnBySwapRequest): Promise<QueryBurnBySwapResponse> {
    const data = QueryBurnBySwapRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "QueryBurnBySwap", data);
    return promise.then((data) => QueryBurnBySwapResponse.decode(new _m0.Reader(data)));
  }

  QueryBuyBacking(request: QueryBuyBackingRequest): Promise<QueryBuyBackingResponse> {
    const data = QueryBuyBackingRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "QueryBuyBacking", data);
    return promise.then((data) => QueryBuyBackingResponse.decode(new _m0.Reader(data)));
  }

  QuerySellBacking(request: QuerySellBackingRequest): Promise<QuerySellBackingResponse> {
    const data = QuerySellBackingRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "QuerySellBacking", data);
    return promise.then((data) => QuerySellBackingResponse.decode(new _m0.Reader(data)));
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
