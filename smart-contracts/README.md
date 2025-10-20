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
