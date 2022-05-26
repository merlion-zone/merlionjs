/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "merlion.vesting.v1";

/** GenesisState defines the vesting module's genesis state. */
export interface GenesisState {
  params?: Params;
  allocationAddresses?: AllocationAddresses;
}

/** Params defines the parameters for the module. */
export interface Params {
  allocation?: AllocationAmounts;
}

export interface AllocationAmounts {
  totalAmount: string;
  airdropAmount: string;
  veVestingAmount: string;
  stakingRewardAmount: string;
  communityPoolAmount: string;
  strategicReserveAmount: string;
  teamVestingAmount: string;
}

export interface AllocationAddresses {
  teamVestingAddr: string;
  strategicReserveCustodianAddr: string;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, allocationAddresses: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocationAddresses !== undefined) {
      AllocationAddresses.encode(message.allocationAddresses, writer.uint32(18).fork()).ldelim();
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
          message.allocationAddresses = AllocationAddresses.decode(reader, reader.uint32());
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
      allocationAddresses: isSet(object.allocationAddresses)
        ? AllocationAddresses.fromJSON(object.allocationAddresses)
        : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.allocationAddresses !== undefined &&
      (obj.allocationAddresses = message.allocationAddresses
        ? AllocationAddresses.toJSON(message.allocationAddresses)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.allocationAddresses =
      object.allocationAddresses !== undefined && object.allocationAddresses !== null
        ? AllocationAddresses.fromPartial(object.allocationAddresses)
        : undefined;
    return message;
  },
};

function createBaseParams(): Params {
  return { allocation: undefined };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocation !== undefined) {
      AllocationAmounts.encode(message.allocation, writer.uint32(10).fork()).ldelim();
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
          message.allocation = AllocationAmounts.decode(reader, reader.uint32());
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
      allocation: isSet(object.allocation) ? AllocationAmounts.fromJSON(object.allocation) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.allocation !== undefined &&
      (obj.allocation = message.allocation ? AllocationAmounts.toJSON(message.allocation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.allocation =
      object.allocation !== undefined && object.allocation !== null
        ? AllocationAmounts.fromPartial(object.allocation)
        : undefined;
    return message;
  },
};

function createBaseAllocationAmounts(): AllocationAmounts {
  return {
    totalAmount: "",
    airdropAmount: "",
    veVestingAmount: "",
    stakingRewardAmount: "",
    communityPoolAmount: "",
    strategicReserveAmount: "",
    teamVestingAmount: "",
  };
}

export const AllocationAmounts = {
  encode(message: AllocationAmounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalAmount !== "") {
      writer.uint32(10).string(message.totalAmount);
    }
    if (message.airdropAmount !== "") {
      writer.uint32(18).string(message.airdropAmount);
    }
    if (message.veVestingAmount !== "") {
      writer.uint32(26).string(message.veVestingAmount);
    }
    if (message.stakingRewardAmount !== "") {
      writer.uint32(34).string(message.stakingRewardAmount);
    }
    if (message.communityPoolAmount !== "") {
      writer.uint32(42).string(message.communityPoolAmount);
    }
    if (message.strategicReserveAmount !== "") {
      writer.uint32(50).string(message.strategicReserveAmount);
    }
    if (message.teamVestingAmount !== "") {
      writer.uint32(58).string(message.teamVestingAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocationAmounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocationAmounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAmount = reader.string();
          break;
        case 2:
          message.airdropAmount = reader.string();
          break;
        case 3:
          message.veVestingAmount = reader.string();
          break;
        case 4:
          message.stakingRewardAmount = reader.string();
          break;
        case 5:
          message.communityPoolAmount = reader.string();
          break;
        case 6:
          message.strategicReserveAmount = reader.string();
          break;
        case 7:
          message.teamVestingAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationAmounts {
    return {
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      airdropAmount: isSet(object.airdropAmount) ? String(object.airdropAmount) : "",
      veVestingAmount: isSet(object.veVestingAmount) ? String(object.veVestingAmount) : "",
      stakingRewardAmount: isSet(object.stakingRewardAmount) ? String(object.stakingRewardAmount) : "",
      communityPoolAmount: isSet(object.communityPoolAmount) ? String(object.communityPoolAmount) : "",
      strategicReserveAmount: isSet(object.strategicReserveAmount)
        ? String(object.strategicReserveAmount)
        : "",
      teamVestingAmount: isSet(object.teamVestingAmount) ? String(object.teamVestingAmount) : "",
    };
  },

  toJSON(message: AllocationAmounts): unknown {
    const obj: any = {};
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.airdropAmount !== undefined && (obj.airdropAmount = message.airdropAmount);
    message.veVestingAmount !== undefined && (obj.veVestingAmount = message.veVestingAmount);
    message.stakingRewardAmount !== undefined && (obj.stakingRewardAmount = message.stakingRewardAmount);
    message.communityPoolAmount !== undefined && (obj.communityPoolAmount = message.communityPoolAmount);
    message.strategicReserveAmount !== undefined &&
      (obj.strategicReserveAmount = message.strategicReserveAmount);
    message.teamVestingAmount !== undefined && (obj.teamVestingAmount = message.teamVestingAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocationAmounts>, I>>(object: I): AllocationAmounts {
    const message = createBaseAllocationAmounts();
    message.totalAmount = object.totalAmount ?? "";
    message.airdropAmount = object.airdropAmount ?? "";
    message.veVestingAmount = object.veVestingAmount ?? "";
    message.stakingRewardAmount = object.stakingRewardAmount ?? "";
    message.communityPoolAmount = object.communityPoolAmount ?? "";
    message.strategicReserveAmount = object.strategicReserveAmount ?? "";
    message.teamVestingAmount = object.teamVestingAmount ?? "";
    return message;
  },
};

function createBaseAllocationAddresses(): AllocationAddresses {
  return { teamVestingAddr: "", strategicReserveCustodianAddr: "" };
}

export const AllocationAddresses = {
  encode(message: AllocationAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamVestingAddr !== "") {
      writer.uint32(10).string(message.teamVestingAddr);
    }
    if (message.strategicReserveCustodianAddr !== "") {
      writer.uint32(18).string(message.strategicReserveCustodianAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocationAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocationAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.teamVestingAddr = reader.string();
          break;
        case 2:
          message.strategicReserveCustodianAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationAddresses {
    return {
      teamVestingAddr: isSet(object.teamVestingAddr) ? String(object.teamVestingAddr) : "",
      strategicReserveCustodianAddr: isSet(object.strategicReserveCustodianAddr)
        ? String(object.strategicReserveCustodianAddr)
        : "",
    };
  },

  toJSON(message: AllocationAddresses): unknown {
    const obj: any = {};
    message.teamVestingAddr !== undefined && (obj.teamVestingAddr = message.teamVestingAddr);
    message.strategicReserveCustodianAddr !== undefined &&
      (obj.strategicReserveCustodianAddr = message.strategicReserveCustodianAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocationAddresses>, I>>(object: I): AllocationAddresses {
    const message = createBaseAllocationAddresses();
    message.teamVestingAddr = object.teamVestingAddr ?? "";
    message.strategicReserveCustodianAddr = object.strategicReserveCustodianAddr ?? "";
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
