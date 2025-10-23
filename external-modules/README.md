# External Modules

โมดูลเสริมที่พัฒนาโดยชุมชน (Contributors)
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
โมดูลที่พัฒนาโดย contributors สำหรับขยายความสามารถของ MeeChain

## โครงสร้าง

```
external-modules/
├── smart-contracts/    # Smart contract utilities
├── shared-utils/       # Utility functions
└── app-config/         # Configuration and templates
```

## Modules

### smart-contracts/

#### deployContract.ts
Helper functions สำหรับ deploy smart contracts

**Functions:**
- `deployContract()` - Deploy contract to blockchain
- `verifyDeployment()` - Verify contract on block explorer

**Usage:**
```typescript
import { deployContract } from './external-modules/smart-contracts/deployContract'

const result = await deployContract({
  contractName: 'MyContract',
  constructorArgs: [arg1, arg2],
  signer: signer
})
```

### shared-utils/

#### formatProgress.ts
Format และแสดงผลความก้าวหน้า

**Functions:**
- `formatProgress()` - Format progress data with emoji and message
- `estimateCompletion()` - Calculate estimated completion time
- `getProgressBar()` - Generate text-based progress bar
- `formatTimeRemaining()` - Format time in human-readable Thai

**Usage:**
```typescript
import { formatProgress } from './external-modules/shared-utils/formatProgress'

const formatted = formatProgress({
  completed: 7,
  total: 10
})
// Returns: { percentage: 70, display: "7/10", emoji: "🔥", message: "ใกล้เป้าแล้ว!" }
```

### app-config/

#### boardTemplates.ts
Template boards สำเรจรูปที่ผู้ใช้สามารถเลือกใช้ได้ทันที

**Templates:**
- `learning-web3` - เรียนรู้ Web3 พื้นฐาน
- `first-contribution` - Contributor แรกของคุณ
- `daily-productivity` - ผลิตภาพรายวัน

**Functions:**
- `getTemplateById()` - Get template by ID
- `getTemplatesByCategory()` - Get templates by category
- `getTemplatesByTag()` - Get templates by tag

**Usage:**
```typescript
import { boardTemplates, getTemplateById } from './external-modules/app-config/boardTemplates'

const template = getTemplateById('learning-web3')
// Use template to create a new board
```

## การสร้าง External Module

ดูวิธีการสร้าง module ใหม่ได้ที่ [EXTERNAL_MODULES_SETUP.md](../docs/EXTERNAL_MODULES_SETUP.md)

## การใช้งาน Modules

### 1. Import Module
```typescript
import { functionName } from './external-modules/category/moduleName'
```

### 2. ใช้งานตามเอกสาร
แต่ละ module มีคำอธิบายการใช้งานในไฟล์

### 3. Contribute Module ใหม่
- Fork repository
- สร้าง module ในหมวดที่เหมาะสม
- เขียน tests
- ส่ง Pull Request

## Badge Rewards

Contributors ที่สร้าง module ใหม่จะได้รับ:
- 🏅 **Module Creator** badge
- 💰 MEE tokens ตามคุณภาพของ module
- ⭐ Recognition ใน Contributors list

## Guidelines

- ✅ เขียนโค้ดที่ชัดเจนและมี comments
- ✅ ใช้ TypeScript สำหรับ type safety
- ✅ เขียน unit tests
- ✅ ใส่ documentation ในไฟล์
- ✅ ทำให้ module ใช้งานง่ายและเป็น generic

## License

Modules ในนี้เป็น open source ภายใต้ MIT License
# 🧩 External Modules

ระบบโมดูลภายนอกที่ผู้ร่วมสร้างสามารถเขียนและแบ่งปันฟังก์ชันการทำงานใหม่ๆ ให้ MeeBot และระบบอื่นๆ ใช้งานได้

## 📋 สารบัญ

