import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import {
  authzTypes,
  bankTypes,
  distributionTypes,
  feegrantTypes,
  govTypes,
  ibcTypes,
  vestingTypes,
} from "@cosmjs/stargate/build/modules";
import { stakingTypes } from "./staking/messages";
import { oracleTypes } from "./oracle/messages";
import { makerTypes } from "./maker/messages";

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.base.v1beta1.Coin", Coin],
  ...authzTypes,
  ...bankTypes,
  ...distributionTypes,
  ...feegrantTypes,
  ...govTypes,
  ...stakingTypes,
  ...ibcTypes,
  ...vestingTypes,
  ...oracleTypes,
  ...makerTypes,
];

export function createDefaultRegistry(): Registry {
  return new Registry(defaultRegistryTypes);
}
