import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import type { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Any } from "cosmjs-types/google/protobuf/any";
import Long from "long";

import { BridgeValidator } from "../../proto/gravity/v1/types";
import {
  MsgBatchSendToEthClaim,
  MsgCancelSendToEth,
  MsgConfirmBatch,
  MsgConfirmLogicCall,
  MsgERC20DeployedClaim,
  MsgExecuteIbcAutoForwards,
  MsgLogicCallExecutedClaim,
  MsgRequestBatch,
  MsgSendToCosmosClaim,
  MsgSendToEth,
  MsgSubmitBadSignatureEvidence,
  MsgValsetConfirm,
  MsgValsetUpdatedClaim,
} from "../../proto/multigravity/v1/msgs";

export interface AminoMsgValsetConfirm extends AminoMsg {
  readonly type: "multigravity/MsgValsetConfirm";
  readonly value: {
    readonly nonce: number;
    readonly orchestrator: string;
    readonly eth_address: string;
    readonly signature: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgValsetConfirm(msg: AminoMsg): msg is AminoMsgValsetConfirm {
  return msg.type === "multigravity/MsgValsetConfirm";
}

export interface AminoMsgSendToEth extends AminoMsg {
  readonly type: "multigravity/MsgSendToEth";
  readonly value: {
    readonly sender: string;
    readonly eth_dest: string;
    readonly amount: Coin;
    readonly bridge_fee: Coin;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgSendToEth(msg: AminoMsg): msg is AminoMsgSendToEth {
  return msg.type === "multigravity/MsgSendtoEth";
}

export interface AminoMsgRequestBatch extends AminoMsg {
  readonly type: "multigravity/MsgRequestBatch";
  readonly value: {
    readonly sender: string;
    readonly denom: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgRequestBatch(msg: AminoMsg): msg is AminoMsgRequestBatch {
  return msg.type === "multigravity/MsgRequestBatch";
}

export interface AminoMsgConfirmBatch extends AminoMsg {
  readonly type: "multigravity/MsgConfirmBatch";
  readonly value: {
    readonly nonce: number;
    readonly token_contract: string;
    readonly eth_signer: string;
    readonly orchestrator: string;
    readonly signature: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgConfirmBatch(msg: AminoMsg): msg is AminoMsgConfirmBatch {
  return msg.type === "multigravity/MsgConfirmBatch";
}

export interface AminoMsgConfirmLogicCall extends AminoMsg {
  readonly type: "multigravity/MsgConfirmLogicCall";
  readonly value: {
    readonly invalidation_id: string;
    readonly invalidation_nonce: number;
    readonly eth_signer: string;
    readonly orchestrator: string;
    readonly signature: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgConfirmLogicCall(msg: AminoMsg): msg is AminoMsgConfirmLogicCall {
  return msg.type === "multigravity/MsgConfirmLogicCall";
}

export interface AminoMsgSendToCosmosClaim extends AminoMsg {
  readonly type: "multigravity/MsgSendToCosmosClaim";
  readonly value: {
    readonly event_nonce: number;
    readonly block_height: number;
    readonly token_contract: string;
    readonly amount: string;
    readonly ethereum_sender: string;
    readonly cosmos_receiver: string;
    readonly orchestrator: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgSendToCosmosClaim(msg: AminoMsg): msg is AminoMsgSendToCosmosClaim {
  return msg.type === "multigravity/MsgSendToCosmosClaim";
}

export interface AminoMsgExecuteIbcAutoForwards extends AminoMsg {
  readonly type: "multigravity/MsgExecuteIbcAutoForwards";
  readonly value: {
    readonly forwards_to_clear: number;
    readonly executor: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgExecuteIbcAutoForwards(msg: AminoMsg): msg is AminoMsgExecuteIbcAutoForwards {
  return msg.type === "multigravity/MsgExecuteIbcAutoForwards";
}

export interface AminoMsgBatchSendToEthClaim extends AminoMsg {
  readonly type: "multigravity/MsgBatchSendToEthClaim";
  readonly value: {
    readonly event_nonce: number;
    readonly block_height: number;
    readonly batch_nonce: number;
    readonly token_contract: string;
    readonly orchestrator: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgBatchSendToEthClaim(msg: AminoMsg): msg is AminoMsgBatchSendToEthClaim {
  return msg.type === "multigravity/AminoMsgBatchSendToEthClaim";
}

export interface AminoMsgERC20DeployedClaim extends AminoMsg {
  readonly type: "multigravity/MsgERC20DeployedClaim";
  readonly value: {
    readonly event_nonce: number;
    readonly block_height: number;
    readonly cosmos_denom: string;
    readonly token_contract: string;
    readonly name: string;
    readonly symbol: string;
    readonly decimals: number;
    readonly orchestrator: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgERC20DeployClaim(msg: AminoMsg): msg is AminoMsgERC20DeployedClaim {
  return msg.type === "multigravity/MsgERC20DeployedClaim";
}

export interface AminoMsgLogicCallExecutedClaim extends AminoMsg {
  readonly type: "multigravity/MsgLogicCallExecutedClaim";
  readonly value: {
    readonly event_nonce: number;
    readonly block_height: number;
    readonly invalidation_id: Uint8Array;
    readonly invalidation_nonce: number;
    readonly orchestrator: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgLogicCallExecutedClaim(msg: AminoMsg): msg is AminoMsgLogicCallExecutedClaim {
  return msg.type === "multigravity/MsgAminoMsgLogicCallExecutedClaim";
}

export interface AminoMsgValsetUpdatedClaim extends AminoMsg {
  readonly type: "multigravity/MsgValsetUpdatedClaim";
  readonly value: {
    readonly event_nonce: number;
    readonly valset_nonce: number;
    readonly block_height: number;
    readonly members: BridgeValidator[];
    readonly reward_amount: string;
    readonly reward_token: string;
    readonly orchestrator: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgValsetUpdatedClaim(msg: AminoMsg): msg is AminoMsgValsetUpdatedClaim {
  return msg.type === "multigravity/MsgValsetUpdatedClaim";
}

export interface AminoMsgCancelSendToEth extends AminoMsg {
  readonly type: "multigravity/MsgValsetUpdatedClaim";
  readonly value: {
    readonly transaction_id: string;
    readonly sender: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgCancelSendToEth(msg: AminoMsg): msg is AminoMsgCancelSendToEth {
  return msg.type === "multigravity/MsgCancelSendToEth";
}

export interface AminoMsgSubmitBadSignatureEvidence extends AminoMsg {
  readonly type: "multigravity/MsgSubmitBadSignatureEvidence";
  readonly value: {
    readonly subject: Any;
    readonly signature: string;
    readonly sender: string;
    readonly chain_identifier: string;
  };
}

export function isAminoMsgSubmitBadSignatureEvidence(
  msg: AminoMsg,
): msg is AminoMsgSubmitBadSignatureEvidence {
  return msg.type === "multigravity/MsgSubmitBadSignature";
}

export function createGravityAminoConverters(): AminoConverters {
  return {
    ["/multigravity.v1.MsgValsetConfirm"]: {
      aminoType: "multigravity/MsgValsetConfirm",
      toAmino: ({
        nonce,
        orchestrator,
        ethAddress,
        signature,
        chainIdentifier,
      }: MsgValsetConfirm): AminoMsgValsetConfirm => ({
        type: "multigravity/MsgValsetConfirm",
        value: {
          nonce: nonce.toNumber(),
          orchestrator,
          eth_address: ethAddress,
          signature,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        nonce,
        orchestrator,
        eth_address,
        signature,
        chain_identifier,
      }: AminoMsgValsetConfirm["value"]): MsgValsetConfirm => ({
        nonce: Long.fromNumber(nonce),
        orchestrator,
        ethAddress: eth_address,
        signature,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/merlion.gravity.v1.MsgSendToEth"]: {
      aminoType: "multigravity/MsgSendToEth",
      toAmino: ({ sender, ethDest, amount, bridgeFee, chainIdentifier }: MsgSendToEth): AminoMsgSendToEth => {
        assertDefinedAndNotNull(amount);
        assertDefinedAndNotNull(bridgeFee);
        return {
          type: "multigravity/MsgSendToEth",
          value: {
            sender,
            eth_dest: ethDest,
            amount: amount,
            bridge_fee: bridgeFee,
            chain_identifier: chainIdentifier,
          },
        };
      },
      fromAmino: ({
        sender,
        eth_dest,
        amount,
        bridge_fee,
        chain_identifier,
      }: AminoMsgSendToEth["value"]): MsgSendToEth => ({
        sender,
        ethDest: eth_dest,
        amount,
        bridgeFee: bridge_fee,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgRequestBatch"]: {
      aminoType: "multigravity/MsgRequestBatch",
      toAmino: ({ sender, denom, chainIdentifier }: MsgRequestBatch): AminoMsgRequestBatch => ({
        type: "multigravity/MsgRequestBatch",
        value: {
          sender,
          denom,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({ sender, denom, chain_identifier }: AminoMsgRequestBatch["value"]): MsgRequestBatch => ({
        sender,
        denom,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgConfirmBatch"]: {
      aminoType: "multigravity/MsgConfirmBatch",
      toAmino: ({
        nonce,
        tokenContract,
        ethSigner,
        orchestrator,
        signature,
        chainIdentifier,
      }: MsgConfirmBatch): AminoMsgConfirmBatch => ({
        type: "multigravity/MsgConfirmBatch",
        value: {
          nonce: nonce.toNumber(),
          token_contract: tokenContract,
          eth_signer: ethSigner,
          orchestrator,
          signature,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        nonce,
        token_contract,
        eth_signer,
        orchestrator,
        signature,
        chain_identifier,
      }: AminoMsgConfirmBatch["value"]): MsgConfirmBatch => ({
        nonce: Long.fromNumber(nonce),
        tokenContract: token_contract,
        ethSigner: eth_signer,
        orchestrator,
        signature,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgConfirmLogicCall"]: {
      aminoType: "multigravity/MsgConfirmLogicCall",
      toAmino: ({
        invalidationId,
        invalidationNonce,
        ethSigner,
        orchestrator,
        signature,
        chainIdentifier,
      }: MsgConfirmLogicCall): AminoMsgConfirmLogicCall => ({
        type: "multigravity/MsgConfirmLogicCall",
        value: {
          invalidation_id: invalidationId,
          invalidation_nonce: invalidationNonce.toNumber(),
          eth_signer: ethSigner,
          orchestrator,
          signature,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        invalidation_id,
        invalidation_nonce,
        eth_signer,
        orchestrator,
        signature,
        chain_identifier,
      }: AminoMsgConfirmLogicCall["value"]): MsgConfirmLogicCall => ({
        invalidationId: invalidation_id,
        invalidationNonce: Long.fromNumber(invalidation_nonce),
        ethSigner: eth_signer,
        orchestrator,
        signature,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgSendToCosmosClaim"]: {
      aminoType: "multigravity/MsgSendToCosmosClaim",
      toAmino: ({
        eventNonce,
        blockHeight,
        tokenContract,
        amount,
        ethereumSender,
        cosmosReceiver,
        orchestrator,
        chainIdentifier,
      }: MsgSendToCosmosClaim): AminoMsgSendToCosmosClaim => ({
        type: "multigravity/MsgSendToCosmosClaim",
        value: {
          event_nonce: eventNonce.toNumber(),
          block_height: blockHeight.toNumber(),
          token_contract: tokenContract,
          amount,
          ethereum_sender: ethereumSender,
          cosmos_receiver: cosmosReceiver,
          orchestrator,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        event_nonce,
        block_height,
        token_contract,
        amount,
        ethereum_sender,
        cosmos_receiver,
        orchestrator,
        chain_identifier,
      }: AminoMsgSendToCosmosClaim["value"]): MsgSendToCosmosClaim => ({
        eventNonce: Long.fromNumber(event_nonce),
        blockHeight: Long.fromNumber(block_height),
        tokenContract: token_contract,
        amount,
        ethereumSender: ethereum_sender,
        cosmosReceiver: cosmos_receiver,
        orchestrator,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgExecuteIbcAutoForwards"]: {
      aminoType: "multigravity/MsgExecuteIbcAutoForwards",
      toAmino: ({
        forwardsToClear,
        executor,
        chainIdentifier,
      }: MsgExecuteIbcAutoForwards): AminoMsgExecuteIbcAutoForwards => ({
        type: "multigravity/MsgExecuteIbcAutoForwards",
        value: {
          forwards_to_clear: forwardsToClear.toNumber(),
          executor,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        forwards_to_clear,
        executor,
        chain_identifier,
      }: AminoMsgExecuteIbcAutoForwards["value"]): MsgExecuteIbcAutoForwards => ({
        forwardsToClear: Long.fromNumber(forwards_to_clear),
        executor,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgBatchSendToEthClaim"]: {
      aminoType: "multigravity/MsgBatchSendToEthClaim",
      toAmino: ({
        eventNonce,
        blockHeight,
        batchNonce,
        tokenContract,
        orchestrator,
        chainIdentifier,
      }: MsgBatchSendToEthClaim): AminoMsgBatchSendToEthClaim => ({
        type: "multigravity/MsgBatchSendToEthClaim",
        value: {
          event_nonce: eventNonce.toNumber(),
          block_height: blockHeight.toNumber(),
          batch_nonce: batchNonce.toNumber(),
          token_contract: tokenContract,
          orchestrator,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        event_nonce,
        block_height,
        batch_nonce,
        token_contract,
        orchestrator,
        chain_identifier,
      }: AminoMsgBatchSendToEthClaim["value"]): MsgBatchSendToEthClaim => ({
        eventNonce: Long.fromNumber(event_nonce),
        blockHeight: Long.fromNumber(block_height),
        batchNonce: Long.fromNumber(batch_nonce),
        tokenContract: token_contract,
        orchestrator,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgERC20DeployedClaim"]: {
      aminoType: "multigravity/MsgERC20DeployedClaim",
      toAmino: ({
        eventNonce,
        blockHeight,
        cosmosDenom,
        tokenContract,
        name,
        symbol,
        decimals,
        orchestrator,
        chainIdentifier,
      }: MsgERC20DeployedClaim): AminoMsgERC20DeployedClaim => ({
        type: "multigravity/MsgERC20DeployedClaim",
        value: {
          event_nonce: eventNonce.toNumber(),
          block_height: blockHeight.toNumber(),
          cosmos_denom: cosmosDenom,
          token_contract: tokenContract,
          name,
          symbol,
          decimals: decimals.toNumber(),
          orchestrator,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        event_nonce,
        block_height,
        cosmos_denom,
        token_contract,
        name,
        symbol,
        decimals,
        orchestrator,
        chain_identifier,
      }: AminoMsgERC20DeployedClaim["value"]): MsgERC20DeployedClaim => ({
        eventNonce: Long.fromNumber(event_nonce),
        blockHeight: Long.fromNumber(block_height),
        cosmosDenom: cosmos_denom,
        tokenContract: token_contract,
        name,
        symbol,
        decimals: Long.fromNumber(decimals),
        orchestrator,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgLogicCallExecutedClaim"]: {
      aminoType: "multigravity/MsgLogicCallExecutedClaim",
      toAmino: ({
        eventNonce,
        blockHeight,
        invalidationId,
        invalidationNonce,
        orchestrator,
        chainIdentifier,
      }: MsgLogicCallExecutedClaim): AminoMsgLogicCallExecutedClaim => ({
        type: "multigravity/MsgLogicCallExecutedClaim",
        value: {
          event_nonce: eventNonce.toNumber(),
          block_height: blockHeight.toNumber(),
          invalidation_id: invalidationId,
          invalidation_nonce: invalidationNonce.toNumber(),
          orchestrator,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        event_nonce,
        block_height,
        invalidation_id,
        invalidation_nonce,
        orchestrator,
        chain_identifier,
      }: AminoMsgLogicCallExecutedClaim["value"]): MsgLogicCallExecutedClaim => ({
        eventNonce: Long.fromNumber(event_nonce),
        blockHeight: Long.fromNumber(block_height),
        invalidationId: invalidation_id,
        invalidationNonce: Long.fromNumber(invalidation_nonce),
        orchestrator,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgValsetUpdatedClaim"]: {
      aminoType: "multigravity/MsgValsetUpdatedClaim",
      toAmino: ({
        eventNonce,
        valsetNonce,
        blockHeight,
        members,
        rewardAmount,
        rewardToken,
        orchestrator,
        chainIdentifier,
      }: MsgValsetUpdatedClaim): AminoMsgValsetUpdatedClaim => ({
        type: "multigravity/MsgValsetUpdatedClaim",
        value: {
          event_nonce: eventNonce.toNumber(),
          valset_nonce: valsetNonce.toNumber(),
          block_height: blockHeight.toNumber(),
          members,
          reward_amount: rewardAmount,
          reward_token: rewardToken,
          orchestrator,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        event_nonce,
        valset_nonce,
        block_height,
        members,
        reward_amount,
        reward_token,
        orchestrator,
        chain_identifier,
      }: AminoMsgValsetUpdatedClaim["value"]): MsgValsetUpdatedClaim => ({
        eventNonce: Long.fromNumber(event_nonce),
        valsetNonce: Long.fromNumber(valset_nonce),
        blockHeight: Long.fromNumber(block_height),
        members,
        rewardAmount: reward_amount,
        rewardToken: reward_token,
        orchestrator,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgCancelSendToEth"]: {
      aminoType: "multigravity/MsgCancelSendToEth",
      toAmino: ({ transactionId, sender, chainIdentifier }: MsgCancelSendToEth): AminoMsgCancelSendToEth => ({
        type: "multigravity/MsgValsetUpdatedClaim",
        value: {
          transaction_id: transactionId.toString(),
          sender,
          chain_identifier: chainIdentifier,
        },
      }),
      fromAmino: ({
        transaction_id,
        sender,
        chain_identifier,
      }: AminoMsgCancelSendToEth["value"]): MsgCancelSendToEth => ({
        transactionId: Long.fromString(transaction_id),
        sender,
        chainIdentifier: chain_identifier,
      }),
    },
    ["/multigravity.v1.MsgSubmitBadSignatureEvidence"]: {
      aminoType: "multigravity/MsgSubmitBadSignatureEvidence",
      toAmino: ({
        subject,
        signature,
        sender,
        chainIdentifier,
      }: MsgSubmitBadSignatureEvidence): AminoMsgSubmitBadSignatureEvidence => {
        assertDefinedAndNotNull(subject);
        // TODO
        let any_subject: Any;
        switch (subject.typeUrl) {
          default:
            throw new Error(`Unsupported subject type: '${subject.typeUrl}'`);
        }
        return {
          type: "multigravity/MsgSubmitBadSignatureEvidence",
          value: {
            subject: any_subject,
            signature,
            sender,
            chain_identifier: chainIdentifier,
          },
        };
      },
      fromAmino: ({
        subject,
        signature,
        sender,
        chain_identifier,
      }: AminoMsgSubmitBadSignatureEvidence["value"]): MsgSubmitBadSignatureEvidence => ({
        subject,
        signature,
        sender,
        chainIdentifier: chain_identifier,
      }),
    },
  };
}
