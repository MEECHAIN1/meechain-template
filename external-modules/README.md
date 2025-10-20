# 🧩 External Modules

โมดูลที่ถูกสร้างโดย contributors สามารถนำมาใช้ร่วมกันได้ในทุกโปรเจกต์

## 📚 โมดูลที่มีอยู่

### Smart Contract Modules

#### 1. Deploy Contract
**Path:** `smart-contracts/deployContract.ts`

Deploy smart contracts ไปยัง blockchain

```typescript
import { deployContract } from '@meechain/external-modules/smart-contracts';

const result = await deployContract(
  {
    contractName: 'MyContract',
    constructorArgs: [arg1, arg2],
    network: 'testnet',
    gasLimit: 5000000
  },
  provider,
  signer
);

console.log('Deployed at:', result.address);
```

**Features:**
- รองรับหลาย networks
- กำหนด gas limit ได้
- ตรวจสอบการ deploy อัตโนมัติ
- Return transaction details

---

### Shared Utilities Modules

#### 1. Format Progress
**Path:** `shared-utils/formatProgress.ts`

จัดรูปแบบและแสดงผลความคืบหน้า

```typescript
import { formatProgress } from '@meechain/external-modules/shared-utils';

const progress = formatProgress({
  completed: 75,
  total: 100,
  startTime: new Date('2024-01-01'),
  itemName: 'tasks'
});

console.log(progress.progressBar);        // [███████████░░░░░] 75.0%
console.log(progress.percentageFormatted); // "75.0%"
console.log(progress.estimatedTimeRemaining); // "5m 30s"
```

**Features:**
- Progress bar visualization
- Percentage calculation
- Time estimation
- Customizable display
- Emoji indicators

---

## 🚀 การใช้งาน

### การโหลดโมดูล

```typescript
// Method 1: Direct import
import { deployContract } from '@meechain/external-modules/smart-contracts/deployContract';

// Method 2: Dynamic loading
import { loadModule } from '@meechain/module-loader';

const module = await loadModule('deploy-contract');
const result = await module.deployContract(config);
```

### การใช้ใน MeeBot

```typescript
import { MeeBot } from '@meechain/meebot';

const bot = new MeeBot();

// โหลดโมดูล
await bot.loadModule('format-progress');

// ใช้งานโมดูล
const progress = bot.modules.formatProgress({
  completed: 50,
  total: 100,
  startTime: new Date()
});

// แสดงผล
await bot.speak(`ความคืบหน้า: ${progress.percentageFormatted}`);
```

## 📝 การสร้างโมดูลใหม่

อ่านคู่มือฉบับเต็มที่ [EXTERNAL_MODULES_SETUP.md](../EXTERNAL_MODULES_SETUP.md)

### Quick Start

```bash
# สร้างโฟลเดอร์โมดูล
cd external-modules/shared-utils
mkdir my-module
cd my-module

# สร้างไฟล์
npm init -y
touch index.ts README.md
```

### Template

```typescript
// index.ts
export interface MyModuleConfig {
  // Config interface
}

export interface MyModuleResult {
  // Result interface
}

/**
 * Main function description
 */
export async function myFunction(
  config: MyModuleConfig
): Promise<MyModuleResult> {
  // Implementation
  return {
    // Result
  };
}

export const moduleInfo = {
  name: "my-module",
  version: "1.0.0",
  author: "Your Name",
  description: "Module description",
  tags: ["utility"],
  dependencies: []
};
```

## 🏗 โครงสร้างโมดูล

```
external-modules/
├── smart-contracts/           # โมดูล Smart Contract
│   ├── deployContract.ts     # ✅ Example
│   └── your-module/
│       ├── index.ts
│       ├── README.md
│       └── package.json
└── shared-utils/              # โมดูล Utilities
    ├── formatProgress.ts     # ✅ Example
    └── your-utility/
        ├── index.ts
        ├── README.md
        └── package.json
```

## ✅ Best Practices

### 1. เขียน TypeScript Types

```typescript
// ✅ ดี
export interface Config {
  value: number;
}

export function process(config: Config): string {
  return config.value.toString();
}

// ❌ ไม่ดี
export function process(config: any) {
  return config.value.toString();
}
```

### 2. Error Handling

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
    console.error('Failed:', error);
    throw error;
  }
}
```

### 3. เอกสาร

```typescript
/**
 * Calculate fibonacci number
 * @param n - The position in fibonacci sequence
 * @returns The fibonacci number at position n
 * @example
 * ```typescript
 * const result = fibonacci(10);
 * console.log(result); // 55
 * ```
 */
export function fibonacci(n: number): number {
  // Implementation
}
```

## 🧪 Testing

### Example Test

```typescript
// tests/myModule.test.ts
import { myFunction } from '../index';

describe('myFunction', () => {
  test('should work correctly', async () => {
    const result = await myFunction({
      // test config
    });
    
    expect(result).toBeDefined();
    // More assertions
  });
});
```

## 📦 Module Registry

โมดูลทั้งหมดจะถูกจัดเก็บใน module registry:

```json
{
  "modules": [
    {
      "name": "deploy-contract",
      "version": "1.0.0",
      "type": "smart-contracts",
      "author": "MeeChain Community",
      "downloads": 150,
      "rating": 4.8
    },
    {
      "name": "format-progress",
      "version": "1.0.0",
      "type": "shared-utils",
      "author": "MeeChain Community",
      "downloads": 320,
      "rating": 4.9
    }
  ]
}
```

## 🔄 Module Sync

GitHub Actions จะ sync โมดูลอัตโนมัติเมื่อ:
- มีการ merge PR ที่แก้ไขไฟล์ใน external-modules/
- Validation ผ่านทั้งหมด
- Tests ผ่านทั้งหมด

## 💡 แนวคิดโมดูลที่น่าสนใจ

### Smart Contract Modules
- **Transaction Builder** - สร้าง transactions
- **Gas Optimizer** - Optimize gas usage
- **Event Listener** - ฟัง contract events
- **Wallet Manager** - จัดการ wallets

### Utility Modules
- **Data Validator** - ตรวจสอบข้อมูล
- **Date Formatter** - จัดรูปแบบวันที่
- **String Helper** - ฟังก์ชันจัดการ string
- **Math Utils** - ฟังก์ชันคำนวณ

### UI Modules
- **Chart Generator** - สร้างกราฟ
- **Notification** - แสดง notifications
- **Modal Manager** - จัดการ modals
- **Form Validator** - ตรวจสอบ forms

## 🤝 การมีส่วนร่วม

1. Fork repository
2. สร้างโมดูลของคุณ
3. เขียน tests
4. เขียนเอกสาร
5. ส่ง Pull Request

อ่านเพิ่มเติม: [CONTRIBUTING.md](../CONTRIBUTING.md)

## 📚 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Module Best Practices](../docs/module-best-practices.md)
- [API Documentation](../docs/api-reference.md)

---

**สร้างโมดูลที่เป็นประโยชน์และแชร์ให้ชุมชน! 🚀**
