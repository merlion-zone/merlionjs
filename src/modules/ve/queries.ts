import { assert } from "@cosmjs/utils";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import Long from "long";
import { QueryClientImpl } from "../../proto/merlion/ve/v1/query";
import type { Params } from "../../proto/merlion/ve/v1/genesis";

export interface VeExtension {
  readonly ve: {
    readonly totalVotingPower: (atTime: number, atBlock: number) => Promise<string>;
    readonly votingPower: (veId: string, atTime: number, atBlock: number) => Promise<string>;
    readonly params: () => Promise<Params>;
  };
}

export function setupVeExtension(base: QueryClient): VeExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    ve: {
      totalVotingPower: async (atTime: number, atBlock: number) => {
        const { power } = await queryService.TotalVotingPower({
          atTime: Long.fromNumber(atTime),
          atBlock: Long.fromNumber(atBlock),
        });
        return power;
      },
      votingPower: async (veId: string, atTime: number, atBlock: number) => {
        const { power } = await queryService.VotingPower({
          veId,
          atTime: Long.fromNumber(atTime, true),
          atBlock: Long.fromNumber(atBlock, true),
        });
        return power;
      },
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
    },
  };
}
