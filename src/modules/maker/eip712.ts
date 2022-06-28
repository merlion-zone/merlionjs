import * as eip712 from "../../eip712";
import { typeUrls } from "../typeurls";

export const makerEIP712Types: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  [
    typeUrls.MsgMintBySwap,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "full_backing", type: "bool" },
        { name: "backing_in_max", type: "TypeBackingInMax" },
        { name: "lion_in_max", type: "TypeLionInMax" },
        { name: "mint_out_min", type: "TypeMintOutMin" },
      ],
      TypeBackingInMax: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      TypeLionInMax: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      TypeMintOutMin: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgBurnBySwap,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "burn_in", type: "TypeBurnIn" },
        { name: "backing_out_min", type: "TypeBackingOutMin" },
        { name: "lion_out_min", type: "TypeLionOutMin" },
      ],
      TypeBurnIn: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      TypeBackingOutMin: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      TypeLionOutMin: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgBuyBacking,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "lion_in", type: "TypeLionIn" },
        { name: "backing_out_min", type: "TypeBackingOutMin" },
      ],
      TypeLionIn: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      TypeBackingOutMin: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgSellBacking,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "backing_in", type: "TypeBackingIn" },
        { name: "lion_out_min", type: "TypeLionOutMin" },
      ],
      TypeBackingIn: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      TypeLionOutMin: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgMintByCollateral,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "collateral_enom", type: "string" },
        { name: "ltv", type: "string" },
        { name: "mint_out_min", type: "TypeMintOutMin" },
      ],
      TypeMintOutMin: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgBurnByCollateral,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "collateral_enom", type: "string" },
        { name: "repay_in_max", type: "TypeRepayInMax" },
      ],
      TypeRepayInMax: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgDepositCollateral,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "collateral", type: "TypeCollateral" },
      ],
      TypeCollateral: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgRedeemCollateral,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "collateral", type: "TypeCollateral" },
      ],
      TypeCollateral: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgLiquidateCollateral,
    {
      MsgValue: [
        { name: "sender", type: "string" },
        { name: "to", type: "string" },
        { name: "debtor", type: "string" },
        { name: "collateral", type: "TypeCollateral" },
      ],
      TypeCollateral: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
];
