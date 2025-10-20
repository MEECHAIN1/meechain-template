# External Modules

External modules สำหรับ MeeChain DApp ที่สามารถนำไปใช้งานและขยายผลได้

## 📦 Modules

### Smart Contracts
โมดูลสำหรับจัดการ Smart Contracts บน Blockchain

- **deployContract.ts** - ฟังก์ชันสำหรับ deploy smart contracts
  - รองรับ ethers.js v6
  - มีการตรวจสอบการ deploy
  - แสดงผลข้อมูลการ deploy แบบละเอียด

### Shared Utils
โมดูล utility functions ที่ใช้ร่วมกันทั้งระบบ

- **formatProgress.ts** - ฟังก์ชันสำหรับจัดรูปแบบการแสดงผล progress
  - แสดง progress bar แบบกราฟิก
  - คำนวณเปอร์เซ็นต์
  - สร้าง summary ของ progress หลายรายการ

## 🚀 การใช้งาน

### Smart Contracts - deployContract

```typescript
import { deployContract } from './external-modules/smart-contracts/deployContract';
import { ethers } from 'ethers';

// เชื่อมต่อกับ network
const provider = new ethers.JsonRpcProvider('https://rpc.meechain.network');
const wallet = new ethers.Wallet(privateKey, provider);

// Deploy contract
const result = await deployContract(provider, wallet, {
  contractName: 'MyToken',
  abi: myTokenABI,
  bytecode: myTokenBytecode,
  constructorArgs: ['MyToken', 'MTK', 18],
  gasLimit: 5000000
});

console.log(`Contract deployed at: ${result.address}`);
```

### Shared Utils - formatProgress

```typescript
import { formatProgress, formatProgressSummary } from './external-modules/shared-utils/formatProgress';

// แสดง progress ของ quest เดียว
const progress = formatProgress({
  current: 7,
  total: 10,
  questName: 'Complete Smart Contract Quest',
  moduleName: 'deployContract'
});

console.log(progress.message);
// Output: "🔄 [deployContract] Complete Smart Contract Quest: 70% ████████████████░░░░ (7/10)"

// แสดง summary ของหลาย quests
const summary = formatProgressSummary([
  { current: 10, total: 10, questName: 'Quest 1' },
  { current: 5, total: 10, questName: 'Quest 2' },
  { current: 0, total: 10, questName: 'Quest 3' }
]);

console.log(summary);
```

## 📚 API Reference

### deployContract

Deploy smart contract ไปยัง blockchain

**Parameters:**
- `provider: ethers.Provider` - Ethereum provider
- `signer: ethers.Signer` - Wallet signer สำหรับการ deploy
- `config: DeploymentConfig` - การตั้งค่าการ deploy

**Returns:** `Promise<DeploymentResult>`

### formatProgress

จัดรูปแบบข้อมูล progress ให้แสดงผลแบบ user-friendly

**Parameters:**
- `progress: ProgressData` - ข้อมูล progress
- `barLength: number` - ความยาวของ progress bar (default: 20)

**Returns:** `FormattedProgress`

### formatProgressSummary

สร้าง summary ของ progress หลายรายการ

**Parameters:**
- `progressItems: ProgressData[]` - รายการข้อมูล progress

**Returns:** `string` - ข้อความ summary

## 🔧 Development

### Build

```bash
npm install
npm run build
```

### Clean

```bash
npm run clean
```

## 📄 License

ISC
