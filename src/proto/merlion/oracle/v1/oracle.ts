/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "merlion.oracle.v1";

/** TargetSource enumerates the quotation source of a target asset. */
export enum TargetSource {
  /** TARGET_SOURCE_UNSPECIFIED - TARGET_SOURCE_UNSPECIFIED defines an invalid/undefined target source. */
  TARGET_SOURCE_UNSPECIFIED = 0,
  /** TARGET_SOURCE_VALIDATORS - TARGET_SOURCE_VALIDATORS target quotation source is from validators. */
  TARGET_SOURCE_VALIDATORS = 1,
  /** TARGET_SOURCE_DEX - TARGET_SOURCE_DEX target quotation source is from on-chain DEX. */
  TARGET_SOURCE_DEX = 2,
  /**
   * TARGET_SOURCE_INTERCHAIN_DEX - TARGET_SOURCE_INTERCHAIN_DEX target quotation source is from inter-chain
   * DEX.
   */
  TARGET_SOURCE_INTERCHAIN_DEX = 3,
  /**
   * TARGET_SOURCE_INTERCHAIN_ORACLE - TARGET_SOURCE_INTERCHAIN_ORACLE target quotation source is from inter-chain
   * oracle.
   */
  TARGET_SOURCE_INTERCHAIN_ORACLE = 4,
  UNRECOGNIZED = -1,
}

export function targetSourceFromJSON(object: any): TargetSource {
  switch (object) {
    case 0:
    case "TARGET_SOURCE_UNSPECIFIED":
      return TargetSource.TARGET_SOURCE_UNSPECIFIED;
    case 1:
    case "TARGET_SOURCE_VALIDATORS":
      return TargetSource.TARGET_SOURCE_VALIDATORS;
    case 2:
    case "TARGET_SOURCE_DEX":
      return TargetSource.TARGET_SOURCE_DEX;
    case 3:
    case "TARGET_SOURCE_INTERCHAIN_DEX":
      return TargetSource.TARGET_SOURCE_INTERCHAIN_DEX;
    case 4:
    case "TARGET_SOURCE_INTERCHAIN_ORACLE":
      return TargetSource.TARGET_SOURCE_INTERCHAIN_ORACLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TargetSource.UNRECOGNIZED;
  }
}

export function targetSourceToJSON(object: TargetSource): string {
  switch (object) {
    case TargetSource.TARGET_SOURCE_UNSPECIFIED:
      return "TARGET_SOURCE_UNSPECIFIED";
    case TargetSource.TARGET_SOURCE_VALIDATORS:
      return "TARGET_SOURCE_VALIDATORS";
    case TargetSource.TARGET_SOURCE_DEX:
      return "TARGET_SOURCE_DEX";
    case TargetSource.TARGET_SOURCE_INTERCHAIN_DEX:
      return "TARGET_SOURCE_INTERCHAIN_DEX";
    case TargetSource.TARGET_SOURCE_INTERCHAIN_ORACLE:
      return "TARGET_SOURCE_INTERCHAIN_ORACLE";
    case TargetSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: Long;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: Long;
  slashFraction: string;
  slashWindow: Long;
  minValidPerWindow: string;
}

/**
 * AggregateExchangeRatePrevote represents the aggregate prevoting on the
 * ExchangeRateVote. The purpose of aggregate prevoting is to hide vote exchange
 * rates with hash which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: Long;
}

/**
 * AggregateExchangeRateVote represents the voting on
 * the exchange rates of various assets denominated in uUSD.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}

/** ExchangeRateTuple stores interpreted exchange rates data. */
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}

/**
 * RegisterTargetProposal is a gov Content type to register eligible
 * target asset which will be price quoted.
 */
export interface RegisterTargetProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** target params */
  targetParams?: TargetParams;
}

export interface TargetParams {
  /** coin denom */
  denom: string;
  /** quotation source */
  source: TargetSource;
  /** quotation source DEX contract address */
  sourceDexContract: string;
}

