/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.maker.v1";

/** MsgMintBySwap represents a message to mint Mer stablecoins by swapping. */
export interface MsgMintBySwap {
  sender: string;
  to: string;
  fullBacking: boolean;
  backingInMax?: Coin;
  lionInMax?: Coin;
  mintOutMin?: Coin;
}

/** MsgMintBySwapResponse defines the Msg/MintBySwap response type. */
export interface MsgMintBySwapResponse {
  backingIn?: Coin;
  lionIn?: Coin;
  mintOut?: Coin;
  mintFee?: Coin;
}

/** MsgBurnBySwap represents a message to burn Mer stablecoins by swapping. */
export interface MsgBurnBySwap {
  sender: string;
  to: string;
  burnIn?: Coin;
  backingOutMin?: Coin;
  lionOutMin?: Coin;
}

/** MsgBurnBySwapResponse defines the Msg/BurnBySwap response type. */
export interface MsgBurnBySwapResponse {
  burnFee?: Coin;
  backingOut?: Coin;
  lionOut?: Coin;
}

/** MsgBuyBacking represents a message to buy strong-backing assets. */
export interface MsgBuyBacking {
  sender: string;
  to: string;
  lionIn?: Coin;
  backingOutMin?: Coin;
}

/** MsgBuyBackingResponse defines the Msg/BuyBacking response type. */
export interface MsgBuyBackingResponse {
  backingOut?: Coin;
}

/**
 * MsgSellBacking represents a message to sell strong-backing
 * assets.
 */
export interface MsgSellBacking {
  sender: string;
  to: string;
  backingIn?: Coin;
  lionOutMin?: Coin;
}

/** MsgSellBackingResponse defines the Msg/SellBacking response type. */
export interface MsgSellBackingResponse {
  lionOut?: Coin;
}

/**
 * MsgMintByCollateral represents a message to mint Mer stablecoins by locking
 * collateral.
 */
export interface MsgMintByCollateral {
  sender: string;
  to: string;
  collateralDenom: string;
  mintOut?: Coin;
  lionInMax?: Coin;
}

/** MsgMintByCollateralResponse defines the Msg/MintByCollateral response type. */
export interface MsgMintByCollateralResponse {
  mintFee?: Coin;
  lionIn?: Coin;
}

/**
 * MsgBurnByCollateral represents a message to burn Mer stablecoins by unlocking
 * collateral.
 */
export interface MsgBurnByCollateral {
  sender: string;
  collateralDenom: string;
  repayInMax?: Coin;
}

/** MsgBurnByCollateralResponse defines the Msg/BurnByCollateral response type. */
export interface MsgBurnByCollateralResponse {
  repayIn?: Coin;
}

/** MsgDepositCollateral represents a message to deposit collateral assets. */
export interface MsgDepositCollateral {
  sender: string;
  to: string;
  collateral?: Coin;
}

/** MsgDepositCollateralResponse defines the Msg/DepositCollateral response type. */
export interface MsgDepositCollateralResponse {}

/** MsgRedeemCollateral represents a message to redeem collateral assets. */
export interface MsgRedeemCollateral {
  sender: string;
  to: string;
  collateral?: Coin;
}

/** MsgRedeemCollateralResponse defines the Msg/RedeemCollateral response type. */
export interface MsgRedeemCollateralResponse {}

/** MsgLiquidateCollateral represents a message to liquidates collateral assets. */
export interface MsgLiquidateCollateral {
  sender: string;
  to: string;
  debtor: string;
  collateral?: Coin;
}

/**
 * MsgLiquidateCollateralResponse defines the Msg/LiquidateCollateral response
 * type.
 */
export interface MsgLiquidateCollateralResponse {
  repayIn?: Coin;
  collateralOut?: Coin;
}

function createBaseMsgMintBySwap(): MsgMintBySwap {
  return {
    sender: "",
    to: "",
    fullBacking: false,
    backingInMax: undefined,
    lionInMax: undefined,
    mintOutMin: undefined,
  };
}

