const typeUrls = {
  // bank
  MsgSend: "/cosmos.bank.v1beta1.MsgSend" as "/cosmos.bank.v1beta1.MsgSend",
  MsgMultiSend: "/cosmos.bank.v1beta1.MsgMultiSend" as "/cosmos.bank.v1beta1.MsgMultiSend",
  // authz
  MsgExec: "/cosmos.authz.v1beta1.MsgExec" as "/cosmos.authz.v1beta1.MsgExec",
  MsgGrant: "/cosmos.authz.v1beta1.MsgGrant" as "/cosmos.authz.v1beta1.MsgGrant",
  MsgRevoke: "/cosmos.authz.v1beta1.MsgRevoke" as "/cosmos.authz.v1beta1.MsgRevoke",
  // distribution
  MsgFundCommunityPool:
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool" as "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  MsgSetWithdrawAddress:
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress" as "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  MsgWithdrawDelegatorReward:
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" as "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  MsgWithdrawValidatorCommission:
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission" as "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  // feegrant
  MsgGrantAllowance:
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance" as "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  MsgRevokeAllowance:
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance" as "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  // gov
  MsgDeposit: "/cosmos.gov.v1beta1.MsgDeposit" as "/cosmos.gov.v1beta1.MsgDeposit",
  MsgSubmitProposal: "/cosmos.gov.v1beta1.MsgSubmitProposal" as "/cosmos.gov.v1beta1.MsgSubmitProposal",
  MsgVote: "/cosmos.gov.v1beta1.MsgVote" as "/cosmos.gov.v1beta1.MsgVote",
  // staking
  MsgBeginRedelegate:
    "/cosmos.staking.v1beta1.MsgBeginRedelegate" as "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  MsgCreateValidator:
    "/cosmos.staking.v1beta1.MsgCreateValidator" as "/cosmos.staking.v1beta1.MsgCreateValidator",
  MsgDelegate: "/cosmos.staking.v1beta1.MsgDelegate" as "/cosmos.staking.v1beta1.MsgDelegate",
  MsgEditValidator: "/cosmos.staking.v1beta1.MsgEditValidator" as "/cosmos.staking.v1beta1.MsgEditValidator",
  MsgUndelegate: "/cosmos.staking.v1beta1.MsgUndelegate" as "/cosmos.staking.v1beta1.MsgUndelegate",
  // staking
  MsgCreateVestingAccount:
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount" as "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  // ibc
  MsgTransfer: "/ibc.applications.transfer.v1.MsgTransfer" as "/ibc.applications.transfer.v1.MsgTransfer",
  MsgAcknowledgement: "/ibc.core.channel.v1.MsgAcknowledgement" as "/ibc.core.channel.v1.MsgAcknowledgement",
  MsgChannelCloseConfirm:
    "/ibc.core.channel.v1.MsgChannelCloseConfirm" as "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  MsgChannelCloseInit:
    "/ibc.core.channel.v1.MsgChannelCloseInit" as "/ibc.core.channel.v1.MsgChannelCloseInit",
  MsgChannelOpenAck: "/ibc.core.channel.v1.MsgChannelOpenAck" as "/ibc.core.channel.v1.MsgChannelOpenAck",
  MsgChannelOpenConfirm:
    "/ibc.core.channel.v1.MsgChannelOpenConfirm" as "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  MsgChannelOpenInit: "/ibc.core.channel.v1.MsgChannelOpenInit" as "/ibc.core.channel.v1.MsgChannelOpenInit",
  MsgChannelOpenTry: "/ibc.core.channel.v1.MsgChannelOpenTry" as "/ibc.core.channel.v1.MsgChannelOpenTry",
  MsgRecvPacket: "/ibc.core.channel.v1.MsgRecvPacket" as "/ibc.core.channel.v1.MsgRecvPacket",
  MsgTimeout: "/ibc.core.channel.v1.MsgTimeout" as "/ibc.core.channel.v1.MsgTimeout",
  MsgTimeoutOnClose: "/ibc.core.channel.v1.MsgTimeoutOnClose" as "/ibc.core.channel.v1.MsgTimeoutOnClose",
  MsgCreateClient: "/ibc.core.client.v1.MsgCreateClient" as "/ibc.core.client.v1.MsgCreateClient",
  MsgSubmitMisbehaviour:
    "/ibc.core.client.v1.MsgSubmitMisbehaviour" as "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  MsgUpdateClient: "/ibc.core.client.v1.MsgUpdateClient" as "/ibc.core.client.v1.MsgUpdateClient",
  MsgUpgradeClient: "/ibc.core.client.v1.MsgUpgradeClient" as "/ibc.core.client.v1.MsgUpgradeClient",
  MsgConnectionOpenAck:
    "/ibc.core.connection.v1.MsgConnectionOpenAck" as "/ibc.core.connection.v1.MsgConnectionOpenAck",
  MsgConnectionOpenConfirm:
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm" as "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
  MsgConnectionOpenInit:
    "/ibc.core.connection.v1.MsgConnectionOpenInit" as "/ibc.core.connection.v1.MsgConnectionOpenInit",
  MsgConnectionOpenTry:
    "/ibc.core.connection.v1.MsgConnectionOpenTry" as "/ibc.core.connection.v1.MsgConnectionOpenTry",
};

export default typeUrls;
