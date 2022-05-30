import { assert } from "@cosmjs/utils";
import { createPagination, createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { QueryClientImpl, QueryAirdropsResponse } from "../../proto/merlion/vesting/v1/query";
import type { Airdrop } from "../../proto/merlion/vesting/v1/vesting";
import type { Params } from "../../proto/merlion/vesting/v1/genesis";

export interface VestingExtension {
  readonly vesting: {
    readonly airdrops: (completed: boolean, paginationKey?: Uint8Array) => Promise<QueryAirdropsResponse>;
    readonly airdrop: (targetAddr: string, completed: boolean) => Promise<Airdrop>;
    readonly params: () => Promise<Params>;
  };
}

export function setupVestingExtension(base: QueryClient): VestingExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    vesting: {
      airdrops: async (completed: boolean, paginationKey?: Uint8Array) => {
        const response = await queryService.Airdrops({
          completed,
          pagination: createPagination(paginationKey),
        });
        return response;
      },
      airdrop: async (targetAddr: string, completed: boolean) => {
        const { airdrop } = await queryService.Airdrop({ targetAddr, completed });
        assert(airdrop);
        return airdrop;
      },
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
    },
  };
}