export const MsgMintBySwap = {
  encode(message: MsgMintBySwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.fullBacking === true) {
      writer.uint32(24).bool(message.fullBacking);
    }
    if (message.backingInMax !== undefined) {
      Coin.encode(message.backingInMax, writer.uint32(34).fork()).ldelim();
    }
    if (message.lionInMax !== undefined) {
      Coin.encode(message.lionInMax, writer.uint32(42).fork()).ldelim();
    }
    if (message.mintOutMin !== undefined) {
      Coin.encode(message.mintOutMin, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBySwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBySwap();
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
          message.fullBacking = reader.bool();
          break;
        case 4:
          message.backingInMax = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lionInMax = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.mintOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBySwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      fullBacking: isSet(object.fullBacking) ? Boolean(object.fullBacking) : false,
      backingInMax: isSet(object.backingInMax) ? Coin.fromJSON(object.backingInMax) : undefined,
      lionInMax: isSet(object.lionInMax) ? Coin.fromJSON(object.lionInMax) : undefined,
      mintOutMin: isSet(object.mintOutMin) ? Coin.fromJSON(object.mintOutMin) : undefined,
    };
  },

  toJSON(message: MsgMintBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.fullBacking !== undefined && (obj.fullBacking = message.fullBacking);
    message.backingInMax !== undefined &&
      (obj.backingInMax = message.backingInMax ? Coin.toJSON(message.backingInMax) : undefined);
    message.lionInMax !== undefined &&
      (obj.lionInMax = message.lionInMax ? Coin.toJSON(message.lionInMax) : undefined);
    message.mintOutMin !== undefined &&
      (obj.mintOutMin = message.mintOutMin ? Coin.toJSON(message.mintOutMin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintBySwap>, I>>(object: I): MsgMintBySwap {
    const message = createBaseMsgMintBySwap();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.fullBacking = object.fullBacking ?? false;
    message.backingInMax =
      object.backingInMax !== undefined && object.backingInMax !== null
        ? Coin.fromPartial(object.backingInMax)
        : undefined;
    message.lionInMax =
      object.lionInMax !== undefined && object.lionInMax !== null
        ? Coin.fromPartial(object.lionInMax)
        : undefined;
    message.mintOutMin =
      object.mintOutMin !== undefined && object.mintOutMin !== null
        ? Coin.fromPartial(object.mintOutMin)
        : undefined;
    return message;
  },
};

function createBaseMsgMintBySwapResponse(): MsgMintBySwapResponse {
  return { backingIn: undefined, lionIn: undefined, mintOut: undefined, mintFee: undefined };
}

export const MsgMintBySwapResponse = {
  encode(message: MsgMintBySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBySwapResponse();
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

  fromJSON(object: any): MsgMintBySwapResponse {
    return {
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      lionIn: isSet(object.lionIn) ? Coin.fromJSON(object.lionIn) : undefined,
      mintOut: isSet(object.mintOut) ? Coin.fromJSON(object.mintOut) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
    };
  },

  toJSON(message: MsgMintBySwapResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgMintBySwapResponse>, I>>(object: I): MsgMintBySwapResponse {
    const message = createBaseMsgMintBySwapResponse();
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

function createBaseMsgBurnBySwap(): MsgBurnBySwap {
  return { sender: "", to: "", burnIn: undefined, backingOutMin: undefined, lionOutMin: undefined };
}

export const MsgBurnBySwap = {
  encode(message: MsgBurnBySwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.burnIn !== undefined) {
      Coin.encode(message.burnIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.backingOutMin !== undefined) {
      Coin.encode(message.backingOutMin, writer.uint32(34).fork()).ldelim();
    }
    if (message.lionOutMin !== undefined) {
      Coin.encode(message.lionOutMin, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnBySwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnBySwap();
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
          message.burnIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backingOutMin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lionOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnBySwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      burnIn: isSet(object.burnIn) ? Coin.fromJSON(object.burnIn) : undefined,
      backingOutMin: isSet(object.backingOutMin) ? Coin.fromJSON(object.backingOutMin) : undefined,
      lionOutMin: isSet(object.lionOutMin) ? Coin.fromJSON(object.lionOutMin) : undefined,
    };
  },

  toJSON(message: MsgBurnBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.burnIn !== undefined && (obj.burnIn = message.burnIn ? Coin.toJSON(message.burnIn) : undefined);
    message.backingOutMin !== undefined &&
      (obj.backingOutMin = message.backingOutMin ? Coin.toJSON(message.backingOutMin) : undefined);
    message.lionOutMin !== undefined &&
      (obj.lionOutMin = message.lionOutMin ? Coin.toJSON(message.lionOutMin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnBySwap>, I>>(object: I): MsgBurnBySwap {
    const message = createBaseMsgBurnBySwap();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.burnIn =
      object.burnIn !== undefined && object.burnIn !== null ? Coin.fromPartial(object.burnIn) : undefined;
    message.backingOutMin =
      object.backingOutMin !== undefined && object.backingOutMin !== null
        ? Coin.fromPartial(object.backingOutMin)
        : undefined;
    message.lionOutMin =
      object.lionOutMin !== undefined && object.lionOutMin !== null
        ? Coin.fromPartial(object.lionOutMin)
        : undefined;
    return message;
  },
};

function createBaseMsgBurnBySwapResponse(): MsgBurnBySwapResponse {
  return { burnFee: undefined, backingOut: undefined, lionOut: undefined };
}

export const MsgBurnBySwapResponse = {
  encode(message: MsgBurnBySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnBySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnBySwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnBySwapResponse {
    return {
      burnFee: isSet(object.burnFee) ? Coin.fromJSON(object.burnFee) : undefined,
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
      lionOut: isSet(object.lionOut) ? Coin.fromJSON(object.lionOut) : undefined,
    };
  },

  toJSON(message: MsgBurnBySwapResponse): unknown {
    const obj: any = {};
    message.burnFee !== undefined &&
      (obj.burnFee = message.burnFee ? Coin.toJSON(message.burnFee) : undefined);
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut ? Coin.toJSON(message.lionOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnBySwapResponse>, I>>(object: I): MsgBurnBySwapResponse {
    const message = createBaseMsgBurnBySwapResponse();
    message.burnFee =
      object.burnFee !== undefined && object.burnFee !== null ? Coin.fromPartial(object.burnFee) : undefined;
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    message.lionOut =
      object.lionOut !== undefined && object.lionOut !== null ? Coin.fromPartial(object.lionOut) : undefined;
    return message;
  },
};

function createBaseMsgBuyBacking(): MsgBuyBacking {
  return { sender: "", to: "", lionIn: undefined, backingOutMin: undefined };
}

export const MsgBuyBacking = {
  encode(message: MsgBuyBacking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.backingOutMin !== undefined) {
      Coin.encode(message.backingOutMin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyBacking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyBacking();
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
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backingOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBacking {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      lionIn: isSet(object.lionIn) ? Coin.fromJSON(object.lionIn) : undefined,
      backingOutMin: isSet(object.backingOutMin) ? Coin.fromJSON(object.backingOutMin) : undefined,
    };
  },

  toJSON(message: MsgBuyBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.lionIn !== undefined && (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.backingOutMin !== undefined &&
      (obj.backingOutMin = message.backingOutMin ? Coin.toJSON(message.backingOutMin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyBacking>, I>>(object: I): MsgBuyBacking {
    const message = createBaseMsgBuyBacking();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.lionIn =
      object.lionIn !== undefined && object.lionIn !== null ? Coin.fromPartial(object.lionIn) : undefined;
    message.backingOutMin =
      object.backingOutMin !== undefined && object.backingOutMin !== null
        ? Coin.fromPartial(object.backingOutMin)
        : undefined;
    return message;
  },
};

function createBaseMsgBuyBackingResponse(): MsgBuyBackingResponse {
  return { backingOut: undefined };
}

export const MsgBuyBackingResponse = {
  encode(message: MsgBuyBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyBackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBackingResponse {
    return {
      backingOut: isSet(object.backingOut) ? Coin.fromJSON(object.backingOut) : undefined,
    };
  },

  toJSON(message: MsgBuyBackingResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut ? Coin.toJSON(message.backingOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyBackingResponse>, I>>(object: I): MsgBuyBackingResponse {
    const message = createBaseMsgBuyBackingResponse();
    message.backingOut =
      object.backingOut !== undefined && object.backingOut !== null
        ? Coin.fromPartial(object.backingOut)
        : undefined;
    return message;
  },
};

function createBaseMsgSellBacking(): MsgSellBacking {
  return { sender: "", to: "", backingIn: undefined, lionOutMin: undefined };
}

export const MsgSellBacking = {
  encode(message: MsgSellBacking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.lionOutMin !== undefined) {
      Coin.encode(message.lionOutMin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellBacking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellBacking();
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
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lionOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBacking {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      backingIn: isSet(object.backingIn) ? Coin.fromJSON(object.backingIn) : undefined,
      lionOutMin: isSet(object.lionOutMin) ? Coin.fromJSON(object.lionOutMin) : undefined,
    };
  },

  toJSON(message: MsgSellBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn ? Coin.toJSON(message.backingIn) : undefined);
    message.lionOutMin !== undefined &&
      (obj.lionOutMin = message.lionOutMin ? Coin.toJSON(message.lionOutMin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellBacking>, I>>(object: I): MsgSellBacking {
    const message = createBaseMsgSellBacking();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.backingIn =
      object.backingIn !== undefined && object.backingIn !== null
        ? Coin.fromPartial(object.backingIn)
        : undefined;
    message.lionOutMin =
      object.lionOutMin !== undefined && object.lionOutMin !== null
        ? Coin.fromPartial(object.lionOutMin)
        : undefined;
    return message;
  },
};

function createBaseMsgSellBackingResponse(): MsgSellBackingResponse {
  return { lionOut: undefined };
}

export const MsgSellBackingResponse = {
  encode(message: MsgSellBackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellBackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellBackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBackingResponse {
    return {
      lionOut: isSet(object.lionOut) ? Coin.fromJSON(object.lionOut) : undefined,
    };
  },

  toJSON(message: MsgSellBackingResponse): unknown {
    const obj: any = {};
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut ? Coin.toJSON(message.lionOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellBackingResponse>, I>>(object: I): MsgSellBackingResponse {
    const message = createBaseMsgSellBackingResponse();
    message.lionOut =
      object.lionOut !== undefined && object.lionOut !== null ? Coin.fromPartial(object.lionOut) : undefined;
    return message;
  },
};

function createBaseMsgMintByCollateral(): MsgMintByCollateral {
  return { sender: "", to: "", collateralDenom: "", mintOut: undefined, lionInMax: undefined };
}

export const MsgMintByCollateral = {
  encode(message: MsgMintByCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(34).fork()).ldelim();
    }
    if (message.lionInMax !== undefined) {
      Coin.encode(message.lionInMax, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintByCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintByCollateral();
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
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lionInMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintByCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
      mintOut: isSet(object.mintOut) ? Coin.fromJSON(object.mintOut) : undefined,
      lionInMax: isSet(object.lionInMax) ? Coin.fromJSON(object.lionInMax) : undefined,
    };
  },

  toJSON(message: MsgMintByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut ? Coin.toJSON(message.mintOut) : undefined);
    message.lionInMax !== undefined &&
      (obj.lionInMax = message.lionInMax ? Coin.toJSON(message.lionInMax) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintByCollateral>, I>>(object: I): MsgMintByCollateral {
    const message = createBaseMsgMintByCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.mintOut =
      object.mintOut !== undefined && object.mintOut !== null ? Coin.fromPartial(object.mintOut) : undefined;
    message.lionInMax =
      object.lionInMax !== undefined && object.lionInMax !== null
        ? Coin.fromPartial(object.lionInMax)
        : undefined;
    return message;
  },
};

function createBaseMsgMintByCollateralResponse(): MsgMintByCollateralResponse {
  return { mintFee: undefined, lionIn: undefined };
}

export const MsgMintByCollateralResponse = {
  encode(message: MsgMintByCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintByCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintByCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintByCollateralResponse {
    return {
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
      lionIn: isSet(object.lionIn) ? Coin.fromJSON(object.lionIn) : undefined,
    };
  },

  toJSON(message: MsgMintByCollateralResponse): unknown {
    const obj: any = {};
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    message.lionIn !== undefined && (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintByCollateralResponse>, I>>(
    object: I,
  ): MsgMintByCollateralResponse {
    const message = createBaseMsgMintByCollateralResponse();
    message.mintFee =
      object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    message.lionIn =
      object.lionIn !== undefined && object.lionIn !== null ? Coin.fromPartial(object.lionIn) : undefined;
    return message;
  },
};

function createBaseMsgBurnByCollateral(): MsgBurnByCollateral {
  return { sender: "", collateralDenom: "", repayInMax: undefined };
}

export const MsgBurnByCollateral = {
  encode(message: MsgBurnByCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    if (message.repayInMax !== undefined) {
      Coin.encode(message.repayInMax, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnByCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnByCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        case 3:
          message.repayInMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
      repayInMax: isSet(object.repayInMax) ? Coin.fromJSON(object.repayInMax) : undefined,
    };
  },

  toJSON(message: MsgBurnByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    message.repayInMax !== undefined &&
      (obj.repayInMax = message.repayInMax ? Coin.toJSON(message.repayInMax) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnByCollateral>, I>>(object: I): MsgBurnByCollateral {
    const message = createBaseMsgBurnByCollateral();
    message.sender = object.sender ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.repayInMax =
      object.repayInMax !== undefined && object.repayInMax !== null
        ? Coin.fromPartial(object.repayInMax)
        : undefined;
    return message;
  },
};

function createBaseMsgBurnByCollateralResponse(): MsgBurnByCollateralResponse {
  return { repayIn: undefined };
}

export const MsgBurnByCollateralResponse = {
  encode(message: MsgBurnByCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repayIn !== undefined) {
      Coin.encode(message.repayIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnByCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnByCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateralResponse {
    return {
      repayIn: isSet(object.repayIn) ? Coin.fromJSON(object.repayIn) : undefined,
    };
  },

  toJSON(message: MsgBurnByCollateralResponse): unknown {
    const obj: any = {};
    message.repayIn !== undefined &&
      (obj.repayIn = message.repayIn ? Coin.toJSON(message.repayIn) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnByCollateralResponse>, I>>(
    object: I,
  ): MsgBurnByCollateralResponse {
    const message = createBaseMsgBurnByCollateralResponse();
    message.repayIn =
      object.repayIn !== undefined && object.repayIn !== null ? Coin.fromPartial(object.repayIn) : undefined;
    return message;
  },
};

function createBaseMsgDepositCollateral(): MsgDepositCollateral {
  return { sender: "", to: "", collateral: undefined };
}

export const MsgDepositCollateral = {
  encode(message: MsgDepositCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCollateral();
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
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
    };
  },

  toJSON(message: MsgDepositCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositCollateral>, I>>(object: I): MsgDepositCollateral {
    const message = createBaseMsgDepositCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    return message;
  },
};

function createBaseMsgDepositCollateralResponse(): MsgDepositCollateralResponse {
  return {};
}

export const MsgDepositCollateralResponse = {
  encode(_: MsgDepositCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositCollateralResponse();
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

  fromJSON(_: any): MsgDepositCollateralResponse {
    return {};
  },

  toJSON(_: MsgDepositCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositCollateralResponse>, I>>(
    _: I,
  ): MsgDepositCollateralResponse {
    const message = createBaseMsgDepositCollateralResponse();
    return message;
  },
};

function createBaseMsgRedeemCollateral(): MsgRedeemCollateral {
  return { sender: "", to: "", collateral: undefined };
}

export const MsgRedeemCollateral = {
  encode(message: MsgRedeemCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCollateral();
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
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
    };
  },

  toJSON(message: MsgRedeemCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCollateral>, I>>(object: I): MsgRedeemCollateral {
    const message = createBaseMsgRedeemCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    return message;
  },
};

function createBaseMsgRedeemCollateralResponse(): MsgRedeemCollateralResponse {
  return {};
}

export const MsgRedeemCollateralResponse = {
  encode(_: MsgRedeemCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCollateralResponse();
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

  fromJSON(_: any): MsgRedeemCollateralResponse {
    return {};
  },

  toJSON(_: MsgRedeemCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCollateralResponse>, I>>(
    _: I,
  ): MsgRedeemCollateralResponse {
    const message = createBaseMsgRedeemCollateralResponse();
    return message;
  },
};

function createBaseMsgLiquidateCollateral(): MsgLiquidateCollateral {
  return { sender: "", to: "", debtor: "", collateral: undefined };
}

export const MsgLiquidateCollateral = {
  encode(message: MsgLiquidateCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.debtor !== "") {
      writer.uint32(26).string(message.debtor);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateCollateral();
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
          message.debtor = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateral {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      to: isSet(object.to) ? String(object.to) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
    };
  },

  toJSON(message: MsgLiquidateCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateCollateral>, I>>(object: I): MsgLiquidateCollateral {
    const message = createBaseMsgLiquidateCollateral();
    message.sender = object.sender ?? "";
    message.to = object.to ?? "";
    message.debtor = object.debtor ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    return message;
  },
};

function createBaseMsgLiquidateCollateralResponse(): MsgLiquidateCollateralResponse {
  return { repayIn: undefined, collateralOut: undefined };
}

export const MsgLiquidateCollateralResponse = {
  encode(message: MsgLiquidateCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repayIn !== undefined) {
      Coin.encode(message.repayIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateralOut !== undefined) {
      Coin.encode(message.collateralOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.collateralOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateralResponse {
    return {
      repayIn: isSet(object.repayIn) ? Coin.fromJSON(object.repayIn) : undefined,
      collateralOut: isSet(object.collateralOut) ? Coin.fromJSON(object.collateralOut) : undefined,
    };
  },

  toJSON(message: MsgLiquidateCollateralResponse): unknown {
    const obj: any = {};
    message.repayIn !== undefined &&
      (obj.repayIn = message.repayIn ? Coin.toJSON(message.repayIn) : undefined);
    message.collateralOut !== undefined &&
      (obj.collateralOut = message.collateralOut ? Coin.toJSON(message.collateralOut) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateCollateralResponse>, I>>(
    object: I,
  ): MsgLiquidateCollateralResponse {
    const message = createBaseMsgLiquidateCollateralResponse();
    message.repayIn =
      object.repayIn !== undefined && object.repayIn !== null ? Coin.fromPartial(object.repayIn) : undefined;
    message.collateralOut =
      object.collateralOut !== undefined && object.collateralOut !== null
        ? Coin.fromPartial(object.collateralOut)
        : undefined;
    return message;
  },
};

/** Msg defines the maker Msg service. */
export interface Msg {
  /**
   * MintBySwap mints Mer stablecoins by swapping in strong-backing assets and
   * Lion coins.
   */
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse>;
  /**
   * BurnBySwap burns Mer stablecoins by swapping out strong-backing assets and
   * Lion coins.
   */
  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse>;
  /** BuyBacking buys strong-backing assets by spending Lion coins. */
  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse>;
  /**
   * SellBacking sells strong-backing assets by earning Lion
   * coins.
   */
  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse>;
  /**
   * MintByCollateral mints Mer stablecoins by locking collateral assets and
   * spending Lion coins.
   */
  MintByCollateral(request: MsgMintByCollateral): Promise<MsgMintByCollateralResponse>;
  /**
   * BurnByCollateral burns Mer stablecoins by unlocking collateral assets and
   * earning Lion coins.
   */
  BurnByCollateral(request: MsgBurnByCollateral): Promise<MsgBurnByCollateralResponse>;
  /** DepositCollateral deposits collateral assets. */
  DepositCollateral(request: MsgDepositCollateral): Promise<MsgDepositCollateralResponse>;
  /** RedeemCollateral redeems collateral assets. */
  RedeemCollateral(request: MsgRedeemCollateral): Promise<MsgRedeemCollateralResponse>;
  /**
   * LiquidateCollateral liquidates collateral assets which is
   * undercollateralized.
   */
  LiquidateCollateral(request: MsgLiquidateCollateral): Promise<MsgLiquidateCollateralResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MintBySwap = this.MintBySwap.bind(this);
    this.BurnBySwap = this.BurnBySwap.bind(this);
    this.BuyBacking = this.BuyBacking.bind(this);
    this.SellBacking = this.SellBacking.bind(this);
    this.MintByCollateral = this.MintByCollateral.bind(this);
    this.BurnByCollateral = this.BurnByCollateral.bind(this);
    this.DepositCollateral = this.DepositCollateral.bind(this);
    this.RedeemCollateral = this.RedeemCollateral.bind(this);
    this.LiquidateCollateral = this.LiquidateCollateral.bind(this);
  }
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse> {
    const data = MsgMintBySwap.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "MintBySwap", data);
    return promise.then((data) => MsgMintBySwapResponse.decode(new _m0.Reader(data)));
  }

  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse> {
    const data = MsgBurnBySwap.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "BurnBySwap", data);
    return promise.then((data) => MsgBurnBySwapResponse.decode(new _m0.Reader(data)));
  }

  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse> {
    const data = MsgBuyBacking.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "BuyBacking", data);
    return promise.then((data) => MsgBuyBackingResponse.decode(new _m0.Reader(data)));
  }

  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse> {
    const data = MsgSellBacking.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "SellBacking", data);
    return promise.then((data) => MsgSellBackingResponse.decode(new _m0.Reader(data)));
  }

  MintByCollateral(request: MsgMintByCollateral): Promise<MsgMintByCollateralResponse> {
    const data = MsgMintByCollateral.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "MintByCollateral", data);
    return promise.then((data) => MsgMintByCollateralResponse.decode(new _m0.Reader(data)));
  }

  BurnByCollateral(request: MsgBurnByCollateral): Promise<MsgBurnByCollateralResponse> {
    const data = MsgBurnByCollateral.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "BurnByCollateral", data);
    return promise.then((data) => MsgBurnByCollateralResponse.decode(new _m0.Reader(data)));
  }

  DepositCollateral(request: MsgDepositCollateral): Promise<MsgDepositCollateralResponse> {
    const data = MsgDepositCollateral.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "DepositCollateral", data);
    return promise.then((data) => MsgDepositCollateralResponse.decode(new _m0.Reader(data)));
  }

  RedeemCollateral(request: MsgRedeemCollateral): Promise<MsgRedeemCollateralResponse> {
    const data = MsgRedeemCollateral.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "RedeemCollateral", data);
    return promise.then((data) => MsgRedeemCollateralResponse.decode(new _m0.Reader(data)));
  }

  LiquidateCollateral(request: MsgLiquidateCollateral): Promise<MsgLiquidateCollateralResponse> {
    const data = MsgLiquidateCollateral.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Msg", "LiquidateCollateral", data);
    return promise.then((data) => MsgLiquidateCollateralResponse.decode(new _m0.Reader(data)));
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
