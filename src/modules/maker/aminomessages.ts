import { AminoMsg } from "@cosmjs/amino";
import type { AminoConverters } from "@cosmjs/stargate";
import type { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

import type {
  MsgBurnByCollateral,
  MsgBurnBySwap,
  MsgBuyBacking,
  MsgDepositCollateral,
  MsgLiquidateCollateral,
  MsgMintByCollateral,
  MsgMintBySwap,
  MsgRedeemCollateral,
  MsgSellBacking,
} from "../../proto/merlion/maker/v1/tx";
import { typeUrls } from "../typeurls";

export interface AminoMsgMintBySwap extends AminoMsg {
  readonly type: "merlion/MsgMintBySwap";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly full_backing: boolean;
    readonly backing_in_max: Coin;
    readonly lion_in_max: Coin;
    readonly mint_out_min: Coin;
  };
}

export function isAminoMsgMintBySwap(msg: AminoMsg): msg is AminoMsgMintBySwap {
  return msg.type === "merlion/MsgMintBySwap";
}

export interface AminoMsgBurnBySwap extends AminoMsg {
  readonly type: "merlion/MsgBurnBySwap";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly burn_in: Coin;
    readonly backing_out_min: Coin;
    readonly lion_out_min: Coin;
  };
}

export function isAminoMsgBurnBySwap(msg: AminoMsg): msg is AminoMsgBurnBySwap {
  return msg.type === "merlion/MsgBurnBySwap";
}

export interface AminoMsgBuyBacking extends AminoMsg {
  readonly type: "merlion/MsgBuyBacking";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly lion_in: Coin;
    readonly backing_out_min: Coin;
  };
}

export function isAminoMsgBuyBacking(msg: AminoMsg): msg is AminoMsgBuyBacking {
  return msg.type === "merlion/MsgBuyBacking";
}

export interface AminoMsgSellBacking extends AminoMsg {
  readonly type: "merlion/MsgSellBacking";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly backing_in: Coin;
    readonly lion_out_min: Coin;
  };
}

export function isAminoMsgSellBacking(msg: AminoMsg): msg is AminoMsgSellBacking {
  return msg.type === "merlion/MsgSellBacking";
}

export interface AminoMsgMintByCollateral extends AminoMsg {
  readonly type: "merlion/MsgMintByCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly collateral_denom: string;
    readonly mint_out: Coin;
    readonly lion_in_max: Coin;
  };
}

export function isAminoMsgMintByCollateral(msg: AminoMsg): msg is AminoMsgMintByCollateral {
  return msg.type === "merlion/MsgMintByCollateral";
}

export interface AminoMsgBurnByCollateral extends AminoMsg {
  readonly type: "merlion/MsgBurnByCollateral";
  readonly value: {
    readonly sender: string;
    readonly collateral_denom: string;
    readonly repay_in_max: Coin;
  };
}

export function isAminoMsgBurnByCollateral(msg: AminoMsg): msg is AminoMsgBurnByCollateral {
  return msg.type === "merlion/MsgBurnByCollateral";
}

export interface AminoMsgDepositCollateral extends AminoMsg {
  readonly type: "merlion/MsgDepositCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly collateral: Coin;
  };
}

export function isAminoMsgDepositCollateral(msg: AminoMsg): msg is AminoMsgDepositCollateral {
  return msg.type === "merlion/MsgDepositCollateral";
}

export interface AminoMsgRedeemCollateral extends AminoMsg {
  readonly type: "merlion/MsgRedeemCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly collateral: Coin;
  };
}

export function isAminoMsgRedeemCollateral(msg: AminoMsg): msg is AminoMsgRedeemCollateral {
  return msg.type === "merlion/MsgRedeemCollateral";
}

export interface AminoMsgLiquidateCollateral extends AminoMsg {
  readonly type: "merlion/MsgLiquidateCollateral";
  readonly value: {
    readonly sender: string;
    readonly to: string;
    readonly debtor: string;
    readonly collateral: Coin;
  };
}

export function isAminoMsgLiquidateCollateral(msg: AminoMsg): msg is AminoMsgLiquidateCollateral {
  return msg.type === "merlion/MsgLiquidateCollateral";
}

