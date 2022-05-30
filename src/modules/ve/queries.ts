import { assert } from "@cosmjs/utils";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import type Long from "long";
import { QueryClientImpl } from "../../proto/merlion/ve/v1/query";
import type { Params } from "../../proto/merlion/ve/v1/genesis";

export interface VeExtension {
  readonly ve: {
    readonly totalVotingPower: (atTime: Long, atBlock: Long) => Promise<string>;
    readonly votingPower: (veId: string, atTime: Long, atBlock: Long) => Promise<string>;
    readonly params: () => Promise<Params>;
  };
}

export function setupVeExtension(base: QueryClient): VeExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    ve: {
      totalVotingPower: async (atTime: Long, atBlock: Long) => {
        const { power } = await queryService.TotalVotingPower({ atTime, atBlock });
        return power;
      },
      votingPower: async (veId: string, atTime: Long, atBlock: Long) => {
        const { power } = await queryService.VotingPower({
          veId,
          atTime,
          atBlock,
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
