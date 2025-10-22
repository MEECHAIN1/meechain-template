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
# 📜 Smart Contracts

Smart Contracts สำหรับ MeeChain: T2P, MEE Token และ DAO Governance

## 🏗 สัญญาที่มีอยู่

### 1. T2P (Time-to-Profit) Contract
สัญญาสำหรับระบบ reward ตามเวลา

### 2. MEE Token Contract
Token หลักของ MeeChain ecosystem

### 3. DAO Governance
ระบบ governance สำหรับการตัดสินใจร่วมกัน

## 🚀 เริ่มต้นใช้งาน

### ติดตั้ง

```bash
cd smart-contracts
npm install
```

### Compile Contracts

```bash
npm run compile
```

### Deploy Contracts
# MeeChain Smart Contracts

Solidity smart contracts สำหรับ MeeChain Task-to-Progress platform

## Contracts

### MeeChainToken (MEE)
ERC-20 token ที่ใช้เป็นรางวัลจากการทำงานสำเร็จ

**Features:**
- Mintable เมื่อผู้ใช้ทำงานสำเร็จ
- กำหนดจำนวน reward ต่องานได้
- ติดตาม tasks completed ของแต่ละผู้ใช้

### BadgeMint (MEEBADGE)
ERC-721 NFT สำหรับ achievement badges

**Features:**
- Mint badge ตามความสำเร็จ
- เก็บ metadata และ timestamp
- แสดงรายการ badges ของผู้ใช้

## Setup

```bash
# ติดตั้ง dependencies
npm install

# คัดลอก .env.example และกำหนดค่า
cp .env.example .env

# แก้ไข .env ให้ถูกต้อง
# - PRIVATE_KEY: private key สำหรับ deployment
# - RPC_URL: RPC endpoint
# - ETHERSCAN_API_KEY: สำหรับ verify contract
```

## Development
# 📜 Smart Contracts

Solidity smart contracts สำหรับ MeeChain ecosystem

## 📋 Overview

Smart contracts รวมถึง:
- **MEE Token**: ERC-20 token สำหรับ ecosystem
- **T2P (Time-to-Profit)**: ระบบรางวัลสำหรับ contributors
- **DAO Governance**: ระบบการจัดการแบบ decentralized
- **Badge NFTs**: Non-fungible tokens สำหรับ achievements

## 🛠️ Tech Stack

- **Language**: Solidity ^0.8.20
- **Framework**: Hardhat / Foundry
- **Testing**: Hardhat / Forge
- **Deployment**: Hardhat Deploy
- **Networks**: Ethereum, Polygon, BSC

## 📁 Structure

```
smart-contracts/
├── contracts/          # Solidity contracts
│   ├── MEE.sol        # MEE Token
│   ├── T2P.sol        # Time-to-Profit system
│   ├── DAO.sol        # Governance
│   ├── Badge.sol      # Badge NFTs
│   └── interfaces/    # Contract interfaces
│
├── scripts/           # Deployment scripts
│   ├── deploy.js      # Main deployment
│   └── verify.js      # Contract verification
│
├── test/              # Contract tests
│   ├── MEE.test.js
│   ├── T2P.test.js
│   └── DAO.test.js
│
├── hardhat.config.js  # Hardhat configuration
└── package.json       # Dependencies
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
### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask or compatible wallet

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Compile

```bash
# Compile contracts
npm run compile

# Run tests
npm run test

# Deploy to local network
npx hardhat node
npm run deploy

# Deploy to testnet/mainnet
npm run deploy -- --network sepolia
```

## Deployment

1. ตั้งค่า `.env` ให้ครบถ้วน
2. Run deployment script:
   ```bash
   npx hardhat run scripts/deploy.ts --network sepolia
   ```
3. Verify contracts:
   ```bash
   # แก้ไข addresses ใน scripts/verify.ts ก่อน
   npx hardhat run scripts/verify.ts --network sepolia
   ```

## Testing

```bash
# Run all tests
npm run test

# Run with coverage
npx hardhat coverage

# Run specific test
npx hardhat test test/MeeChainToken.test.ts
```

## Contract Addresses

เมื่อ deploy แล้ว บันทึก addresses ที่นี่:

### Testnet (Sepolia)
- MeeChainToken: `0x...`
- BadgeMint: `0x...`

### Mainnet
- MeeChainToken: `0x...`
- BadgeMint: `0x...`

## Security

- ✅ ใช้ OpenZeppelin contracts
- ✅ Access control ด้วย Ownable
- ⚠️ ควร audit ก่อน deploy จริง
- ⚠️ ระวัง private key อย่าให้รั่วไหล

## License

MIT
# or
npx hardhat compile
```

