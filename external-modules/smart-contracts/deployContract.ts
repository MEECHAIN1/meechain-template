import { ethers } from 'ethers';

export interface DeployConfig {
  contractName: string;
  constructorArgs: any[];
  network: string;
  gasLimit?: number;
}

export interface DeployResult {
  address: string;
  transactionHash: string;
  blockNumber: number;
  gasUsed: string;
}

/**
 * Deploy a smart contract to the blockchain
 * @param config - Deployment configuration
 * @param provider - Ethereum provider
 * @param signer - Wallet signer
 * @returns Deployment result with contract address and transaction details
 */
export async function deployContract(
  config: DeployConfig,
  provider: ethers.providers.Provider,
  signer: ethers.Signer
): Promise<DeployResult> {
  console.log(`🚀 Deploying ${config.contractName} to ${config.network}...`);
  
  try {
    // Load contract factory
    const ContractFactory = await ethers.getContractFactory(
      config.contractName,
      signer
    );
    
    // Prepare deployment options
    const deployOptions: any = {};
    if (config.gasLimit) {
      deployOptions.gasLimit = config.gasLimit;
    }
    
    // Deploy contract
    const contract = await ContractFactory.deploy(
      ...config.constructorArgs,
      deployOptions
    );
    
    console.log(`⏳ Waiting for deployment transaction...`);
    await contract.deployed();
    
    const receipt = await contract.deployTransaction.wait();
    
    console.log(`✅ Contract deployed at: ${contract.address}`);
    
    return {
      address: contract.address,
      transactionHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString()
    };
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    throw error;
  }
}

/**
 * Verify contract deployment
 * @param address - Contract address to verify
 * @param provider - Ethereum provider
 * @returns True if contract exists at address
 */
export async function verifyDeployment(
  address: string,
  provider: ethers.providers.Provider
): Promise<boolean> {
  try {
    const code = await provider.getCode(address);
    return code !== '0x';
  } catch (error) {
    console.error('❌ Verification failed:', error);
    return false;
  }
}

export const moduleInfo = {
  name: "deploy-contract",
  version: "1.0.0",
  author: "MeeChain Community",
  description: "Deploy smart contracts to MeeChain blockchain",
  tags: ["smart-contract", "deployment", "blockchain"],
  dependencies: ["ethers@^5.7.0"]
};
