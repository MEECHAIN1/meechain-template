# 🧩 คู่มือการสร้าง External Modules

External Modules คือโมดูลที่ contributors สามารถสร้างและแชร์ได้ โดย MeeBot และแอปอื่นๆ สามารถโหลดโมดูลเหล่านี้มาใช้งานได้

## 📋 สารบัญ

- [ภาพรวม External Modules](#ภาพรวม-external-modules)
- [โครงสร้างโมดูล](#โครงสร้างโมดูล)
- [ประเภทของโมดูล](#ประเภทของโมดูล)
- [ขั้นตอนการสร้างโมดูล](#ขั้นตอนการสร้างโมดูล)
- [การทดสอบโมดูล](#การทดสอบโมดูล)
- [การ Deploy และ Sync](#การ-deploy-และ-sync)
- [Best Practices](#best-practices)

## 🎯 ภาพรวม External Modules

### ทำไมต้องใช้ External Modules?

- **โมดูลาร์** - แยกฟังก์ชันเป็นส่วนย่อยๆ
- **ใช้ร่วมกันได้** - โมดูลเดียวใช้ได้หลายโปรเจกต์
- **อัพเดทง่าย** - แก้ไขที่เดียว ใช้ได้ทุกที่
- **Community-driven** - ทุกคนสร้างและแชร์โมดูลได้

### ระบบการทำงาน

```
┌─────────────────┐
│  Your Module    │
│  (TypeScript)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Module Sync    │ ← GitHub Actions
│  (Automated)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Module Loader  │
│  (MeeBot/DApp)  │
└─────────────────┘
```

## 📁 โครงสร้างโมดูล

### โครงสร้างทั่วไป

```bash
external-modules/
├── smart-contracts/         # โมดูล Smart Contract
│   └── your-module/
│       ├── index.ts        # Entry point
│       ├── README.md       # เอกสาร
│       ├── package.json    # Dependencies
│       ├── tsconfig.json   # TypeScript config
│       └── tests/          # Unit tests
│           └── index.test.ts
└── shared-utils/           # โมดูล Utilities
    └── your-utility/
        ├── index.ts
        ├── README.md
        ├── package.json
        └── tests/
            └── index.test.ts
```

### ไฟล์ที่จำเป็น

1. **index.ts** - โค้ดหลักของโมดูล
2. **README.md** - เอกสารอธิบายโมดูล
3. **package.json** - Metadata และ dependencies

## 🏗 ประเภทของโมดูล

### 1. Smart Contract Modules

โมดูลสำหรับจัดการ Smart Contracts

**ตัวอย่าง: Deploy Contract Module**

```typescript
// external-modules/smart-contracts/deploy-contract/index.ts

import { ethers } from 'ethers';

export interface DeployConfig {
  contractName: string;
  constructorArgs: any[];
  network: string;
}

export interface DeployResult {
  address: string;
  transactionHash: string;
  blockNumber: number;
}

/**
 * Deploy smart contract to blockchain
 */
export async function deployContract(
  config: DeployConfig,
  provider: ethers.providers.Provider,
  signer: ethers.Signer
): Promise<DeployResult> {
  console.log(`Deploying ${config.contractName}...`);
  
  // Load contract factory
  const Contract = await ethers.getContractFactory(
    config.contractName,
    signer
  );
  
  // Deploy contract
  const contract = await Contract.deploy(...config.constructorArgs);
  await contract.deployed();
  
  const receipt = await contract.deployTransaction.wait();
  
  return {
    address: contract.address,
    transactionHash: receipt.transactionHash,
    blockNumber: receipt.blockNumber
  };
}

export const moduleInfo = {
  name: "deploy-contract",
  version: "1.0.0",
  author: "MeeChain Community",
  description: "Deploy smart contracts to MeeChain"
};
```

### 2. Shared Utilities Modules

โมดูล utility functions ที่ใช้ร่วมกัน

**ตัวอย่าง: Progress Formatter Module**

```typescript
// external-modules/shared-utils/format-progress/index.ts

export interface ProgressData {
  completed: number;
  total: number;
  startTime: Date;
}

export interface FormattedProgress {
  percentage: number;
  completedTasks: number;
  remainingTasks: number;
  estimatedTimeRemaining: string;
}

/**
 * Format progress data for display
 */
export function formatProgress(data: ProgressData): FormattedProgress {
  const { completed, total, startTime } = data;
  const percentage = Math.round((completed / total) * 100);
  const remaining = total - completed;
  
  // Calculate estimated time
  const elapsed = Date.now() - startTime.getTime();
  const avgTimePerTask = elapsed / completed;
  const estimatedRemaining = avgTimePerTask * remaining;
  
  return {
    percentage,
    completedTasks: completed,
    remainingTasks: remaining,
    estimatedTimeRemaining: formatTime(estimatedRemaining)
  };
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

export const moduleInfo = {
  name: "format-progress",
  version: "1.0.0",
  author: "MeeChain Community",
  description: "Format and display progress information"
};
```

## 🚀 ขั้นตอนการสร้างโมดูล

### ขั้นตอนที่ 1: สร้างโครงสร้างพื้นฐาน

```bash
# เลือกประเภทโมดูล
cd external-modules/shared-utils  # หรือ smart-contracts

# สร้างโฟลเดอร์โมดูล
mkdir my-awesome-module
cd my-awesome-module

# สร้างไฟล์พื้นฐาน
npm init -y
touch index.ts README.md tsconfig.json
mkdir tests
touch tests/index.test.ts
```

### ขั้นตอนที่ 2: ตั้งค่า package.json

```json
{
  "name": "@meechain/my-awesome-module",
  "version": "1.0.0",
  "description": "คำอธิบายโมดูลของคุณ",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "lint": "eslint . --ext .ts"
  },
  "keywords": ["meechain", "module"],
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0"
  }
}
```

### ขั้นตอนที่ 3: ตั้งค่า TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["index.ts"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

### ขั้นตอนที่ 4: เขียนโค้ด

```typescript
// index.ts
export interface ModuleConfig {
  // Define your config interface
}

export interface ModuleResult {
  // Define your result interface
}

/**
 * Main function of your module
 */
export async function mainFunction(config: ModuleConfig): Promise<ModuleResult> {
  // Your implementation
  return {
    // Your result
  };
}

// Module metadata (required)
export const moduleInfo = {
  name: "my-awesome-module",
  version: "1.0.0",
  author: "Your Name",
  description: "What this module does",
  tags: ["utility", "helper"],
  dependencies: []
};
```

### ขั้นตอนที่ 5: เขียนเอกสาร

```markdown
# My Awesome Module

## Description
คำอธิบายโมดูลของคุณ

## Installation
\`\`\`bash
npm install @meechain/my-awesome-module
\`\`\`

## Usage
\`\`\`typescript
import { mainFunction } from '@meechain/my-awesome-module';

const result = await mainFunction({
  // your config
});
\`\`\`

## API Reference
### mainFunction(config)
- **config**: Configuration object
- **returns**: Promise<ModuleResult>

## Examples
[ใส่ตัวอย่างการใช้งาน]

## License
MIT
```

### ขั้นตอนที่ 6: เขียน Tests

```typescript
// tests/index.test.ts
import { mainFunction, moduleInfo } from '../index';

describe('My Awesome Module', () => {
  test('should have correct module info', () => {
    expect(moduleInfo.name).toBe('my-awesome-module');
    expect(moduleInfo.version).toBe('1.0.0');
  });

  test('mainFunction should work correctly', async () => {
    const result = await mainFunction({
      // test config
    });
    
    expect(result).toBeDefined();
    // Add more assertions
  });
});
```

## 🧪 การทดสอบโมดูล

### รันการทดสอบ

```bash
# ติดตั้ง dependencies
npm install

# Build TypeScript
npm run build

# รัน tests
npm test

# รัน linting
npm run lint
```

### ทดสอบใน MeeBot

```typescript
// ในโค้ด MeeBot หรือ DApp
import { loadExternalModule } from '@meechain/module-loader';

const myModule = await loadExternalModule('my-awesome-module');
const result = await myModule.mainFunction({
  // config
});
```

## 🔄 การ Deploy และ Sync

### Automatic Sync

เมื่อ PR ของคุณถูก merge:

1. GitHub Actions จะรัน **module-sync.yml**
2. โมดูลจะถูก build และ validate
3. โมดูลจะถูก sync ไปยัง Module Registry
4. MeeBot จะสามารถโหลดโมดูลได้ทันที

### Manual Testing Before PR

```bash
# Clone repo หลัก
git clone https://github.com/T1ADIPT4/meechain-template.git
cd meechain-template

# สร้าง branch ใหม่
git checkout -b feature/my-module

# เพิ่มโมดูลของคุณ
# ... สร้างโมดูล ...

# Commit และ push
git add external-modules/
git commit -m "feat: add my-awesome-module"
git push origin feature/my-module

# เปิด PR
```

## ✅ Best Practices

### 1. ตั้งชื่อโมดูลให้ชัดเจน

- ✅ `format-progress`
- ✅ `deploy-contract`
- ❌ `utils`
- ❌ `helper`

### 2. เขียน TypeScript Types

```typescript
// ✅ ดี
export interface UserData {
  id: string;
  name: string;
}

export function processUser(user: UserData): string {
  return user.name;
}

// ❌ ไม่ดี
export function processUser(user: any) {
  return user.name;
}
```

### 3. Handle Errors

```typescript
// ✅ ดี
export async function fetchData(url: string): Promise<Data> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}
```

### 4. เขียนเอกสารครบถ้วน

- อธิบายวัตถุประสงค์ของโมดูล
- ให้ตัวอย่างการใช้งาน
- ระบุ dependencies และ requirements
- อธิบาย API ทั้งหมด

### 5. Version Control

- ใช้ [Semantic Versioning](https://semver.org/)
- MAJOR.MINOR.PATCH (e.g., 1.2.3)
- เพิ่ม MAJOR เมื่อมี breaking changes
- เพิ่ม MINOR เมื่อเพิ่มฟีเจอร์
- เพิ่ม PATCH เมื่อแก้ bug

## 📦 ตัวอย่างโมดูลที่มีอยู่

ดูตัวอย่างโมดูลที่มีอยู่แล้วใน:

- `external-modules/smart-contracts/deployContract.ts`
- `external-modules/shared-utils/formatProgress.ts`

## ❓ FAQ

**Q: โมดูลของฉันต้องใช้ dependencies ภายนอก ทำได้ไหม?**
A: ได้ แต่ควรระบุใน package.json และอธิบายใน README

**Q: จะอัพเดทโมดูลที่มีอยู่แล้วอย่างไร?**
A: สร้าง PR ใหม่พร้อมเพิ่ม version number

**Q: โมดูลของฉันสามารถเรียกใช้โมดูลอื่นได้ไหม?**
A: ได้ ระบุใน dependencies ใน moduleInfo

## 💡 แนวคิดโมดูลที่น่าสนใจ

- **Transaction Builder** - สร้าง transactions ง่ายขึ้น
- **Data Validator** - ตรวจสอบความถูกต้องของข้อมูล
- **Gas Optimizer** - คำนวณและ optimize gas
- **Event Listener** - ฟัง events จาก smart contracts
- **Wallet Manager** - จัดการ wallets
- **Token Calculator** - คำนวณ token rewards

---

**เริ่มสร้างโมดูลของคุณวันนี้! 🚀**
