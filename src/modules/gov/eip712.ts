import * as eip712 from "../../eip712";
import { typeUrls } from "../typeurls";

export const govEIP712Types: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  [
    typeUrls.MsgSubmitProposal,
    {
      MsgValue: [
        { name: "content", type: "TypeContent" },
        { name: "initial_deposit", type: "TypeInitialDeposit[]" },
        { name: "proposer", type: "string" },
      ],
      TypeContent: [
        { name: "type", type: "string" },
        { name: "value", type: "TypeValue" },
      ],
      TypeValue: [
        { name: "title", type: "string" },
        { name: "description", type: "string" },
      ],
      TypeInitialDeposit: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
];