- [แนวคิด](#แนวคด)
- [โครงสร้าง](#โครงสราง)
- [วิธีสร้างโมดูล](#วธสรางโมดล)
- [Module API](#module-api)
- [การ Submit โมดูล](#การ-submit-โมดล)
- [Module Loader](#module-loader)

---

## 💡 แนวคิด

External Modules ช่วยให้:
- Contributors สามารถขยาย functionality ของ MeeBot
- โหลดและใช้งานโมดูลแบบ dynamic
- สร้างระบบ plugin ที่ยืดหยุ่น
- ชุมชนสามารถร่วมสร้าง features ใหม่ๆ

---

## 📁 โครงสร้าง

```
external-modules/
├── smart-contracts/     # Smart contracts เพิ่มเติม
├── shared-utils/        # Utility functions ที่แชร์ใช้ร่วมกัน
└── app-config/          # การตั้งค่าแอป
```

## 📖 ภาพรวม

External Modules ช่วยให้ชุมชนสามารถขยายความสามารถของ MeeChain ได้โดยไม่ต้องแก้ไข core code

## 🔌 ประเภทของ Modules

### 1. Smart Contracts
โมดูล smart contracts เพิ่มเติม เช่น:
- Reward systems
- NFT contracts
- Governance extensions
- Token utilities

### 2. Shared Utils
Utility functions ที่ใช้ร่วมกัน เช่น:
- Data formatters
- Validators
- Helpers
- Converters

### 3. App Config
การตั้งค่าต่างๆ เช่น:
- Themes
- Locales (i18n)
- Feature flags
- Custom configurations

## 🚀 วิธีใช้งาน

### ใน DApp

```javascript
// Import external module
import { useExternalModules } from '@/hooks/useExternalModules';

function MyComponent() {
  const { module, loading } = useExternalModules('shared-utils/formatters');
  
  if (loading) return <div>Loading...</div>;
  
  const formatted = module.formatDate(new Date());
  return <div>{formatted}</div>;
}
```

### ใน Smart Contracts

```solidity
// Import external contract
import "../../external-modules/smart-contracts/rewards/CustomReward.sol";

contract Main {
    CustomReward public rewards;
    
    constructor(address _rewardsAddress) {
        rewards = CustomReward(_rewardsAddress);
    }
}
```

## 📝 การสร้าง Module ใหม่

ดูคู่มือละเอียดที่ [docs/EXTERNAL_MODULES_SETUP.md](../docs/EXTERNAL_MODULES_SETUP.md)

### Quick Start

1. สร้างโฟลเดอร์ใหม่ในประเภทที่ต้องการ
2. เพิ่มไฟล์ `module.json`
3. เขียนโค้ด
4. เพิ่ม tests
5. เขียนเอกสาร
6. ส่ง Pull Request

## 🔐 Security

- ทุก module ต้องผ่าน code review
- ต้องมี tests ครบถ้วน
- ทำ security audit
- จำกัด permissions

## 📚 เพิ่มเติม

- [External Modules Setup Guide](../docs/EXTERNAL_MODULES_SETUP.md)
- [Contributing Guide](../docs/CONTRIBUTING.md)

---

> "ชุมชนทำให้ MeeChain แข็งแกร่งขึ้น" - MeeBot 💙
├── modules/              # โมดูลทั้งหมด
│   ├── greeting/        # ตัวอย่างโมดูล: ทักทาย
│   │   ├── index.js     # Entry point
│   │   ├── config.json  # Configuration
│   │   ├── README.md    # Documentation
│   │   └── test.js      # Tests
│   │
│   └── calculator/      # ตัวอย่างโมดูล: คำนวณ
│       ├── index.js
│       ├── config.json
│       ├── README.md
│       └── test.js
│
├── loader/              # Dynamic module loader
│   └── loader.js        # โหลดโมดูลจาก GitHub
│
├── registry.json        # Registry ของโมดูลทั้งหมด
└── README.md           # เอกสารนี้
```

---

## 🛠️ วิธีสร้างโมดูล

### 1. สร้างโฟลเดอร์โมดูล

```bash
cd external-modules/modules
mkdir my-awesome-module
cd my-awesome-module
```

### 2. สร้างไฟล์ `config.json`

```json
{
  "name": "my-awesome-module",
  "version": "1.0.0",
  "description": "คำอธิบายโมดูลของคุณ",
  "author": "Your Name",
  "license": "MIT",
  "entry": "index.js",
  "dependencies": [],
  "tags": ["utility", "helper"],
  "meebot": {
    "trigger": "awesome",
    "description": "ทำสิ่งที่น่าทึ่ง"
  }
}
```

### 3. สร้างไฟล์ `index.js`

```javascript
/**
 * My Awesome Module
 * @module my-awesome-module
 */

class MyAwesomeModule {
  constructor(config = {}) {
    this.config = config;
  }

  /**
   * Execute the module
   * @param {Object} context - Execution context
   * @returns {Promise<Object>} Result
   */
  async execute(context) {
    // Your module logic here
    return {
      success: true,
      message: "Module executed successfully!",
      data: {}
    };
  }

  /**
   * Validate input
   * @param {Object} input - Input to validate
   * @returns {boolean} Is valid
   */
  validate(input) {
    // Validation logic
    return true;
  }
}

module.exports = MyAwesomeModule;
```

### 4. สร้างไฟล์ `README.md`

```markdown
# My Awesome Module

คำอธิบายโมดูลของคุณ

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`javascript
const MyAwesomeModule = require('./index');
const module = new MyAwesomeModule();
const result = await module.execute({ input: 'data' });
\`\`\`

## API

### `execute(context)`

อธิบาย method นี้

**Parameters:**
- `context` (Object): Context object

**Returns:**
- Promise<Object>: Result object

## Examples

\`\`\`javascript
// Example 1
const result = await module.execute({ foo: 'bar' });
console.log(result);
\`\`\`

## License

MIT
```

### 5. สร้าง Tests (ถ้าเป็นไปได้)

```javascript
// test.js
const MyAwesomeModule = require('./index');

async function test() {
  const module = new MyAwesomeModule();
  
  console.log('Testing MyAwesomeModule...');
  
  const result = await module.execute({ test: true });
  
  if (result.success) {
    console.log('✅ Test passed!');
  } else {
    console.log('❌ Test failed!');
  }
}

test();
```

---

## 📡 Module API

### Required Methods

ทุกโมดูลต้องมี methods เหล่านี้:

#### `constructor(config)`
Initialize โมดูล

#### `execute(context)`
Execute logic หลักของโมดูล

**Parameters:**
- `context` (Object): 
  - `user`: User information
  - `input`: User input
  - `session`: Session data
  - `...`: Custom context

**Returns:**
- `Promise<Object>`:
  - `success` (boolean): Status
  - `message` (string): Response message
  - `data` (Object): Result data

#### `validate(input)`
Validate input data

**Parameters:**
- `input` (Object): Input to validate

**Returns:**
- `boolean`: Is valid

### Optional Methods

#### `onLoad()`
Called when module is loaded

#### `onUnload()`
Called when module is unloaded

#### `getHelp()`
Return help/usage information

---

## 📤 การ Submit โมดูล

### 1. สร้างและทดสอบโมดูล

```bash
# Test your module
node modules/my-awesome-module/test.js
```

### 2. อัปเดต Registry

เพิ่มโมดูลของคุณใน `registry.json`:

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
      "id": "my-awesome-module",
      "name": "My Awesome Module",
      "version": "1.0.0",
      "author": "Your Name",
      "description": "คำอธิบายสั้นๆ",
      "path": "modules/my-awesome-module",
      "entry": "index.js",
      "tags": ["utility", "helper"],
      "verified": false,
      "downloads": 0,
      "rating": 0
    }
  ]
}
```

### 3. สร้าง Pull Request

```bash
git checkout -b feature/add-my-awesome-module
git add external-modules/modules/my-awesome-module
git add external-modules/registry.json
git commit -m "feat(module): add my-awesome-module"
git push origin feature/add-my-awesome-module
```

### 4. รอการ Review

- Maintainers จะ review โมดูลของคุณ
- อาจมีการขอให้แก้ไข
- เมื่อ approved จะถูก merge
- คุณจะได้รับ **Module Maker Badge** 🎉

---

## 🚀 Module Loader

### การใช้งาน Loader

```javascript
const ModuleLoader = require('./loader/loader');

// Initialize loader
const loader = new ModuleLoader({
  registryPath: './registry.json',
  modulesPath: './modules'
});

// Load a module
const module = await loader.load('my-awesome-module');

// Execute module
const result = await module.execute({
  user: { id: '123', name: 'User' },
  input: 'hello'
});

console.log(result);

// Unload module
await loader.unload('my-awesome-module');
```

### Dynamic Loading from GitHub

```javascript
// Load module directly from GitHub
const module = await loader.loadFromGitHub({
  owner: 'T1ADIPT4',
  repo: 'meechain-template',
  path: 'external-modules/modules/my-awesome-module'
});
```

---

## 🏅 Best Practices

1. **เขียนเอกสารที่ดี**: README และ comments ที่ชัดเจน
2. **เขียน Tests**: ให้มั่นใจว่าโมดูลทำงานถูกต้อง
3. **Error Handling**: จัดการ errors อย่างเหมาะสม
4. **Performance**: ใส่ใจ performance
5. **Security**: ตรวจสอบ input และป้องกัน vulnerabilities
6. **Versioning**: ใช้ semantic versioning
7. **Dependencies**: ระบุ dependencies ที่จำเป็น
8. **Examples**: ให้ตัวอย่างการใช้งาน

---

## 📚 ตัวอย่างโมดูล

ดูตัวอย่างโมดูลได้ที่:

- [Greeting Module](modules/greeting/) - ทักทายผู้ใช้
- [Calculator Module](modules/calculator/) - คำนวณเลข
- [Weather Module](modules/weather/) - ตรวจสอบสภาพอากาศ

---

## 🤝 Community Modules

ค้นหาและใช้งานโมดูลจากชุมชน:

- [Browse All Modules](https://github.com/T1ADIPT4/meechain-template/tree/main/external-modules/modules)
- [Most Popular](https://github.com/T1ADIPT4/meechain-template/tree/main/external-modules/modules?sort=downloads)
- [Recently Added](https://github.com/T1ADIPT4/meechain-template/tree/main/external-modules/modules?sort=created)

---

## 📞 Support

ต้องการความช่วยเหลือ?

- [GitHub Issues](https://github.com/T1ADIPT4/meechain-template/issues)
- [Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- [Contributing Guide](../CONTRIBUTING.md)

---

<div align="center">

**Happy Module Building! 🚀**

[⬆ กลับไปด้านบน](#-external-modules)

</div>
