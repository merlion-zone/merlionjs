import * as eip712 from "../../eip712";
import typeUrls from "../typeurls";

export const bankEIP712Types: ReadonlyArray<[string, eip712.TypedDataTypesMsgValue]> = [
  [
    typeUrls.MsgSend,
    {
      MsgValue: [
        { name: "from_address", type: "string" },
        { name: "to_address", type: "string" },
        { name: "amount", type: "Coin[]" },
      ],
    },
  ],
  [
    typeUrls.MsgMultiSend,
    {
      MsgValue: [
        { name: "inputs", type: "AddrCoin[]" },
        { name: "outputs", type: "AddrCoin[]" },
      ],
      AddrCoin: [
        { name: "address", type: "string" },
        { name: "coins", type: "Coin[]" },
      ],
    },
  ],
];
