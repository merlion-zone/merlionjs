import * as eip712 from "../../eip712";
import { typeUrls } from "../typeurls";

export const distributionEIP712Types: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  [
    typeUrls.MsgWithdrawDelegatorReward,
    {
      MsgValue: [
        { name: "delegator_address", type: "string" },
        { name: "validator_address", type: "string" },
      ],
    },
  ],
];
