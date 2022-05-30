import { assert } from "@cosmjs/utils";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "../../proto/merlion/gauge/v1/query";

export interface GaugeExtension {
  readonly gauge: {};
}

export function setupGaugeExtension(base: QueryClient): GaugeExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    gauge: {},
  };
}
