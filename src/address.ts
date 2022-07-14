import { fromBech32, toBech32 } from "@cosmjs/encoding";
import { ethers } from "ethers";

export class Address {
  private readonly data: Uint8Array;

  public constructor(addr: string) {
    if (ethers.utils.isAddress(addr)) {
      this.data = ethers.utils.arrayify(ethers.utils.getAddress(addr));
    } else {
      this.data = fromBech32(addr).data;
    }
  }

  public eth(): string {
    return ethers.utils.getAddress(ethers.utils.hexlify(this.data));
  }

  public bech32(prefix: string): string {
    return toBech32(prefix, this.data);
  }

  public mer(): string {
    return this.bech32("mer");
  }

  public mervaloper(): string {
    return this.bech32("mervaloper");
  }
}
