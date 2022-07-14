import { QueryClient } from "@cosmjs/stargate";
import {
  AbciInfoResponse,
  AbciQueryParams,
  AbciQueryResponse,
  BlockResponse,
  BlockResultsResponse,
  BlockchainResponse,
  CommitResponse,
  GenesisResponse,
  HealthResponse,
  NewBlockEvent,
  NewBlockHeaderEvent,
  NumUnconfirmedTxsResponse,
  StatusResponse,
  Tendermint34Client,
  TxEvent,
  TxParams,
  TxResponse,
  TxSearchParams,
  TxSearchResponse,
  ValidatorsParams,
  ValidatorsResponse,
} from "@cosmjs/tendermint-rpc";
import { BlockSearchParams, BlockSearchResponse } from "@cosmjs/tendermint-rpc/build/tendermint34";
import { Stream } from "xstream";

export interface TendermintExtension {
  readonly tendermint: {
    abciInfo: () => Promise<AbciInfoResponse>;
    abciQuery: (params: AbciQueryParams) => Promise<AbciQueryResponse>;
    block: (height?: number) => Promise<BlockResponse>;
    blockResults: (height?: number) => Promise<BlockResultsResponse>;
    blockSearch: (params: BlockSearchParams) => Promise<BlockSearchResponse>;
    blockSearchAll: (params: BlockSearchParams) => Promise<BlockSearchResponse>;
    blockchain: (minHeight?: number, maxHeight?: number) => Promise<BlockchainResponse>;
    commit: (height?: number) => Promise<CommitResponse>;
    genesis: () => Promise<GenesisResponse>;
    health: () => Promise<HealthResponse>;
    numUnconfirmedTxs: () => Promise<NumUnconfirmedTxsResponse>;
    status: () => Promise<StatusResponse>;
    subscribeNewBlock: () => Stream<NewBlockEvent>;
    subscribeNewBlockHeader: () => Stream<NewBlockHeaderEvent>;
    subscribeTx: (query?: string) => Stream<TxEvent>;
    tx: (params: TxParams) => Promise<TxResponse>;
    txSearch: (params: TxSearchParams) => Promise<TxSearchResponse>;
    txSearchAll: (params: TxSearchParams) => Promise<TxSearchResponse>;
    validators: (params: ValidatorsParams) => Promise<ValidatorsResponse>;
    validatorsAll: (height?: number) => Promise<ValidatorsResponse>;
  };
}

export function setupTendermintExtension(tmClient: Tendermint34Client) {
  return (_base: QueryClient): TendermintExtension => {
    return {
      tendermint: {
        abciInfo: async () => tmClient.abciInfo(),
        abciQuery: async (params: AbciQueryParams) => tmClient.abciQuery(params),
        block: async (height?: number) => tmClient.block(height),
        blockResults: async (height?: number) => tmClient.blockResults(height),
        blockSearch: async (params: BlockSearchParams) => tmClient.blockSearch(params),
        blockSearchAll: (params: BlockSearchParams) => tmClient.blockSearchAll(params),
        blockchain: async (minHeight?: number, maxHeight?: number) =>
          tmClient.blockchain(minHeight, maxHeight),
        commit: async (height?: number) => tmClient.commit(height),
        genesis: async () => tmClient.genesis(),
        health: async () => tmClient.health(),
        numUnconfirmedTxs: async () => tmClient.numUnconfirmedTxs(),
        status: async () => tmClient.status(),
        subscribeNewBlock: () => tmClient.subscribeNewBlock(),
        subscribeNewBlockHeader: () => tmClient.subscribeNewBlockHeader(),
        subscribeTx: (query?: string) => tmClient.subscribeTx(query),
        tx: async (params: TxParams) => tmClient.tx(params),
        txSearch: async (params: TxSearchParams) => tmClient.txSearch(params),
        txSearchAll: async (params: TxSearchParams) => tmClient.txSearchAll(params),
        validators: async (params: ValidatorsParams) => tmClient.validators(params),
        validatorsAll: async (height?: number) => tmClient.validatorsAll(height),
      },
    };
  };
}
