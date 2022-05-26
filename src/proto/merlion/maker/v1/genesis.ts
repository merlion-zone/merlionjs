/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "merlion.maker.v1";

/** GenesisState defines the maker module's genesis state. */
export interface GenesisState {
  params?: Params;
  collateralRatio: string;
}

/** Params defines the parameters for the maker module. */
export interface Params {
  /** adjusting collateral step */
  collateralRatioStep: string;
  /** price band for adjusting collateral ratio */
  collateralRatioPriceBand: string;
  /** cooldown period for adjusting collateral ratio */
  collateralRatioCooldownPeriod: Long;
  /** mint Mer price bias ratio */
  mintPriceBias: string;
  /** burn Mer price bias ratio */
  burnPriceBias: string;
  /** recollateralization bonus ratio */
  recollateralizeBonus: string;
  /** liquidation commission fee ratio */
  liquidationCommissionFee: string;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, collateralRatio: "" };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateralRatio !== "") {
      writer.uint32(18).string(message.collateralRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.collateralRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      collateralRatio: isSet(object.collateralRatio) ? String(object.collateralRatio) : "",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.collateralRatio !== undefined && (obj.collateralRatio = message.collateralRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.collateralRatio = object.collateralRatio ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return {
    collateralRatioStep: "",
    collateralRatioPriceBand: "",
    collateralRatioCooldownPeriod: Long.ZERO,
    mintPriceBias: "",
    burnPriceBias: "",
    recollateralizeBonus: "",
    liquidationCommissionFee: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralRatioStep !== "") {
      writer.uint32(10).string(message.collateralRatioStep);
    }
    if (message.collateralRatioPriceBand !== "") {
      writer.uint32(18).string(message.collateralRatioPriceBand);
    }
    if (!message.collateralRatioCooldownPeriod.isZero()) {
      writer.uint32(24).int64(message.collateralRatioCooldownPeriod);
    }
    if (message.mintPriceBias !== "") {
      writer.uint32(34).string(message.mintPriceBias);
    }
    if (message.burnPriceBias !== "") {
      writer.uint32(42).string(message.burnPriceBias);
    }
    if (message.recollateralizeBonus !== "") {
      writer.uint32(50).string(message.recollateralizeBonus);
    }
    if (message.liquidationCommissionFee !== "") {
      writer.uint32(58).string(message.liquidationCommissionFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralRatioStep = reader.string();
          break;
        case 2:
          message.collateralRatioPriceBand = reader.string();
          break;
        case 3:
          message.collateralRatioCooldownPeriod = reader.int64() as Long;
          break;
        case 4:
          message.mintPriceBias = reader.string();
          break;
        case 5:
          message.burnPriceBias = reader.string();
          break;
        case 6:
          message.recollateralizeBonus = reader.string();
          break;
        case 7:
          message.liquidationCommissionFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      collateralRatioStep: isSet(object.collateralRatioStep) ? String(object.collateralRatioStep) : "",
      collateralRatioPriceBand: isSet(object.collateralRatioPriceBand)
        ? String(object.collateralRatioPriceBand)
        : "",
      collateralRatioCooldownPeriod: isSet(object.collateralRatioCooldownPeriod)
        ? Long.fromValue(object.collateralRatioCooldownPeriod)
        : Long.ZERO,
      mintPriceBias: isSet(object.mintPriceBias) ? String(object.mintPriceBias) : "",
      burnPriceBias: isSet(object.burnPriceBias) ? String(object.burnPriceBias) : "",
      recollateralizeBonus: isSet(object.recollateralizeBonus) ? String(object.recollateralizeBonus) : "",
      liquidationCommissionFee: isSet(object.liquidationCommissionFee)
        ? String(object.liquidationCommissionFee)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.collateralRatioStep !== undefined && (obj.collateralRatioStep = message.collateralRatioStep);
    message.collateralRatioPriceBand !== undefined &&
      (obj.collateralRatioPriceBand = message.collateralRatioPriceBand);
    message.collateralRatioCooldownPeriod !== undefined &&
      (obj.collateralRatioCooldownPeriod = (message.collateralRatioCooldownPeriod || Long.ZERO).toString());
    message.mintPriceBias !== undefined && (obj.mintPriceBias = message.mintPriceBias);
    message.burnPriceBias !== undefined && (obj.burnPriceBias = message.burnPriceBias);
    message.recollateralizeBonus !== undefined && (obj.recollateralizeBonus = message.recollateralizeBonus);
    message.liquidationCommissionFee !== undefined &&
      (obj.liquidationCommissionFee = message.liquidationCommissionFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.collateralRatioStep = object.collateralRatioStep ?? "";
    message.collateralRatioPriceBand = object.collateralRatioPriceBand ?? "";
    message.collateralRatioCooldownPeriod =
      object.collateralRatioCooldownPeriod !== undefined && object.collateralRatioCooldownPeriod !== null
        ? Long.fromValue(object.collateralRatioCooldownPeriod)
        : Long.ZERO;
    message.mintPriceBias = object.mintPriceBias ?? "";
    message.burnPriceBias = object.burnPriceBias ?? "";
    message.recollateralizeBonus = object.recollateralizeBonus ?? "";
    message.liquidationCommissionFee = object.liquidationCommissionFee ?? "";
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