### Testing

```bash
# Run tests
npm test

# or
npx hardhat test

# Run with coverage
npm run coverage
```

### Deployment

```bash
# Deploy to local network
npm run deploy:local

# Deploy to testnet
npm run deploy:testnet

# Deploy to mainnet
npm run deploy:mainnet
```

### Run Tests

```bash
npm test
```

## 📁 โครงสร้าง

```
smart-contracts/
├── contracts/          # Solidity contracts
│   ├── T2P.sol
│   ├── MEEToken.sol
│   └── DAOGovernance.sol
├── scripts/           # Deployment scripts
│   └── deploy.ts
├── test/             # Contract tests
│   ├── T2P.test.ts
│   ├── MEEToken.test.ts
│   └── DAO.test.ts
└── hardhat.config.ts # Hardhat configuration
```

## 🔧 เทคโนโลยี

- **Solidity** - Smart contract language
- **Hardhat** - Development environment
- **Ethers.js** - Ethereum library
- **OpenZeppelin** - Secure contract library

## 📝 ตัวอย่าง Contract

### MEE Token

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MEEToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("MeeChain Token", "MEE") {
        _mint(msg.sender, initialSupply);
    }
    
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

## 🔌 การใช้งาน

### Deploy Contract

```typescript
import { deployContract } from '@meechain/external-modules/smart-contracts';
import { ethers } from 'hardhat';

const [deployer] = await ethers.getSigners();

const result = await deployContract(
  {
    contractName: 'MEEToken',
    constructorArgs: [ethers.utils.parseEther('1000000')],
    network: 'testnet'
  },
  ethers.provider,
  deployer
);

console.log('Contract deployed at:', result.address);
```

### Interact with Contract

```typescript
const MEEToken = await ethers.getContractAt('MEEToken', contractAddress);

// Transfer tokens
await MEEToken.transfer(recipient, amount);

// Check balance
const balance = await MEEToken.balanceOf(address);

// Approve spending
await MEEToken.approve(spender, amount);
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
### ตัวอย่าง Test

```typescript
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('MEEToken', function () {
  it('Should deploy with correct initial supply', async function () {
    const [owner] = await ethers.getSigners();
    const initialSupply = ethers.utils.parseEther('1000000');
    
    const MEEToken = await ethers.getContractFactory('MEEToken');
    const token = await MEEToken.deploy(initialSupply);
    
    expect(await token.balanceOf(owner.address)).to.equal(initialSupply);
  });
  
  it('Should transfer tokens correctly', async function () {
    // Test implementation
  });
});
## 📜 Contracts

### MEE Token

ERC-20 token สำหรับ MeeChain ecosystem

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MEE is ERC20 {
    constructor() ERC20("MeeChain", "MEE") {
        _mint(msg.sender, 1000000000 * 10**decimals());
    }
}
```

**Features:**
- Standard ERC-20 functionality
- 18 decimals
- Initial supply: 1 billion MEE
- Burnable
- Pausable (for emergencies)

**Usage:**

```javascript
const MEE = await ethers.getContractFactory("MEE");
const mee = await MEE.deploy();

// Transfer tokens
await mee.transfer(recipient, amount);

// Check balance
const balance = await mee.balanceOf(address);
```

### T2P (Time-to-Profit)

ระบบรางวัลสำหรับ contributors

```solidity
contract T2P {
    struct Contribution {
        address contributor;
        uint256 timestamp;
        uint256 points;
        string contributionType;
    }
    
    mapping(address => uint256) public totalPoints;
    mapping(address => Contribution[]) public contributions;
    
    function recordContribution(
        address contributor,
        uint256 points,
        string memory contributionType
    ) external;
    
    function claimReward() external;
}
```

**Features:**
- Track contributions
- Point system
- Reward distribution
- Vesting schedule

### DAO Governance

ระบบการจัดการแบบ decentralized

```solidity
contract DAO {
    struct Proposal {
        uint256 id;
        address proposer;
        string description;
        uint256 forVotes;
        uint256 againstVotes;
        uint256 deadline;
        bool executed;
    }
    
    function createProposal(string memory description) external;
    function vote(uint256 proposalId, bool support) external;
    function executeProposal(uint256 proposalId) external;
}
```

**Features:**
- Proposal creation
- Voting mechanism
- Execution queue
- Delegation

### Badge NFTs

Non-fungible tokens สำหรับ achievements

```solidity
contract Badge is ERC721 {
    struct BadgeMetadata {
        string name;
        string description;
        uint256 rarity;
        uint256 earnedAt;
    }
    
    mapping(uint256 => BadgeMetadata) public badges;
    
    function mintBadge(
        address to,
        string memory name,
        string memory description,
        uint256 rarity
    ) external;
}
```

**Features:**
- ERC-721 standard
- Metadata storage
- Rarity levels
- Achievement tracking

## 🧪 Testing

### Unit Tests

```bash
npx hardhat test
```

### Integration Tests

```bash
npx hardhat test test/integration/
```

### Coverage

```bash
npx hardhat coverage
```

### Gas Report

```bash
REPORT_GAS=true npx hardhat test
```

## 🚀 Deployment

### Local Network

```bash
# Start local node
npx hardhat node

