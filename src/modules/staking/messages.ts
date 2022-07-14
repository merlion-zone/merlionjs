import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";
import { stakingTypes as cosmStakingTypes } from "@cosmjs/stargate/build/modules";
import { MsgBeginRedelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

import { typeUrls } from "../typeurls";

export const stakingTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...cosmStakingTypes,
  [typeUrls.MsgBeginRedelegate, MsgBeginRedelegate],
];

export interface MsgBeginRedelegateEncodeObject extends EncodeObject {
  readonly typeUrl: typeof typeUrls.MsgBeginRedelegate;
  readonly value: Partial<MsgBeginRedelegate>;
}

export function isMsgBeginRedelegateEncodeObject(
  object: EncodeObject,
): object is MsgBeginRedelegateEncodeObject {
  return object.typeUrl === typeUrls.MsgBeginRedelegate;
}
