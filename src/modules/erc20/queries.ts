import { QueryClient, createPagination, createProtobufRpcClient } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";

import type { TokenPair } from "../../proto/merlion/erc20/v1/erc20";
import type { Params } from "../../proto/merlion/erc20/v1/genesis";
import { QueryClientImpl, QueryTokenPairsResponse } from "../../proto/merlion/erc20/v1/query";

export interface Erc20Extension {
  readonly erc20: {
    readonly tokenPairs: () => Promise<QueryTokenPairsResponse>;
    readonly tokenPair: (tojen: string) => Promise<TokenPair>;
    readonly params: () => Promise<Params>;
  };
}

export function setupErc20Extension(base: QueryClient): Erc20Extension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    erc20: {
      tokenPairs: async (paginationKey?: Uint8Array) => {
        const response = await queryService.TokenPairs({
          pagination: createPagination(paginationKey),
        });
        return response;
      },
      tokenPair: async (token: string) => {
        const { tokenPair } = await queryService.TokenPair({
          token,
        });
        assert(tokenPair);
        return tokenPair;
      },
      params: async () => {
        const { params } = await queryService.Params({});
        assert(params);
        return params;
      },
    },
  };
}
