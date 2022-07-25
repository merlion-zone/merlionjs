import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import Long from "long";

import {
  QueryDelegateKeysByEthAddressResponse,
  QueryDelegateKeysByOrchestratorAddressResponse,
  QueryDelegateKeysByValidatorAddressResponse,
} from "../../proto/gravity/v1/query";
import {
  QueryAttestationsRequest,
  QueryAttestationsResponse,
  QueryBatchConfirmsResponse,
  QueryBatchFeeResponse,
  QueryBatchRequestByNonceResponse,
  QueryChainsResponse,
  QueryClientImpl,
  QueryCurrentValsetResponse,
  QueryDenomToERC20Response,
  QueryERC20ToDenomResponse,
  QueryLastEventNonceByAddrResponse,
  QueryLastPendingBatchRequestByAddrResponse,
  QueryLastPendingLogicCallByAddrResponse,
  QueryLastPendingValsetRequestByAddrResponse,
  QueryLastValsetRequestsResponse,
  QueryLogicConfirmsResponse,
  QueryOutgoingLogicCallsResponse,
  QueryOutgoingTxBatchesResponse,
  QueryParamsResponse,
  QueryPendingIbcAutoForwardsResponse,
  QueryPendingSendToEthResponse,
  QueryValsetConfirmResponse,
  QueryValsetConfirmsByNonceResponse,
} from "../../proto/multigravity/v1/query";

export interface GravityExtension {
  readonly gravity: {
    readonly chains: () => Promise<QueryChainsResponse>;
    readonly params: (chainIdentifier: string) => Promise<QueryParamsResponse>;
    readonly currentValset: (chainIdentifier: string) => Promise<QueryCurrentValsetResponse>;
    readonly valsetRequest: (nonce: number, chainIdentifier: string) => Promise<QueryCurrentValsetResponse>;
    readonly valsetConfirm: (
      nonce: number,
      address: string,
      chainIdentifier: string,
    ) => Promise<QueryValsetConfirmResponse>;
    readonly valsetConfirmByNonce: (
      nonce: number,
      chainIdentifier: string,
    ) => Promise<QueryValsetConfirmsByNonceResponse>;
    readonly lastValsetRequests: (chainIdentifier: string) => Promise<QueryLastValsetRequestsResponse>;
    readonly lastPendingValsetRequestByAddr: (
      address: string,
      chainIdentifier: string,
    ) => Promise<QueryLastPendingValsetRequestByAddrResponse>;
    readonly lastPendingBatchRequestByAddr: (
      address: string,
      chainIdentifier: string,
    ) => Promise<QueryLastPendingBatchRequestByAddrResponse>;
    readonly lastPendingLogicCallByAddr: (
      address: string,
      chainIdentifier: string,
    ) => Promise<QueryLastPendingLogicCallByAddrResponse>;
    readonly lastEventNonceByAddr: (
      address: string,
      chainIdentifier: string,
    ) => Promise<QueryLastEventNonceByAddrResponse>;
    readonly batchFees: (chainIdentifier: string) => Promise<QueryBatchFeeResponse>;
    readonly outgoingTxBatches: (chainIdentifier: string) => Promise<QueryOutgoingTxBatchesResponse>;
    readonly outgoingLogicCalls: (chainIdentifier: string) => Promise<QueryOutgoingLogicCallsResponse>;
    readonly batchRequestByNonce: (
      nonce: number,
      contractAddress: string,
      chainIdentifier: string,
    ) => Promise<QueryBatchRequestByNonceResponse>;
    readonly batchConfirms: (
      nonce: number,
      contractAddress: string,
      chainIdentifier: string,
    ) => Promise<QueryBatchConfirmsResponse>;
    readonly logicConfirms: (
      invalidation: Uint8Array,
      invalidationNonce: number,
      chainIdentifier: string,
    ) => Promise<QueryLogicConfirmsResponse>;
    readonly erc20ToDenom: (erc20: string, chainIdentifier: string) => Promise<QueryERC20ToDenomResponse>;
    readonly denomToERC20: (denom: string, chainIdentifier: string) => Promise<QueryDenomToERC20Response>;
    readonly getAttestations: (
      chainIdentifier: string,
      pagination: {
        limit?: number;
        orderBy?: "asc" | "desc";
        claimType?: string;
        nonce?: number;
        height?: number;
      },
    ) => Promise<QueryAttestationsResponse>;
    readonly getDelegateKeyByValidator: (
      validatorAddress: string,
    ) => Promise<QueryDelegateKeysByValidatorAddressResponse>;
    readonly getDelegateKeyByEth: (ethAddress: string) => Promise<QueryDelegateKeysByEthAddressResponse>;
    readonly getDelegateKeyByOrchestrator: (
      orchestratorAddress: string,
    ) => Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    readonly getPendingSendToEth: (
      senderAddress: string,
      chainIdentifier: string,
    ) => Promise<QueryPendingSendToEthResponse>;
    readonly getPendingIbcAutoForwards: (
      limit: number,
      chainIdentifier: string,
    ) => Promise<QueryPendingIbcAutoForwardsResponse>;
  };
}

