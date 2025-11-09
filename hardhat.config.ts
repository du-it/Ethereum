// D:\develop\DLT\Ethereum\hardhat.config.ts
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers"; 
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20", 
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  
  // Hardhat findet nun alles im 'contracts'-Ordner automatisch!
  paths: {
    sources: "./contracts", 
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};

export default config;