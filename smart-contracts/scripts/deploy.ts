import { ethers } from "hardhat";

async function main() {
  console.log("Deploying MeeChain Smart Contracts...");

  // Deploy MeeChainToken
  const initialSupply = 1000000; // 1 million tokens
  const rewardPerTask = 10; // 10 MEE per task

  const MeeChainToken = await ethers.getContractFactory("MeeChainToken");
  const meeToken = await MeeChainToken.deploy(initialSupply, rewardPerTask);
  await meeToken.waitForDeployment();

  const meeTokenAddress = await meeToken.getAddress();
  console.log(`✅ MeeChainToken deployed to: ${meeTokenAddress}`);

  // Deploy BadgeMint
  const baseURI = "https://meechain.io/api/badges/";
  
  const BadgeMint = await ethers.getContractFactory("BadgeMint");
  const badgeMint = await BadgeMint.deploy(baseURI);
  await badgeMint.waitForDeployment();

  const badgeMintAddress = await badgeMint.getAddress();
  console.log(`✅ BadgeMint deployed to: ${badgeMintAddress}`);

  // Save deployment info
  console.log("\n📝 Deployment Summary:");
  console.log("========================");
  console.log(`MeeChainToken: ${meeTokenAddress}`);
  console.log(`BadgeMint: ${badgeMintAddress}`);
  console.log("========================\n");

  // Verify contracts (optional, comment out if not needed)
  console.log("Waiting for block confirmations...");
  await meeToken.deploymentTransaction()?.wait(5);
  await badgeMint.deploymentTransaction()?.wait(5);

  console.log("✅ Deployment completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