export function setupGravityExtension(base: QueryClient): GravityExtension {
  const rpc = createProtobufRpcClient(base);

  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    gravity: {
      chains: async () => {
        return queryService.Chains({});
      },
      params: async (chainIdentifier: string) => {
        const response = await queryService.Params({ chainIdentifier });
        assert(response);
        return response;
      },
      currentValset: async (chainIdentifier: string) => {
        const response = await queryService.CurrentValset({ chainIdentifier });
        assert(response);
        return response;
      },
      valsetRequest: async (nonce: number, chainIdentifier: string) => {
        const response = await queryService.ValsetRequest({
          nonce: Long.fromNumber(nonce),
          chainIdentifier,
        });
        assert(response);
        return response;
      },
      valsetConfirm: async (nonce: number, address: string, chainIdentifier: string) => {
        const response = await queryService.ValsetConfirm({
          nonce: Long.fromNumber(nonce),
          address,
          chainIdentifier,
        });
        assert(response);
        return response;
      },
      valsetConfirmByNonce: async (nonce: number, chainIdentifier: string) => {
        const response = await queryService.ValsetConfirmsByNonce({
          nonce: Long.fromNumber(nonce),
          chainIdentifier,
        });
        assert(response);
        return response;
      },
      lastValsetRequests: async (chainIdentifier: string) => {
        const response = await queryService.LastValsetRequests({ chainIdentifier });
        assert(response);
        return response;
      },
      lastPendingValsetRequestByAddr: async (address: string, chainIdentifier: string) => {
        const response = await queryService.LastPendingValsetRequestByAddr({ address, chainIdentifier });
        assert(response);
        return response;
      },
      lastPendingBatchRequestByAddr: async (address: string, chainIdentifier: string) => {
        const response = await queryService.LastPendingBatchRequestByAddr({ address, chainIdentifier });
        assert(response);
        return response;
      },
      lastPendingLogicCallByAddr: async (address: string, chainIdentifier: string) => {
        const response = await queryService.LastPendingLogicCallByAddr({ address, chainIdentifier });
        assert(response);
        return response;
      },
      lastEventNonceByAddr: async (address: string, chainIdentifier: string) => {
        const response = await queryService.LastEventNonceByAddr({ address, chainIdentifier });
        assert(response);
        return response;
      },
      batchFees: async (chainIdentifier: string) => {
        const response = await queryService.BatchFees({ chainIdentifier });
        assert(response);
        return response;
      },
      outgoingTxBatches: async (chainIdentifier: string) => {
        const response = await queryService.OutgoingTxBatches({ chainIdentifier });
        assert(response);
        return response;
      },
      outgoingLogicCalls: async (chainIdentifier: string) => {
        const response = await queryService.OutgoingLogicCalls({ chainIdentifier });
        assert(response);
        return response;
      },
      batchRequestByNonce: async (nonce: number, contractAddress: string, chainIdentifier: string) => {
        const response = await queryService.BatchRequestByNonce({
          nonce: Long.fromNumber(nonce),
          contractAddress,
          chainIdentifier,
        });
        assert(response);
        return response;
      },
      batchConfirms: async (nonce: number, contractAddress: string, chainIdentifier: string) => {
        const response = await queryService.BatchConfirms({
          nonce: Long.fromNumber(nonce),
          contractAddress,
          chainIdentifier,
        });
        assert(response);
        return response;
      },
      logicConfirms: async (
        invalidationId: Uint8Array,
        invalidationNonce: number,
        chainIdentifier: string,
      ) => {
        const response = await queryService.LogicConfirms({
          invalidationId,
          invalidationNonce: Long.fromNumber(invalidationNonce),
          chainIdentifier,
        });
        assert(response);
        return response;
      },
      erc20ToDenom: async (erc20: string, chainIdentifier: string) => {
        const response = await queryService.ERC20ToDenom({ erc20, chainIdentifier });
        assert(response);
        return response;
      },
      denomToERC20: async (denom: string, chainIdentifier: string) => {
        const response = await queryService.DenomToERC20({ denom, chainIdentifier });
        assert(response);
        return response;
      },
      getAttestations: async (
        chainIdentifier: string,
        pagination: {
          limit?: number;
          orderBy?: "asc" | "desc";
          claimType?: string;
          nonce?: number;
          height?: number;
        },
      ) => {
        const request = QueryAttestationsRequest.fromPartial({ chainIdentifier, ...pagination });
        const response = await queryService.GetAttestations(request);
        assert(response);
        return response;
      },
      getDelegateKeyByValidator: async (validatorAddress: string) => {
        const response = await queryService.GetDelegateKeyByValidator({ validatorAddress });
        assert(response);
        return response;
      },
      getDelegateKeyByEth: async (ethAddress: string) => {
        const response = await queryService.GetDelegateKeyByEth({ ethAddress });
        assert(response);
        return response;
      },
      getDelegateKeyByOrchestrator: async (orchestratorAddress: string) => {
        const response = await queryService.GetDelegateKeyByOrchestrator({ orchestratorAddress });
        assert(response);
        return response;
      },
      getPendingSendToEth: async (senderAddress: string, chainIdentifier: string) => {
        const response = await queryService.GetPendingSendToEth({ senderAddress, chainIdentifier });
        assert(response);
        return response;
      },
      getPendingIbcAutoForwards: async (limit: number, chainIdentifier: string) => {
        const response = await queryService.GetPendingIbcAutoForwards({
          limit: Long.fromNumber(limit),
          chainIdentifier,
        });
        assert(response);
        return response;
      },
    },
  };
}
