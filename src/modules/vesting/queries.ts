import { QueryClient, createPagination, createProtobufRpcClient } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";

import type { Params } from "../../proto/merlion/vesting/v1/genesis";
import { QueryAirdropsResponse, QueryClientImpl } from "../../proto/merlion/vesting/v1/query";
import type { Airdrop } from "../../proto/merlion/vesting/v1/vesting";

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
