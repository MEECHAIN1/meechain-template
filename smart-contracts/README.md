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
