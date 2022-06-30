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
        { name: "value", type: "TypeContentValue" },
      ],
      TypeContentValue: [
        { name: "title", type: "string" },
        { name: "description", type: "string" },
      ],
      TypeInitialDeposit: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgVote,
    {
      MsgValue: [
        { name: "proposal_id", type: "uint64" },
        { name: "voter", type: "string" },
        { name: "option", type: "int32" },
      ],
    },
  ],
  [
    typeUrls.MsgDeposit,
    {
      MsgValue: [
        { name: "proposal_id", type: "uint64" },
        { name: "depositor", type: "string" },
        { name: "amount", type: "TypeAmount[]" },
      ],
      TypeAmount: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
];
