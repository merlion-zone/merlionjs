#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

COSMOS_PROTO_DIR="./proto/cosmos/cosmos-sdk/proto"
THIRD_PARTY_PROTO_DIR="./proto/cosmos/cosmos-sdk/third_party/proto"
IBC_PROTO_DIR="./proto/cosmos/ibc-go/proto"
MERLION_PROTO_DIR="./proto/cosmos/merlion/proto"
OUT_DIR="./src/proto/"

PLUGIN_PATH="$(realpath ./bin)/protoc-gen-ts_proto_yarn_2"

find ./proto/cosmos/ibc-go/ -name '*.proto' -exec sed -i -e 's/"proofs.proto"/"confio\/proofs.proto"/g' {} \;

mkdir -p "$OUT_DIR"

protoc \
  --plugin="$PLUGIN_PATH" \
  --ts_proto_yarn_2_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --proto_path="$IBC_PROTO_DIR" \
  --proto_path="$MERLION_PROTO_DIR" \
  --ts_proto_yarn_2_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/auth.proto" \
  "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/bank.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/abci/v1beta1/abci.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/query/v1beta1/pagination.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/v1beta1/coin.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/multisig/v1beta1/multisig.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/secp256k1/keys.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/distribution.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/staking.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/tx/signing/v1beta1/signing.proto" \
  "$COSMOS_PROTO_DIR/cosmos/tx/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/vesting/v1beta1/vesting.proto" \
  "$IBC_PROTO_DIR/ibc/applications/transfer/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/applications/transfer/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/core/channel/v1/channel.proto" \
  "$IBC_PROTO_DIR/ibc/core/channel/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/core/channel/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/core/client/v1/client.proto" \
  "$IBC_PROTO_DIR/ibc/core/client/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/core/client/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/core/commitment/v1/commitment.proto" \
  "$IBC_PROTO_DIR/ibc/core/connection/v1/connection.proto" \
  "$IBC_PROTO_DIR/ibc/core/connection/v1/query.proto" \
  "$IBC_PROTO_DIR/ibc/core/connection/v1/tx.proto" \
  "$IBC_PROTO_DIR/ibc/lightclients/tendermint/v1/tendermint.proto" \
  "$THIRD_PARTY_PROTO_DIR/confio/proofs.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/abci/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/keys.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/proof.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/libs/bits/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/params.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/validator.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/version/types.proto" \
  "$MERLION_PROTO_DIR/merlion/bank/v1beta1/bank.proto" \
  "$MERLION_PROTO_DIR/merlion/erc20/v1/erc20.proto" \
  "$MERLION_PROTO_DIR/merlion/erc20/v1/genesis.proto" \
  "$MERLION_PROTO_DIR/merlion/erc20/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/erc20/v1/tx.proto" \
  "$MERLION_PROTO_DIR/merlion/gauge/v1/event.proto" \
  "$MERLION_PROTO_DIR/merlion/gauge/v1/gauge.proto" \
  "$MERLION_PROTO_DIR/merlion/gauge/v1/genesis.proto" \
  "$MERLION_PROTO_DIR/merlion/gauge/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/gauge/v1/tx.proto" \
  "$MERLION_PROTO_DIR/merlion/maker/v1/maker.proto" \
  "$MERLION_PROTO_DIR/merlion/maker/v1/genesis.proto" \
  "$MERLION_PROTO_DIR/merlion/maker/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/maker/v1/tx.proto" \
  "$MERLION_PROTO_DIR/merlion/oracle/v1/oracle.proto" \
  "$MERLION_PROTO_DIR/merlion/oracle/v1/genesis.proto" \
  "$MERLION_PROTO_DIR/merlion/oracle/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/oracle/v1/tx.proto" \
  "$MERLION_PROTO_DIR/merlion/staking/v1/staking.proto" \
  "$MERLION_PROTO_DIR/merlion/staking/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/staking/v1/tx.proto" \
  "$MERLION_PROTO_DIR/merlion/ve/v1/event.proto" \
  "$MERLION_PROTO_DIR/merlion/ve/v1/ve.proto" \
  "$MERLION_PROTO_DIR/merlion/ve/v1/genesis.proto" \
  "$MERLION_PROTO_DIR/merlion/ve/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/ve/v1/tx.proto" \
  "$MERLION_PROTO_DIR/merlion/vesting/v1/vesting.proto" \
  "$MERLION_PROTO_DIR/merlion/vesting/v1/genesis.proto" \
  "$MERLION_PROTO_DIR/merlion/vesting/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/vesting/v1/tx.proto" \
  "$MERLION_PROTO_DIR/merlion/voter/v1/genesis.proto" \
  "$MERLION_PROTO_DIR/merlion/voter/v1/query.proto" \
  "$MERLION_PROTO_DIR/merlion/voter/v1/tx.proto"

# Remove unnecessary files
rm -rf \
  src/proto/cosmos_proto/ \
  src/proto/gogoproto/ \
  src/proto/google/api/ \
  src/proto/google/protobuf/descriptor.ts