export function createMakerAminoConverters(): AminoConverters {
  return {
    [typeUrls.MsgMintBySwap]: {
      aminoType: "merlion/MsgMintBySwap",
      toAmino: ({ sender, to, fullBacking, backingInMax, lionInMax, mintOutMin }: MsgMintBySwap) => ({
        sender,
        to,
        full_backing: fullBacking,
        backing_in_max: backingInMax,
        lion_in_max: lionInMax,
        mint_out_min: mintOutMin,
      }),
      fromAmino: ({
        sender,
        to,
        full_backing,
        backing_in_max,
        lion_in_max,
        mint_out_min,
      }: AminoMsgMintBySwap["value"]) => ({
        sender,
        to,
        fullBacking: full_backing,
        backingInMax: backing_in_max,
        lionInMax: lion_in_max,
        mintOutMin: mint_out_min,
      }),
    },
    [typeUrls.MsgBurnBySwap]: {
      aminoType: "merlion/MsgBurnBySwap",
      toAmino: ({ sender, to, burnIn, backingOutMin, lionOutMin }: MsgBurnBySwap) => ({
        sender,
        to,
        burn_in: burnIn,
        backing_out_min: backingOutMin,
        lion_out_min: lionOutMin,
      }),
      fromAmino: ({ sender, to, burn_in, backing_out_min, lion_out_min }: AminoMsgBurnBySwap["value"]) => ({
        sender,
        to,
        burnIn: burn_in,
        backingOutMin: backing_out_min,
        lionOutMin: lion_out_min,
      }),
    },
    [typeUrls.MsgBuyBacking]: {
      aminoType: "merlion/MsgBuyBacking",
      toAmino: ({ sender, to, lionIn, backingOutMin }: MsgBuyBacking) => ({
        sender,
        to,
        lion_in: lionIn,
        backing_out_min: backingOutMin,
      }),
      fromAmino: ({ sender, to, lion_in, backing_out_min }: AminoMsgBuyBacking["value"]) => ({
        sender,
        to,
        lionIn: lion_in,
        backingOutMin: backing_out_min,
      }),
    },
    [typeUrls.MsgSellBacking]: {
      aminoType: "merlion/MsgSellBacking",
      toAmino: ({ sender, to, backingIn, lionOutMin }: MsgSellBacking) => ({
        sender,
        to,
        backing_in: backingIn,
        lion_out_min: lionOutMin,
      }),
      fromAmino: ({ sender, to, backing_in, lion_out_min }: AminoMsgSellBacking["value"]) => ({
        sender,
        to,
        backingIn: backing_in,
        lionOutMin: lion_out_min,
      }),
    },
    [typeUrls.MsgMintByCollateral]: {
      aminoType: "merlion/MsgMintByCollateral",
      toAmino: ({ sender, to, collateralDenom, ltv, mintOutMin }: MsgMintByCollateral) => ({
        sender,
        to,
        collateral_denom: collateralDenom,
        ltv,
        mint_out_min: mintOutMin,
      }),
      fromAmino: ({
        sender,
        to,
        collateral_denom,
        mint_out,
        lion_in_max,
      }: AminoMsgMintByCollateral["value"]) => ({
        sender,
        to,
        collateralDenom: collateral_denom,
        mintOut: mint_out,
        lionInMax: lion_in_max,
      }),
    },
    [typeUrls.MsgBurnByCollateral]: {
      aminoType: "merlion/MsgBurnByCollateral",
      toAmino: ({ sender, collateralDenom, repayInMax }: MsgBurnByCollateral) => ({
        sender,
        collateral_denom: collateralDenom,
        repay_in_max: repayInMax,
      }),
      fromAmino: ({ sender, collateral_denom, repay_in_max }: AminoMsgBurnByCollateral["value"]) => ({
        sender,
        collateralDenom: collateral_denom,
        repayInMax: repay_in_max,
      }),
    },
    [typeUrls.MsgDepositCollateral]: {
      aminoType: "merlion/MsgDepositCollateral",
      toAmino: ({ sender, to, collateral }: MsgDepositCollateral) => ({
        sender,
        to,
        collateral,
      }),
      fromAmino: ({ sender, to, collateral }: AminoMsgDepositCollateral["value"]) => ({
        sender,
        to,
        collateral,
      }),
    },
    [typeUrls.MsgRedeemCollateral]: {
      aminoType: "merlion/MsgRedeemCollateral",
      toAmino: ({ sender, to, collateral }: MsgRedeemCollateral) => ({
        sender,
        to,
        collateral,
      }),
      fromAmino: ({ sender, to, collateral }: AminoMsgRedeemCollateral["value"]) => ({
        sender,
        to,
        collateral,
      }),
    },
    [typeUrls.MsgLiquidateCollateral]: {
      aminoType: "merlion/MsgLiquidateCollateral",
      toAmino: ({ sender, to, debtor, collateral }: MsgLiquidateCollateral) => ({
        sender,
        to,
        debtor,
        collateral,
      }),
      fromAmino: ({ sender, to, debtor, collateral }: AminoMsgLiquidateCollateral["value"]) => ({
        sender,
        to,
        debtor,
        collateral,
      }),
    },
  };
}
