# Smart Contracts - MeeChain Blockchain Layer

Smart contracts สำหรับระบบ T2P, MEE Token, และ DAO

## 📁 โครงสร้าง

```
smart-contracts/
├── contracts/           # Solidity smart contracts
│   ├── T2P.sol         # Task-to-Point system
│   ├── MEEToken.sol    # MEE utility token
│   ├── DAO.sol         # Governance
│   └── interfaces/     # Contract interfaces
├── scripts/            # Deployment scripts
│   ├── deploy.js
│   └── verify.js
└── hardhat.config.ts   # Hardhat configuration
```

## 🔗 Contracts Overview

### 1. T2P (Task-to-Point)

ระบบแปลง task ที่ทำสำเร็จเป็น points

```solidity
// contracts/T2P.sol
contract T2P {
    function completeTask(uint256 taskId) external;
    function claimPoints(uint256 points) external;
    function getPoints(address user) external view returns (uint256);
}
```

### 2. MEE Token

ERC-20 utility token สำหรับระบบ

```solidity
// contracts/MEEToken.sol
contract MEEToken is ERC20 {
    function mint(address to, uint256 amount) external onlyMinter;
    function burn(uint256 amount) external;
    function transfer(address to, uint256 amount) external returns (bool);
}
```

### 3. DAO (Decentralized Autonomous Organization)

ระบบการจัดการแบบกระจายอำนาจ

```solidity
// contracts/DAO.sol
contract DAO {
    function propose(string memory description) external returns (uint256);
    function vote(uint256 proposalId, bool support) external;
    function execute(uint256 proposalId) external;
}
```

## 🚀 Getting Started

### ติดตั้ง Dependencies

```bash
npm install
```

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy to Network

```bash
# Deploy to localhost
npx hardhat run scripts/deploy.js --network localhost

# Deploy to testnet
npx hardhat run scripts/deploy.js --network mumbai

# Deploy to mainnet
npx hardhat run scripts/deploy.js --network polygon
```

## 🧪 Testing

### Unit Tests

```javascript
// test/T2P.test.js
describe("T2P", function () {
  it("Should complete task and award points", async function () {
    const [owner, user] = await ethers.getSigners();
    const T2P = await ethers.getContractFactory("T2P");
    const t2p = await T2P.deploy();
    
    await t2p.connect(user).completeTask(1);
    const points = await t2p.getPoints(user.address);
    expect(points).to.equal(100);
  });
});
```

### Integration Tests

```javascript
// test/integration.test.js
describe("Integration", function () {
  it("Should work with T2P and MEE Token", async function () {
    // Deploy contracts
    const t2p = await deployT2P();
    const mee = await deployMEE();
    
    // Complete task
    await t2p.completeTask(1);
    
    // Claim MEE tokens
    await t2p.claimTokens(mee.address);
    
    // Check balance
    const balance = await mee.balanceOf(user.address);
    expect(balance).to.equal(expectedAmount);
  });
});
```

## 🔧 Configuration

### Hardhat Config

```typescript
// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};

export default config;
```

### Environment Variables

สร้างไฟล์ `.env`:

```env
PRIVATE_KEY=your_private_key
MUMBAI_RPC_URL=https://rpc-mumbai.maticvigil.com
POLYGON_RPC_URL=https://polygon-rpc.com
POLYGONSCAN_API_KEY=your_api_key
```

## 📝 Deployment Scripts

### Deploy Script

```javascript
// scripts/deploy.js
async function main() {
  // Deploy MEE Token
  const MEE = await ethers.getContractFactory("MEEToken");
  const mee = await MEE.deploy();
  await mee.deployed();
  console.log("MEE Token deployed to:", mee.address);
  
  // Deploy T2P
  const T2P = await ethers.getContractFactory("T2P");
  const t2p = await T2P.deploy(mee.address);
  await t2p.deployed();
  console.log("T2P deployed to:", t2p.address);
  
  // Deploy DAO
  const DAO = await ethers.getContractFactory("DAO");
  const dao = await DAO.deploy(mee.address);
  await dao.deployed();
  console.log("DAO deployed to:", dao.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

### Verify Script

```javascript
// scripts/verify.js
async function main() {
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [arg1, arg2],
  });
}
```

## 🔐 Security

### Auditing

```bash
# Install Slither
pip3 install slither-analyzer

# Run audit
slither .
```

### Best Practices

- ✅ ใช้ OpenZeppelin contracts
- ✅ Implement access control
- ✅ Add reentrancy guards
- ✅ Validate inputs
- ✅ Use SafeMath (for Solidity < 0.8)
- ✅ Test thoroughly
- ✅ Get professional audit

## 📊 Gas Optimization

```solidity
// ✅ Good: Pack variables
contract Optimized {
    uint128 a;
    uint128 b;
    // Uses 1 storage slot
}

// ❌ Bad: Waste storage
contract NotOptimized {
    uint256 a;
    uint256 b;
    // Uses 2 storage slots
}
```

## 🔄 Upgradability

### Using Proxy Pattern

```javascript
// Deploy upgradeable contract
const { deployProxy } = require('@openzeppelin/hardhat-upgrades');

const T2P = await ethers.getContractFactory("T2P");
const t2p = await deployProxy(T2P, [initialArgs], { kind: 'uups' });
```

### Upgrade Contract

```javascript
const T2PV2 = await ethers.getContractFactory("T2PV2");
const upgraded = await upgradeProxy(t2p.address, T2PV2);
```

## 📚 Contract Interfaces

### IT2P

```solidity
// contracts/interfaces/IT2P.sol
interface IT2P {
    event TaskCompleted(address indexed user, uint256 taskId, uint256 points);
    
    function completeTask(uint256 taskId) external;
    function getPoints(address user) external view returns (uint256);
}
```

## 🛠️ Development Tools

- **Hardhat** - Development environment
- **Ethers.js** - Ethereum library
- **OpenZeppelin** - Secure contract library
- **Slither** - Security analyzer
- **Hardhat Gas Reporter** - Gas usage tracking

## 📖 เพิ่มเติม

- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- [Solidity Documentation](https://docs.soliditylang.org)

---

> "Smart Contracts = Trust in Code" - MeeBot 💙
