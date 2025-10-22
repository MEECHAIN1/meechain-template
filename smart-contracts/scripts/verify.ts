import { run } from "hardhat";

async function main() {
  // Replace these with your deployed contract addresses
  const MEE_TOKEN_ADDRESS = "YOUR_MEE_TOKEN_ADDRESS";
  const BADGE_MINT_ADDRESS = "YOUR_BADGE_MINT_ADDRESS";

  console.log("Verifying contracts on Etherscan...");

  // Verify MeeChainToken
  try {
    await run("verify:verify", {
      address: MEE_TOKEN_ADDRESS,
      constructorArguments: [
        1000000, // initialSupply
        10,      // rewardPerTask
      ],
    });
    console.log("✅ MeeChainToken verified!");
  } catch (error: any) {
    if (error.message.includes("already verified")) {
      console.log("MeeChainToken already verified!");
    } else {
      console.error("Error verifying MeeChainToken:", error);
    }
  }

  // Verify BadgeMint
  try {
    await run("verify:verify", {
      address: BADGE_MINT_ADDRESS,
      constructorArguments: [
        "https://meechain.io/api/badges/", // baseURI
      ],
    });
    console.log("✅ BadgeMint verified!");
  } catch (error: any) {
    if (error.message.includes("already verified")) {
      console.log("BadgeMint already verified!");
    } else {
      console.error("Error verifying BadgeMint:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
