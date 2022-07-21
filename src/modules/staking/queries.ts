import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
  QueryClientImpl,
  QueryDelegationResponse,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorResponse,
  QueryDelegatorValidatorsResponse,
  QueryHistoricalInfoResponse,
  QueryParamsResponse,
  QueryPoolResponse,
  QueryRedelegationsResponse,
  QueryUnbondingDelegationResponse,
  QueryValidatorDelegationsResponse,
  QueryValidatorResponse,
  QueryValidatorUnbondingDelegationsResponse,
  QueryValidatorsResponse,
} from "cosmjs-types/cosmos/staking/v1beta1/query";
import { BondStatus } from "cosmjs-types/cosmos/staking/v1beta1/staking";
import Long from "long";

import { Pagination } from "../../queryclient/utils";

// It's an enum in Go and a string in the protobuf API. "BOND_STATUS_UNSPECIFIED"
// is excluded and "" is supported instead 🤷.
//
// String values: https://github.com/cosmos/cosmos-sdk/blob/v0.45.5/x/staking/types/staking.pb.go#L57-L62
// Validation: https://github.com/cosmos/cosmos-sdk/blob/v0.45.5/x/staking/keeper/grpc_query.go#L29-L32
export type BondStatusString =
  | keyof Pick<typeof BondStatus, "BOND_STATUS_BONDED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING">
  | "";

export interface StakingExtension {
  readonly staking: {
    delegation: (delegatorAddress: string, validatorAddress: string) => Promise<QueryDelegationResponse>;
    delegatorDelegations: (
      delegatorAddress: string,
      pagination?: Pagination,
    ) => Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations: (
      delegatorAddress: string,
      pagination?: Pagination,
    ) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
    delegatorValidator: (
      delegatorAddress: string,
      validatorAddress: string,
    ) => Promise<QueryDelegatorValidatorResponse>;
    delegatorValidators: (
      delegatorAddress: string,
      pagination?: Pagination,
    ) => Promise<QueryDelegatorValidatorsResponse>;
    historicalInfo: (height: number) => Promise<QueryHistoricalInfoResponse>;
    params: () => Promise<QueryParamsResponse>;
    pool: () => Promise<QueryPoolResponse>;
    redelegations: (
      delegatorAddress: string,
      sourceValidatorAddress: string,
      destinationValidatorAddress: string,
      pagination?: Pagination,
    ) => Promise<QueryRedelegationsResponse>;
    unbondingDelegation: (
      delegatorAddress: string,
      validatorAddress: string,
    ) => Promise<QueryUnbondingDelegationResponse>;
    validator: (validatorAddress: string) => Promise<QueryValidatorResponse>;
    validatorDelegations: (
      validatorAddress: string,
      pagination?: Pagination,
    ) => Promise<QueryValidatorDelegationsResponse>;
    validators: (status: BondStatusString, pagination?: Pagination) => Promise<QueryValidatorsResponse>;
    validatorUnbondingDelegations: (
      validatorAddress: string,
      pagination?: Pagination,
    ) => Promise<QueryValidatorUnbondingDelegationsResponse>;
  };
}

export function setupStakingExtension(base: QueryClient): StakingExtension {
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    staking: {
      delegation: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.Delegation({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress,
        });
        return response;
      },
      delegatorDelegations: async (delegatorAddress: string, pagination?: Pagination) => {
        const response = await queryService.DelegatorDelegations({
          delegatorAddr: delegatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      delegatorUnbondingDelegations: async (delegatorAddress: string, pagination?: Pagination) => {
        const response = await queryService.DelegatorUnbondingDelegations({
          delegatorAddr: delegatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      delegatorValidator: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.DelegatorValidator({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress,
        });
        return response;
      },
      delegatorValidators: async (delegatorAddress: string, pagination?: Pagination) => {
        const response = await queryService.DelegatorValidators({
          delegatorAddr: delegatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      historicalInfo: async (height: number) => {
        const response = await queryService.HistoricalInfo({
          height: Long.fromNumber(height, true),
        });
        return response;
      },
      params: async () => {
        const response = await queryService.Params({});
        return response;
      },
      pool: async () => {
        const response = await queryService.Pool({});
        return response;
      },
      redelegations: async (
        delegatorAddress: string,
        sourceValidatorAddress: string,
        destinationValidatorAddress: string,
        pagination?: Pagination,
      ) => {
        const response = await queryService.Redelegations({
          delegatorAddr: delegatorAddress,
          srcValidatorAddr: sourceValidatorAddress,
          dstValidatorAddr: destinationValidatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      unbondingDelegation: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.UnbondingDelegation({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress,
        });
        return response;
      },
      validator: async (validatorAddress: string) => {
        const response = await queryService.Validator({ validatorAddr: validatorAddress });
        return response;
      },
      validatorDelegations: async (validatorAddress: string, pagination?: Pagination) => {
        const response = await queryService.ValidatorDelegations({
          validatorAddr: validatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      validators: async (status: BondStatusString, pagination?: Pagination) => {
        const response = await queryService.Validators({
          status: status,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
      validatorUnbondingDelegations: async (validatorAddress: string, pagination?: Pagination) => {
        const response = await queryService.ValidatorUnbondingDelegations({
          validatorAddr: validatorAddress,
          pagination: pagination && PageRequest.fromPartial(pagination),
        });
        return response;
      },
    },
  };
}
