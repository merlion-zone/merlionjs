/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "merlion.maker.v1";

/** GenesisState defines the maker module's genesis state. */
export interface GenesisState {
  params?: Params;
  backingRatio: string;
}

/** Params defines the parameters for the maker module. */
export interface Params {
  /** step of adjusting backing ratio */
  backingRatioStep: string;
  /** price band for adjusting backing ratio */
  backingRatioPriceBand: string;
  /** cooldown period for adjusting backing ratio */
  backingRatioCooldownPeriod: Long;
  /** mint Mer price bias ratio */
  mintPriceBias: string;
  /** burn Mer price bias ratio */
  burnPriceBias: string;
  /** reback bonus ratio */
  rebackBonus: string;
  /** liquidation commission fee ratio */
  liquidationCommissionFee: string;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, backingRatio: "" };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingRatio !== "") {
      writer.uint32(18).string(message.backingRatio);
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
          message.backingRatio = reader.string();
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
      backingRatio: isSet(object.backingRatio) ? String(object.backingRatio) : "",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.backingRatio !== undefined && (obj.backingRatio = message.backingRatio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.backingRatio = object.backingRatio ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return {
    backingRatioStep: "",
    backingRatioPriceBand: "",
    backingRatioCooldownPeriod: Long.ZERO,
    mintPriceBias: "",
    burnPriceBias: "",
    rebackBonus: "",
    liquidationCommissionFee: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingRatioStep !== "") {
      writer.uint32(10).string(message.backingRatioStep);
    }
    if (message.backingRatioPriceBand !== "") {
      writer.uint32(18).string(message.backingRatioPriceBand);
    }
    if (!message.backingRatioCooldownPeriod.isZero()) {
      writer.uint32(24).int64(message.backingRatioCooldownPeriod);
    }
    if (message.mintPriceBias !== "") {
      writer.uint32(34).string(message.mintPriceBias);
    }
    if (message.burnPriceBias !== "") {
      writer.uint32(42).string(message.burnPriceBias);
    }
    if (message.rebackBonus !== "") {
      writer.uint32(50).string(message.rebackBonus);
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
          message.backingRatioStep = reader.string();
          break;
        case 2:
          message.backingRatioPriceBand = reader.string();
          break;
        case 3:
          message.backingRatioCooldownPeriod = reader.int64() as Long;
          break;
        case 4:
          message.mintPriceBias = reader.string();
          break;
        case 5:
          message.burnPriceBias = reader.string();
          break;
        case 6:
          message.rebackBonus = reader.string();
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
      backingRatioStep: isSet(object.backingRatioStep) ? String(object.backingRatioStep) : "",
      backingRatioPriceBand: isSet(object.backingRatioPriceBand) ? String(object.backingRatioPriceBand) : "",
      backingRatioCooldownPeriod: isSet(object.backingRatioCooldownPeriod)
        ? Long.fromValue(object.backingRatioCooldownPeriod)
        : Long.ZERO,
      mintPriceBias: isSet(object.mintPriceBias) ? String(object.mintPriceBias) : "",
      burnPriceBias: isSet(object.burnPriceBias) ? String(object.burnPriceBias) : "",
      rebackBonus: isSet(object.rebackBonus) ? String(object.rebackBonus) : "",
      liquidationCommissionFee: isSet(object.liquidationCommissionFee)
        ? String(object.liquidationCommissionFee)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.backingRatioStep !== undefined && (obj.backingRatioStep = message.backingRatioStep);
    message.backingRatioPriceBand !== undefined &&
      (obj.backingRatioPriceBand = message.backingRatioPriceBand);
    message.backingRatioCooldownPeriod !== undefined &&
      (obj.backingRatioCooldownPeriod = (message.backingRatioCooldownPeriod || Long.ZERO).toString());
    message.mintPriceBias !== undefined && (obj.mintPriceBias = message.mintPriceBias);
    message.burnPriceBias !== undefined && (obj.burnPriceBias = message.burnPriceBias);
    message.rebackBonus !== undefined && (obj.rebackBonus = message.rebackBonus);
    message.liquidationCommissionFee !== undefined &&
      (obj.liquidationCommissionFee = message.liquidationCommissionFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.backingRatioStep = object.backingRatioStep ?? "";
    message.backingRatioPriceBand = object.backingRatioPriceBand ?? "";
    message.backingRatioCooldownPeriod =
      object.backingRatioCooldownPeriod !== undefined && object.backingRatioCooldownPeriod !== null
        ? Long.fromValue(object.backingRatioCooldownPeriod)
        : Long.ZERO;
    message.mintPriceBias = object.mintPriceBias ?? "";
    message.burnPriceBias = object.burnPriceBias ?? "";
    message.rebackBonus = object.rebackBonus ?? "";
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