# Deploy
npx hardhat run scripts/deploy.js --network localhost
```

### Testnet

```bash
# Deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia

# Verify contract
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

### Mainnet

```bash
# Deploy to Ethereum mainnet
npx hardhat run scripts/deploy.js --network mainnet

# Verify
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS
```

## 🔐 Security

### Best Practices

- ใช้ OpenZeppelin contracts
- เขียน comprehensive tests
- ตรวจสอบ reentrancy attacks
- ใช้ access control
- Audit code ก่อน deploy

### Security Checklist

- [ ] ป้องกัน reentrancy
- [ ] ใช้ SafeMath (หรือ Solidity 0.8+)
- [ ] Access control ถูกต้อง
- [ ] Event logging ครบถ้วน
- [ ] Gas optimization
- [ ] Code audited

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
// ✅ ดี - ใช้ memory
function processArray(uint[] memory data) public {
    uint length = data.length; // Cache length
    for (uint i = 0; i < length; i++) {
        // Process
    }
}

// ❌ ไม่ดี - เข้าถึง storage ซ้ำ
function processArray(uint[] storage data) public {
    for (uint i = 0; i < data.length; i++) {
        // Process
    }
}
```

## 🌐 Network Configuration

```typescript
// hardhat.config.ts
export default {
  networks: {
    meechain: {
      url: "https://rpc.meechain.network",
      accounts: [process.env.PRIVATE_KEY]
    },
    testnet: {
      url: "https://testnet-rpc.meechain.network",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

## 📚 เอกสารเพิ่มเติม

- [Solidity Documentation](https://docs.soliditylang.org/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Documentation](https://docs.openzeppelin.com/)

## 🤝 การมีส่วนร่วม

อ่าน [CONTRIBUTING.md](../CONTRIBUTING.md) สำหรับ guidelines
- ✅ Use OpenZeppelin contracts
- ✅ Follow Checks-Effects-Interactions pattern
- ✅ Add reentrancy guards
- ✅ Implement access control
- ✅ Use SafeMath (if Solidity < 0.8.0)
- ✅ Add emergency pause functionality

### Auditing

```bash
# Run Slither
slither .

# Run Mythril
myth analyze contracts/MEE.sol

# Run Echidna
echidna-test contracts/MEE.sol
```

## 📊 Gas Optimization

- Use `calldata` instead of `memory` for external functions
- Pack structs efficiently
- Use events instead of storage when possible
- Batch operations
- Use libraries for common functions

## 🤝 Contributing

### Adding New Contracts

1. Create contract in `contracts/`
2. Write comprehensive tests
3. Add deployment script
4. Update documentation
5. Run security checks

### Testing Guidelines

- Aim for 100% coverage
- Test edge cases
- Test failure scenarios
- Test gas usage
- Test access control

## 📚 Resources

- [Solidity Documentation](https://docs.soliditylang.org)
- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- [Ethereum Development](https://ethereum.org/developers)

## 🐛 Known Issues

- [List known issues here]

## 📝 TODO

- [ ] Implement MEE token
- [ ] Create T2P contract
- [ ] Build DAO governance
- [ ] Add Badge NFTs
- [ ] Write comprehensive tests
- [ ] Deploy to testnet
- [ ] Security audit
- [ ] Gas optimization

## 📄 License

MIT

---

<div align="center">

**Smart Contracts for a Smarter Future**

[⬆ Back to Top](#-smart-contracts)

</div>
