import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";

import type { Params } from "../../proto/merlion/maker/v1/genesis";
import type {
  AccountCollateral,
  BackingRiskParams,
  CollateralRiskParams,
  PoolBacking,
  PoolCollateral,
  TotalBacking,
  TotalCollateral,
} from "../../proto/merlion/maker/v1/maker";
import {
  EstimateBurnBySwapInRequest,
  EstimateBurnBySwapInResponse,
  EstimateBurnBySwapOutRequest,
  EstimateBurnBySwapOutResponse,
  EstimateBuyBackingInRequest,
  EstimateBuyBackingInResponse,
  EstimateBuyBackingOutRequest,
  EstimateBuyBackingOutResponse,
  EstimateMintBySwapInRequest,
  EstimateMintBySwapInResponse,
  EstimateMintBySwapOutRequest,
  EstimateMintBySwapOutResponse,
  EstimateSellBackingOutRequest,
  EstimateSellBackingOutResponse,
  QueryBackingRatioResponse,
  QueryClientImpl,
} from "../../proto/merlion/maker/v1/query";

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
    readonly backingRatio: () => Promise<QueryBackingRatioResponse>;
    readonly params: () => Promise<Params>;
    readonly estimateMintBySwapIn: (
      request: EstimateMintBySwapInRequest,
    ) => Promise<EstimateMintBySwapInResponse>;
    readonly estimateMintBySwapOut: (
      request: EstimateMintBySwapOutRequest,
    ) => Promise<EstimateMintBySwapOutResponse>;
    readonly estimateBurnBySwapIn: (
      request: EstimateBurnBySwapInRequest,
    ) => Promise<EstimateBurnBySwapInResponse>;
    readonly estimateBurnBySwapOut: (
      request: EstimateBurnBySwapOutRequest,
    ) => Promise<EstimateBurnBySwapOutResponse>;
    readonly estimateBuyBackingIn: (
      request: EstimateBuyBackingInRequest,
    ) => Promise<EstimateBuyBackingInResponse>;
    readonly estimateBuyBackingOut: (
      request: EstimateBuyBackingOutRequest,
    ) => Promise<EstimateBuyBackingOutResponse>;
    readonly estimateSellBackingOut: (
      request: EstimateSellBackingOutRequest,
    ) => Promise<EstimateSellBackingOutResponse>;
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
      backingRatio: async () => {
        const resp = await queryService.BackingRatio({});
        assert(resp);
        return resp;
      },
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
      estimateMintBySwapIn: async (
        request: EstimateMintBySwapInRequest,
      ): Promise<EstimateMintBySwapInResponse> => {
        const resp = await queryService.EstimateMintBySwapIn(request);
        assert(resp);
        return resp;
      },
      estimateMintBySwapOut: async (
        request: EstimateMintBySwapOutRequest,
      ): Promise<EstimateMintBySwapOutResponse> => {
        const resp = await queryService.EstimateMintBySwapOut(request);
        assert(resp);
        return resp;
      },
      estimateBurnBySwapIn: async (
        request: EstimateBurnBySwapInRequest,
      ): Promise<EstimateBurnBySwapInResponse> => {
        const resp = await queryService.EstimateBurnBySwapIn(request);
        assert(resp);
        return resp;
      },
      estimateBurnBySwapOut: async (
        request: EstimateBurnBySwapOutRequest,
      ): Promise<EstimateBurnBySwapOutResponse> => {
        const resp = await queryService.EstimateBurnBySwapOut(request);
        assert(resp);
        return resp;
      },
      estimateBuyBackingIn: async (
        request: EstimateBuyBackingInRequest,
      ): Promise<EstimateBuyBackingInResponse> => {
        const resp = await queryService.EstimateBuyBackingIn(request);
        assert(resp);
        return resp;
      },
      estimateBuyBackingOut: async (
        request: EstimateBuyBackingOutRequest,
      ): Promise<EstimateBuyBackingOutResponse> => {
        const resp = await queryService.EstimateBuyBackingOut(request);
        assert(resp);
        return resp;
      },
      estimateSellBackingOut: async (
        request: EstimateSellBackingOutRequest,
      ): Promise<EstimateSellBackingOutResponse> => {
        const resp = await queryService.EstimateSellBackingOut(request);
        assert(resp);
        return resp;
      },
    },
  };
}
