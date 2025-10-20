import { ethers } from 'ethers';

/**
 * Interface for contract deployment configuration
 */
export interface DeploymentConfig {
  contractName: string;
  abi: any[];
  bytecode: string;
  constructorArgs?: any[];
  gasLimit?: number;
}

/**
 * Interface for deployment result
 */
export interface DeploymentResult {
  address: string;
  transactionHash: string;
  blockNumber: number;
  gasUsed: string;
}

/**
 * Deploy a smart contract to the blockchain
 * 
 * @param provider - Ethereum provider
 * @param signer - Wallet signer for the deployment
 * @param config - Contract deployment configuration
 * @returns Deployment result with contract address and transaction details
 * 
 * @example
 * ```typescript
 * const provider = new ethers.JsonRpcProvider('https://rpc.meechain.network');
 * const wallet = new ethers.Wallet(privateKey, provider);
 * 
 * const result = await deployContract(provider, wallet, {
 *   contractName: 'MyToken',
 *   abi: myTokenABI,
 *   bytecode: myTokenBytecode,
 *   constructorArgs: ['MyToken', 'MTK', 18]
 * });
 * 
 * console.log(`Contract deployed at: ${result.address}`);
 * ```
 */
export async function deployContract(
  provider: ethers.Provider,
  signer: ethers.Signer,
  config: DeploymentConfig
): Promise<DeploymentResult> {
  try {
    console.log(`🚀 Deploying ${config.contractName}...`);

    // Create contract factory
    const factory = new ethers.ContractFactory(
      config.abi,
      config.bytecode,
      signer
    );

    // Deploy contract
    const contract = await factory.deploy(
      ...(config.constructorArgs || []),
      config.gasLimit ? { gasLimit: config.gasLimit } : {}
    );

    // Wait for deployment
    await contract.waitForDeployment();
    const deploymentAddress = await contract.getAddress();

    // Get deployment transaction
    const deploymentTx = contract.deploymentTransaction();
    if (!deploymentTx) {
      throw new Error('Deployment transaction not found');
    }

    const receipt = await deploymentTx.wait();
    if (!receipt) {
      throw new Error('Transaction receipt not found');
    }

    const result: DeploymentResult = {
      address: deploymentAddress,
      transactionHash: receipt.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString()
    };

    console.log(`✅ ${config.contractName} deployed successfully!`);
    console.log(`📍 Contract Address: ${result.address}`);
    console.log(`📝 Transaction Hash: ${result.transactionHash}`);
    console.log(`🔢 Block Number: ${result.blockNumber}`);
    console.log(`⛽ Gas Used: ${result.gasUsed}`);

    return result;
  } catch (error) {
    console.error(`❌ Failed to deploy ${config.contractName}:`, error);
    throw error;
  }
}

/**
 * Verify contract deployment by checking if code exists at the address
 * 
 * @param provider - Ethereum provider
 * @param address - Contract address to verify
 * @returns True if contract code exists at the address
 */
export async function verifyDeployment(
  provider: ethers.Provider,
  address: string
): Promise<boolean> {
  try {
    const code = await provider.getCode(address);
    return code !== '0x';
  } catch (error) {
    console.error('❌ Failed to verify deployment:', error);
    return false;
  }
}
