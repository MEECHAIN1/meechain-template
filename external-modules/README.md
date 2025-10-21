# External Modules

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
