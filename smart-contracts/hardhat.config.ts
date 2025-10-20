// Hardhat configuration file for MeeChain smart contracts
// This file will be configured with network settings, compiler options, and deployment parameters

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    // Network configurations will be added here
    hardhat: {
      chainId: 1337
    }
  }
};

export default config;
