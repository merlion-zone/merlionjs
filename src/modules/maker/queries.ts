import { assert } from "@cosmjs/utils";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "../../proto/merlion/maker/v1/query";
import type {
  AccountCollateral,
  BackingRiskParams,
  CollateralRiskParams,
  PoolBacking,
  PoolCollateral,
  TotalBacking,
  TotalCollateral,
} from "../../proto/merlion/maker/v1/maker";
import type { Params } from "../../proto/merlion/maker/v1/genesis";

export interface MakerExtension {
  readonly maker: {
    readonly allBackingRiskParams: () => Promise<BackingRiskParams[]>;
    readonly allCollateralRiskParams: () => Promise<CollateralRiskParams[]>;
    readonly allBackingPools: () => Promise<PoolBacking[]>;
    readonly allCollateralPools: () => Promise<PoolCollateral[]>;
    readonly backingPool: (backingDenom: string) => Promise<PoolBacking>;
    readonly collateralPool: (collateralDenom: string) => Promise<PoolCollateral>;
    readonly collateralOfAccount: (account: string, collateralDenom: string) => Promise<AccountCollateral>;
    readonly totalBacking: () => Promise<TotalBacking>;
    readonly totalCollateral: () => Promise<TotalCollateral>;
    readonly params: () => Promise<Params>;
  };
}

export function setupMakerExtension(base: QueryClient): MakerExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    maker: {
      allBackingRiskParams: async () => {
        const { riskParams } = await queryService.AllBackingRiskParams({});
        return riskParams;
      },
      allCollateralRiskParams: async () => {
        const { riskParams } = await queryService.AllCollateralRiskParams({});
        return riskParams;
      },
      allBackingPools: async () => {
        const { backingPools } = await queryService.AllBackingPools({});
        return backingPools;
      },
      allCollateralPools: async () => {
        const { collateralPools } = await queryService.AllCollateralPools({});
        return collateralPools;
      },
      backingPool: async (backingDenom: string) => {
        const { backingPool } = await queryService.BackingPool({ backingDenom });
        assert(backingPool);
        return backingPool;
      },
      collateralPool: async (collateralDenom: string) => {
        const { collateralPool } = await queryService.CollateralPool({ collateralDenom });
        assert(collateralPool);
        return collateralPool;
      },
      collateralOfAccount: async (account: string, collateralDenom: string) => {
        const { accountCollateral } = await queryService.CollateralOfAccount({
          account,
          collateralDenom,
        });
        assert(accountCollateral);
        return accountCollateral;
      },
      totalBacking: async () => {
        const { totalBacking } = await queryService.TotalBacking({});
        assert(totalBacking);
        return totalBacking;
      },
      totalCollateral: async () => {
        const { totalCollateral } = await queryService.TotalCollateral({});
        assert(totalCollateral);
        return totalCollateral;
      },
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
    },
  };
}
