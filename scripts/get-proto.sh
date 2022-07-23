#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"
COSMOS_DIR="$PROTO_DIR/cosmos"

COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
IBC_GO_DIR="$COSMOS_DIR/ibc-go"
MERLION_DIR="$COSMOS_DIR/merlion"

ZIP_FILE="$COSMOS_DIR/tmp.zip"

COSMOS_SDK_REF=${COSMOS_SDK_REF:-"main"}
IBC_GO_REF=${IBC_GO_REF:-"main"}
MERLION_REF=${MERLION_REF:-"main"}

COSMOS_SDK_SUFFIX=${COSMOS_SDK_REF}
IBC_GO_SUFFIX=${IBC_GO_REF}
MERLION_SUFFIX=${MERLION_REF}

[[ $COSMOS_SDK_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && COSMOS_SDK_SUFFIX=${COSMOS_SDK_SUFFIX#v}
[[ $IBC_GO_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && IBC_GO_SUFFIX=${IBC_GO_SUFFIX#v}
[[ $MERLION_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && MERLION_SUFFIX=${MERLION_SUFFIX#v}

mkdir -p "$COSMOS_DIR"

wget -qO "$ZIP_FILE" "https://github.com/merlion-zone/cosmos-sdk/archive/$COSMOS_SDK_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$COSMOS_SDK_DIR-$COSMOS_SDK_SUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"

wget -qO "$ZIP_FILE" "https://github.com/cosmos/ibc-go/archive/$IBC_GO_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$IBC_GO_DIR-$IBC_GO_SUFFIX" "$IBC_GO_DIR"
rm "$ZIP_FILE"

wget -qO "$ZIP_FILE" "https://github.com/merlion-zone/merlion/archive/$MERLION_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$MERLION_DIR-$MERLION_SUFFIX" "$MERLION_DIR"
rm "$ZIP_FILE"
