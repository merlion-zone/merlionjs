import * as eip712 from "../../eip712";
import { typeUrls } from "../typeurls";

export const bankEIP712Types: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  [
    typeUrls.MsgSend,
    {
      MsgValue: [
        { name: "from_address", type: "string" },
        { name: "to_address", type: "string" },
        { name: "amount", type: "TypeAmount[]" },
      ],
      TypeAmount: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
  [
    typeUrls.MsgMultiSend,
    {
      MsgValue: [
        { name: "inputs", type: "TypeInputs[]" },
        { name: "outputs", type: "TypeOutputs[]" },
      ],
      TypeInputs: [
        { name: "address", type: "string" },
        { name: "coins", type: "TypeInputsCoins[]" },
      ],
      TypeOutputs: [
        { name: "address", type: "string" },
        { name: "coins", type: "TypeOutputsCoins[]" },
      ],
      TypeInputsCoins: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      TypeOutputsCoins: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
    },
  ],
];