function createBaseParams(): Params {
  return {
    votePeriod: Long.UZERO,
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: Long.UZERO,
    slashFraction: "",
    slashWindow: Long.UZERO,
    minValidPerWindow: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }
    if (!message.rewardDistributionWindow.isZero()) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    if (message.slashFraction !== "") {
      writer.uint32(50).string(message.slashFraction);
    }
    if (!message.slashWindow.isZero()) {
      writer.uint32(56).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(message.minValidPerWindow);
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
          message.votePeriod = reader.uint64() as Long;
          break;
        case 2:
          message.voteThreshold = reader.string();
          break;
        case 3:
          message.rewardBand = reader.string();
          break;
        case 4:
          message.rewardDistributionWindow = reader.uint64() as Long;
          break;
        case 6:
          message.slashFraction = reader.string();
          break;
        case 7:
          message.slashWindow = reader.uint64() as Long;
          break;
        case 8:
          message.minValidPerWindow = reader.string();
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
      votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.UZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      rewardDistributionWindow: isSet(object.rewardDistributionWindow)
        ? Long.fromValue(object.rewardDistributionWindow)
        : Long.UZERO,
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Long.fromValue(object.slashWindow) : Long.UZERO,
      minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.UZERO).toString());
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand);
    message.rewardDistributionWindow !== undefined &&
      (obj.rewardDistributionWindow = (message.rewardDistributionWindow || Long.UZERO).toString());
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || Long.UZERO).toString());
    message.minValidPerWindow !== undefined && (obj.minValidPerWindow = message.minValidPerWindow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.votePeriod =
      object.votePeriod !== undefined && object.votePeriod !== null
        ? Long.fromValue(object.votePeriod)
        : Long.UZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow =
      object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null
        ? Long.fromValue(object.rewardDistributionWindow)
        : Long.UZERO;
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow =
      object.slashWindow !== undefined && object.slashWindow !== null
        ? Long.fromValue(object.slashWindow)
        : Long.UZERO;
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    return message;
  },
};

function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return { hash: "", voter: "", submitBlock: Long.UZERO };
}

export const AggregateExchangeRatePrevote = {
  encode(message: AggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (!message.submitBlock.isZero()) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submitBlock = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      submitBlock: isSet(object.submitBlock) ? Long.fromValue(object.submitBlock) : Long.UZERO,
    };
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.voter !== undefined && (obj.voter = message.voter);
    message.submitBlock !== undefined && (obj.submitBlock = (message.submitBlock || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRatePrevote>, I>>(
    object: I,
  ): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock =
      object.submitBlock !== undefined && object.submitBlock !== null
        ? Long.fromValue(object.submitBlock)
        : Long.UZERO;
    return message;
  },
};

function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return { exchangeRateTuples: [], voter: "" };
}

export const AggregateExchangeRateVote = {
  encode(message: AggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    return {
      exchangeRateTuples: Array.isArray(object?.exchangeRateTuples)
        ? object.exchangeRateTuples.map((e: any) => ExchangeRateTuple.fromJSON(e))
        : [],
      voter: isSet(object.voter) ? String(object.voter) : "",
    };
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined,
      );
    } else {
      obj.exchangeRateTuples = [];
    }
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(
    object: I,
  ): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples =
      object.exchangeRateTuples?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  },
};

function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return { denom: "", exchangeRate: "" };
}

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
    };
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(object: I): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
};

function createBaseRegisterTargetProposal(): RegisterTargetProposal {
  return { title: "", description: "", targetParams: undefined };
}

export const RegisterTargetProposal = {
  encode(message: RegisterTargetProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.targetParams !== undefined) {
      TargetParams.encode(message.targetParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTargetProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterTargetProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.targetParams = TargetParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterTargetProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      targetParams: isSet(object.targetParams) ? TargetParams.fromJSON(object.targetParams) : undefined,
    };
  },

  toJSON(message: RegisterTargetProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.targetParams !== undefined &&
      (obj.targetParams = message.targetParams ? TargetParams.toJSON(message.targetParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterTargetProposal>, I>>(object: I): RegisterTargetProposal {
    const message = createBaseRegisterTargetProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.targetParams =
      object.targetParams !== undefined && object.targetParams !== null
        ? TargetParams.fromPartial(object.targetParams)
        : undefined;
    return message;
  },
};

function createBaseTargetParams(): TargetParams {
  return { denom: "", source: 0, sourceDexContract: "" };
}

export const TargetParams = {
  encode(message: TargetParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.source !== 0) {
      writer.uint32(16).int32(message.source);
    }
    if (message.sourceDexContract !== "") {
      writer.uint32(26).string(message.sourceDexContract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.source = reader.int32() as any;
          break;
        case 3:
          message.sourceDexContract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetParams {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      source: isSet(object.source) ? targetSourceFromJSON(object.source) : 0,
      sourceDexContract: isSet(object.sourceDexContract) ? String(object.sourceDexContract) : "",
    };
  },

  toJSON(message: TargetParams): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.source !== undefined && (obj.source = targetSourceToJSON(message.source));
    message.sourceDexContract !== undefined && (obj.sourceDexContract = message.sourceDexContract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetParams>, I>>(object: I): TargetParams {
    const message = createBaseTargetParams();
    message.denom = object.denom ?? "";
    message.source = object.source ?? 0;
    message.sourceDexContract = object.sourceDexContract ?? "";
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
