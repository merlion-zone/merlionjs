import { assert } from "@cosmjs/utils";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "../../proto/merlion/oracle/v1/query";
import Long from "long";
import type { DecCoin } from "../../proto/cosmos/base/v1beta1/coin";
import type {
  AggregateExchangeRatePrevote,
  AggregateExchangeRateVote,
  Params,
} from "../../proto/merlion/oracle/v1/oracle";

export interface OracleExtension {
  readonly oracle: {
    readonly exchangeRate: (denom: string) => Promise<string>;
    readonly exchangeRates: () => Promise<DecCoin[]>;
    readonly actives: () => Promise<string[]>;
    readonly voteTargets: () => Promise<string[]>;
    readonly feederDelegation: (validatorAddr: string) => Promise<string>;
    readonly missCounter: (validatorAddr: string) => Promise<number>;
    readonly aggregatePrevote: (validatorAddr: string) => Promise<AggregateExchangeRatePrevote>;
    readonly aggregatePrevotes: () => Promise<AggregateExchangeRatePrevote[]>;
    readonly aggregateVote: (validatorAddr: string) => Promise<AggregateExchangeRateVote>;
    readonly aggregateVotes: () => Promise<AggregateExchangeRateVote[]>;
    readonly params: () => Promise<Params>;
  };
}

export function setupOracleExtension(base: QueryClient): OracleExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    oracle: {
      exchangeRate: async (denom: string) => {
        const { exchangeRate } = await queryService.ExchangeRate({
          denom,
        });
        assert(exchangeRate);
        return exchangeRate;
      },
      exchangeRates: async () => {
        const { exchangeRates } = await queryService.ExchangeRates({});
        return exchangeRates;
      },
      actives: async () => {
        const { actives } = await queryService.Actives({});
        return actives;
      },
      voteTargets: async () => {
        const { voteTargets } = await queryService.VoteTargets({});
        return voteTargets;
      },
      feederDelegation: async (validatorAddr: string) => {
        const { feederAddr } = await queryService.FeederDelegation({ validatorAddr });
        assert(feederAddr);
        return feederAddr;
      },
      missCounter: async (validatorAddr: string) => {
        const { missCounter } = await queryService.MissCounter({ validatorAddr });
        return missCounter.toNumber();
      },
      aggregatePrevote: async (validatorAddr: string) => {
        const { aggregatePrevote } = await queryService.AggregatePrevote({ validatorAddr });
        assert(aggregatePrevote);
        return aggregatePrevote;
      },
      aggregatePrevotes: async () => {
        const { aggregatePrevotes } = await queryService.AggregatePrevotes({});
        return aggregatePrevotes;
      },
      aggregateVote: async (validatorAddr: string) => {
        const { aggregateVote } = await queryService.AggregateVote({ validatorAddr });
        assert(aggregateVote);
        return aggregateVote;
      },
      aggregateVotes: async () => {
        const { aggregateVotes } = await queryService.AggregateVotes({});
        return aggregateVotes;
      },
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
    },
  };
}
