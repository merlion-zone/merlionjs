export { MerlionClient, MerlionClientOptions, SignerData } from "./merlionclient";
export { Web3EIP712Signer, EIP712Signer } from "./web3extension";
export { default as Address } from "./address";
export { default as ChainId } from "./chainid";
export { default as typeUrls } from "./modules/typeurls";
export * as eip712 from "./eip712";

export {
  Erc20Extension,
  GaugeExtension,
  MakerExtension,
  OracleExtension,
  VeExtension,
  VestingExtension,
  setupErc20Extension,
  setupGaugeExtension,
  setupMakerExtension,
  setupOracleExtension,
  setupVeExtension,
  setupVestingExtension,
} from "./modules";
