import { Uint64 } from "@cosmjs/math";
import { Account } from "@cosmjs/stargate";
import { assert } from "@cosmjs/utils";
import { BaseAccount, ModuleAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  PeriodicVestingAccount,
} from "cosmjs-types/cosmos/vesting/v1beta1/vesting";
import { Any } from "cosmjs-types/google/protobuf/any";

import { decodePubkey } from "./proto-signing/pubkey";
import { EthAccount } from "./proto/ethermint/types/v1/account";

function uint64FromProto(input: number | Long): Uint64 {
  return Uint64.fromString(input.toString());
}

function accountFromBaseAccount(input: BaseAccount): Account {
  const { address, pubKey, accountNumber, sequence } = input;
  const pubkey = decodePubkey(pubKey);
  return {
    address: address,
    pubkey: pubkey,
    accountNumber: uint64FromProto(accountNumber).toNumber(),
    sequence: uint64FromProto(sequence).toNumber(),
  };
}

/**
 * Basic implementation of AccountParser. This is supposed to support the most relevant
 * common Cosmos SDK account types. If you need support for exotic account types,
 * you'll need to write your own account decoder.
 */
export function accountFromAny(input: Any): Account {
  const { typeUrl, value } = input;

  switch (typeUrl) {
    // auth

    case "/cosmos.auth.v1beta1.BaseAccount":
      return accountFromBaseAccount(BaseAccount.decode(value));
    case "/ethermint.types.v1.EthAccount": {
      const baseAccount = EthAccount.decode(value).baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    case "/cosmos.auth.v1beta1.ModuleAccount": {
      const baseAccount = ModuleAccount.decode(value).baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }

    // vesting

    case "/cosmos.vesting.v1beta1.BaseVestingAccount": {
      const baseAccount = BaseVestingAccount.decode(value)?.baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    case "/cosmos.vesting.v1beta1.ContinuousVestingAccount": {
      const baseAccount = ContinuousVestingAccount.decode(value)?.baseVestingAccount?.baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    case "/cosmos.vesting.v1beta1.DelayedVestingAccount": {
      const baseAccount = DelayedVestingAccount.decode(value)?.baseVestingAccount?.baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    case "/cosmos.vesting.v1beta1.PeriodicVestingAccount": {
      const baseAccount = PeriodicVestingAccount.decode(value)?.baseVestingAccount?.baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }

    default:
      throw new Error(`Unsupported type: '${typeUrl}'`);
  }
}
