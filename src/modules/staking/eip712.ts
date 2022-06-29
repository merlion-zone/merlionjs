import * as eip712 from "../../eip712";
import { typeUrls } from "../typeurls";

export const stakingEIP712Types: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  [
    typeUrls.MsgDelegate,
    {
      MsgValue: [
        { name: "delegator_address", type: "string" },
        { name: "validator_address", type: "string" },
        { name: "amount", type: "TypeAmount" },
      ],
      TypeAmount: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgBeginRedelegate,
    {
      MsgValue: [
        { name: "delegator_address", type: "string" },
        { name: "validator_src_address", type: "string" },
        { name: "validator_dst_address", type: "string" },
        { name: "amount", type: "TypeAmount" },
      ],
      TypeAmount: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgUndelegate,
    {
      MsgValue: [
        { name: "delegator_address", type: "string" },
        { name: "validator_address", type: "string" },
        { name: "amount", type: "TypeAmount" },
      ],
      TypeAmount: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
];
