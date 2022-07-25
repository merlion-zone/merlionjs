import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

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
  ["/merlion.gravity.v1.MsgValsetConfirm", MsgValsetConfirm],
  ["/merlion.gravity.v1.MsgSendToEth", MsgSendToEth],
  ["/merlion.gravity.v1.MsgRequestBatch", MsgRequestBatch],
  ["/merlion.gravity.v1.MsgConfirmBatch", MsgConfirmBatch],
  ["/merlion.gravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall],
  ["/merlion.gravity.v1.MsgSendToCosmosClaim", MsgSendToCosmosClaim],
  ["/merlion.gravity.v1.MsgExecuteIbcAutoForwards", MsgExecuteIbcAutoForwards],
  ["/merlion.gravity.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim],
  ["/merlion.gravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim],
  ["/merlion.gravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim],
  ["/merlion.gravity.v1.MsgCancelSendToEth", MsgCancelSendToEth],
  ["/merlion.gravity.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence],
];

export interface MsgValsetConfirmEncodeObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgValsetConfirm";
  readonly value: Partial<MsgValsetConfirm>;
}

export function isMsgValsetConfirmEncodeObject(object: EncodeObject): object is MsgValsetConfirmEncodeObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgValsetConfirm";
}

export interface MsgSendToEthObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgSendToEth";
  readonly value: Partial<MsgSendToEth>;
}

export function isMsgSendToEthObject(object: EncodeObject): object is MsgSendToEthObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgSendToEth";
}

export interface MsgRequestBatchObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgRequestBatch";
  readonly value: Partial<MsgRequestBatch>;
}

export function isMsgRequestBatchObject(object: EncodeObject): object is MsgRequestBatchObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgRequestBatch";
}

export interface MsgConfirmBatchObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgConfirmBatch";
  readonly value: Partial<MsgConfirmBatch>;
}

export function isMsgConfirmBatchObject(object: EncodeObject): object is MsgConfirmBatchObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgConfirmBatch";
}

export interface MsgConfirmLogicCallObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgConfirmLogicCall";
  readonly value: Partial<MsgConfirmLogicCall>;
}

export function isMsgConfirmLogicCallObject(object: EncodeObject): object is MsgConfirmLogicCallObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgConfirmLogicCall";
}

export interface MsgSendToCosmosClaimObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgSendToCosmosClaim";
  readonly value: Partial<MsgSendToCosmosClaim>;
}

export function isMsgSendToCosmosClaimObject(object: EncodeObject): object is MsgSendToCosmosClaimObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgSendToCosmosClaim";
}

export interface MsgExecuteIbcAutoForwardsObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgExecuteIbcAutoForwards";
  readonly value: Partial<MsgExecuteIbcAutoForwards>;
}

export function isMsgExecuteIbcAutoForwardsObject(
  object: EncodeObject,
): object is MsgExecuteIbcAutoForwardsObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgExecuteIbcAutoForwards";
}

export interface MsgERC20DeployedClaimObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgERC20DeployedClaim";
  readonly value: Partial<MsgERC20DeployedClaim>;
}

export function isMsgERC20DeployedClaimObject(object: EncodeObject): object is MsgERC20DeployedClaimObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgERC20DeployedClaim";
}

export interface MsgLogicCallExecutedClaimObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgLogicCallExecutedClaim";
  readonly value: Partial<MsgLogicCallExecutedClaim>;
}

export function isMsgLogicCallExecutedClaimObject(
  object: EncodeObject,
): object is MsgLogicCallExecutedClaimObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgLogicCallExecutedClaim";
}

export interface MsgValsetUpdatedClaimObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgValsetUpdatedClaim";
  readonly value: Partial<MsgValsetUpdatedClaim>;
}

export function isMsgValsetUpdatedClaimObject(object: EncodeObject): object is MsgValsetUpdatedClaimObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgValsetUpdatedClaim";
}

export interface MsgCancelSendToEthObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgCancelSendToEth";
  readonly value: Partial<MsgCancelSendToEth>;
}

export function isMsgCancelSendToEthObject(object: EncodeObject): object is MsgCancelSendToEthObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgCancelSendToEth";
}

export interface MsgSubmitBadSignatureEvidenceObject extends EncodeObject {
  readonly typeUrl: "/merlion.gravity.v1.MsgSubmitBadSignatureEvidence";
  readonly value: Partial<MsgSubmitBadSignatureEvidence>;
}

export function isMsgSubmitBadSignatureEvidenceObject(
  object: EncodeObject,
): object is MsgSubmitBadSignatureEvidenceObject {
  return object.typeUrl === "/merlion.gravity.v1.MsgSubmitBadSignatureEvidence";
}
