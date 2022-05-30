import { createProtobufRpcClient, QueryClient, TxExtension } from "@cosmjs/stargate";
import { GetTxRequest, ServiceClientImpl, SimulateRequest } from "cosmjs-types/cosmos/tx/v1beta1/service";
import { Any } from "cosmjs-types/google/protobuf/any";
import { Pubkey } from "@cosmjs/amino";
import { AuthInfo, Fee, Tx, TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { encodePubkey } from "../proto-signing/pubkey";
import Long from "long";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";

export function setupTxExtension(base: QueryClient): TxExtension {
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);

  return {
    tx: {
      getTx: async (txId: string) => {
        const request: GetTxRequest = {
          hash: txId,
        };
        return await queryService.GetTx(request);
      },
      simulate: async (
        messages: readonly Any[],
        memo: string | undefined,
        signer: Pubkey,
        sequence: number,
      ) => {
        const request = SimulateRequest.fromPartial({
          tx: Tx.fromPartial({
            authInfo: AuthInfo.fromPartial({
              fee: Fee.fromPartial({}),
              signerInfos: [
                {
                  publicKey: encodePubkey(signer),
                  sequence: Long.fromNumber(sequence, true),
                  modeInfo: { single: { mode: SignMode.SIGN_MODE_UNSPECIFIED } },
                },
              ],
            }),
            body: TxBody.fromPartial({
              messages: Array.from(messages),
              memo: memo,
            }),
            signatures: [new Uint8Array()],
          }),
          // Sending serialized `txBytes` is the future. But
          // this is not available in Comsos SDK 0.42.
          txBytes: undefined,
        });
        return await queryService.Simulate(request);
      },
    },
  };
}
