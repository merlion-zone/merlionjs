import {
  AminoConverters,
  AminoTypes,
  createAuthzAminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createFreegrantAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
} from "@cosmjs/stargate";
import { createVestingAminoConverters } from "@cosmjs/stargate/build/modules";

import { createGravityAminoConverters } from "./gravity/aminomessages";
import { createMakerAminoConverters } from "./maker/aminomessages";

export function createDefaultAminoTypes(prefix: string): AminoTypes {
  const converters: AminoConverters = {
    ...createAuthzAminoConverters(),
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters(prefix),
    ...createIbcAminoConverters(),
    ...createFreegrantAminoConverters(),
    ...createVestingAminoConverters(),
    ...createMakerAminoConverters(),
    ...createGravityAminoConverters(),
  };
  return new AminoTypes(converters);
}
