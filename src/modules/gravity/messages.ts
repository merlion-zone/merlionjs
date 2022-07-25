import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import { MsgSetOrchestratorAddress } from "../../proto/gravity/v1/msgs";
import {
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
} from "../../proto/gravity/v1/msgs";

export const gravityTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/gravity.v1.MsgSetOrchestratorAddress", MsgSetOrchestratorAddress],
  ["/multigravity.v1.MsgSendToEth", MsgSendToEth],
  ["/multigravity.v1.MsgCancelSendToEth", MsgCancelSendToEth],
  ["/multigravity.v1.MsgRequestBatch", MsgRequestBatch],
  ["/multigravity.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence],
  ["/multigravity.v1.MsgValsetConfirm", MsgValsetConfirm],
  ["/multigravity.v1.MsgConfirmBatch", MsgConfirmBatch],
  ["/multigravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall],
  ["/multigravity.v1.MsgSendToCosmosClaim", MsgSendToCosmosClaim],
  ["/multigravity.v1.MsgExecuteIbcAutoForwards", MsgExecuteIbcAutoForwards],
  ["/multigravity.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim],
  ["/multigravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim],
  ["/multigravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim],
];

export interface MsgSetOrchestratorAddressEncodeObject extends EncodeObject {
  readonly typeUrl: "/gravity.v1.MsgSetOrchestratorAddress";
  readonly value: Partial<MsgSetOrchestratorAddress>;
}

export function isMsgSetOrchestratorAddressEncodeObject(
  object: EncodeObject,
): object is MsgSetOrchestratorAddressEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgSetOrchestratorAddress";
}

export interface MsgValsetConfirmEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgValsetConfirm";
  readonly value: Partial<MsgValsetConfirm>;
}

export function isMsgValsetConfirmEncodeObject(object: EncodeObject): object is MsgValsetConfirmEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgValsetConfirm";
}

export interface MsgSendToEthEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgSendToEth";
  readonly value: Partial<MsgSendToEth>;
}

export function isMsgSendToEthEncodeObject(object: EncodeObject): object is MsgSendToEthEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgSendToEth";
}

export interface MsgRequestBatchEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgRequestBatch";
  readonly value: Partial<MsgRequestBatch>;
}

export function isMsgRequestBatchEncodeObject(object: EncodeObject): object is MsgRequestBatchEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgRequestBatch";
}

export interface MsgConfirmBatchEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgConfirmBatch";
  readonly value: Partial<MsgConfirmBatch>;
}

export function isMsgConfirmBatchEncodeObject(object: EncodeObject): object is MsgConfirmBatchEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgConfirmBatch";
}

export interface MsgConfirmLogicCallEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgConfirmLogicCall";
  readonly value: Partial<MsgConfirmLogicCall>;
}

export function isMsgConfirmLogicCallEncodeObject(
  object: EncodeObject,
): object is MsgConfirmLogicCallEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgConfirmLogicCall";
}

export interface MsgSendToCosmosClaimEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgSendToCosmosClaim";
  readonly value: Partial<MsgSendToCosmosClaim>;
}

export function isMsgSendToCosmosClaimEncodeObject(
  object: EncodeObject,
): object is MsgSendToCosmosClaimEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgSendToCosmosClaim";
}

export interface MsgExecuteIbcAutoForwardsEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgExecuteIbcAutoForwards";
  readonly value: Partial<MsgExecuteIbcAutoForwards>;
}

export function isMsgExecuteIbcAutoForwardsEncodeObject(
  object: EncodeObject,
): object is MsgExecuteIbcAutoForwardsEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgExecuteIbcAutoForwards";
}

export interface MsgERC20DeployedClaimEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgERC20DeployedClaim";
  readonly value: Partial<MsgERC20DeployedClaim>;
}

export function isMsgERC20DeployedClaimEncodeObject(
  object: EncodeObject,
): object is MsgERC20DeployedClaimEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgERC20DeployedClaim";
}

export interface MsgLogicCallExecutedClaimEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgLogicCallExecutedClaim";
  readonly value: Partial<MsgLogicCallExecutedClaim>;
}

export function isMsgLogicCallExecutedClaimEncodeObject(
  object: EncodeObject,
): object is MsgLogicCallExecutedClaimEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgLogicCallExecutedClaim";
}

export interface MsgValsetUpdatedClaimEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgValsetUpdatedClaim";
  readonly value: Partial<MsgValsetUpdatedClaim>;
}

export function isMsgValsetUpdatedClaimEncodeObject(
  object: EncodeObject,
): object is MsgValsetUpdatedClaimEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgValsetUpdatedClaim";
}

export interface MsgCancelSendToEthEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgCancelSendToEth";
  readonly value: Partial<MsgCancelSendToEth>;
}

export function isMsgCancelSendToEthEncodeObject(
  object: EncodeObject,
): object is MsgCancelSendToEthEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgCancelSendToEth";
}

export interface MsgSubmitBadSignatureEvidenceEncodeObject extends EncodeObject {
  readonly typeUrl: "/multigravity.v1.MsgSubmitBadSignatureEvidence";
  readonly value: Partial<MsgSubmitBadSignatureEvidence>;
}

export function isMsgSubmitBadSignatureEvidenceEncodeObject(
  object: EncodeObject,
): object is MsgSubmitBadSignatureEvidenceEncodeObject {
  return object.typeUrl === "/multigravity.v1.MsgSubmitBadSignatureEvidence";
}
