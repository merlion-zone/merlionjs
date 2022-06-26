import { Int53 } from "@cosmjs/math";

export class ChainId {
  public readonly identifier: string;
  public readonly eip155: number;
  public readonly version: number;

  constructor(chainId: string) {
    const [identifier, remaining] = chainId.split("_");
    const [eip155, version] = remaining.split("-");
    this.identifier = identifier;
    this.eip155 = Int53.fromString(eip155).toNumber();
    this.version = Int53.fromString(version).toNumber();
  }

  public string(): string {
    return `${this.identifier}_${this.eip155}-${this.version}`;
  }
}
