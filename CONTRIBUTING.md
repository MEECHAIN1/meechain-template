# 🤝 คู่มือการมีส่วนร่วม (Contributing Guide)

ยินดีต้อนรับสู่ MeeChain Template! เราดีใจที่คุณสนใจจะมีส่วนร่วมในโปรเจกต์นี้ 🎉

## 📋 สารบัญ

- [แนวทางการมีส่วนร่วม](#แนวทางการมีส่วนร่วม)
- [การตั้งค่าสภาพแวดล้อม](#การตั้งค่าสภาพแวดล้อม)
- [วิธีการส่ง Pull Request](#วิธีการส่ง-pull-request)
- [มาตรฐานการเขียนโค้ด](#มาตรฐานการเขียนโค้ด)
- [การสร้าง External Module](#การสร้าง-external-module)
- [ระบบ Badge](#ระบบ-badge)

## 🌟 แนวทางการมีส่วนร่วม

### ประเภทของการมีส่วนร่วม

คุณสามารถมีส่วนร่วมได้หลายรูปแบบ:

1. **🐛 แจ้ง Bug** - พบปัญหา? แจ้งให้เราทราบผ่าน Issues
2. **💡 เสนอฟีเจอร์** - มีไอเดียดีๆ? เราอยากรู้!
3. **📝 เขียนเอกสาร** - ช่วยปรับปรุงเอกสารให้ดีขึ้น
4. **🧩 สร้างโมดูล** - สร้างโมดูลใหม่ใน external-modules/
5. **🎨 ปรับปรุง UI/UX** - ทำให้แอปสวยและใช้งานง่ายขึ้น
6. **🔧 แก้ไขโค้ด** - แก้ bug หรือเพิ่มฟีเจอร์

## 🛠 การตั้งค่าสภาพแวดล้อม

### ข้อกำหนดเบื้องต้น

```bash
node --version  # ควรเป็น v18 ขึ้นไป
npm --version   # ควรเป็น v9 ขึ้นไป
git --version   # ควรเป็น v2.30 ขึ้นไป
```

### ขั้นตอนการติดตั้ง

1. **Fork repository**
   - คลิกปุ่ม "Fork" ที่มุมบนขวาของหน้า GitHub
   - Fork ไปยัง account ของคุณ

2. **Clone repository ของคุณ**
```bash
git clone https://github.com/<your-username>/meechain-template.git
cd meechain-template
```

3. **เพิ่ม upstream remote**
```bash
git remote add upstream https://github.com/T1ADIPT4/meechain-template.git
git remote -v
```

4. **ติดตั้ง dependencies**
```bash
# สำหรับแต่ละโมดูล
cd dapp && npm install
cd ../firebase-functions/functions && npm install
cd ../smart-contracts && npm install
```

5. **สร้าง branch ใหม่**
```bash
git checkout -b feature/your-feature-name
# หรือ
git checkout -b fix/your-bug-fix
```

## 🔄 วิธีการส่ง Pull Request

### ขั้นตอนการส่ง PR

1. **ตรวจสอบให้แน่ใจว่าโค้ดของคุณทำงานได้**
```bash
npm run test      # รัน tests
npm run lint      # ตรวจสอบ code style
npm run build     # สร้าง build
```

2. **Commit การเปลี่ยนแปลง**
```bash
git add .
git commit -m "feat: เพิ่มฟีเจอร์ ABC"
# หรือ
git commit -m "fix: แก้ไข bug XYZ"
```

3. **Push ไปยัง repository ของคุณ**
```bash
git push origin feature/your-feature-name
```

4. **เปิด Pull Request**
   - ไปที่ repository ต้นฉบบับน GitHub
   - คลิก "New Pull Request"
   - เลือก branch ของคุณ
   - กรอกข้อมูลตาม template

### รูปแบบ Commit Message

เราใช้ [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` เพิ่มฟีเจอร์ใหม่
- `fix:` แก้ไข bug
- `docs:` แก้ไขเอกสาร
- `style:` แก้ไข formatting, spacing, etc.
- `refactor:` ปรับปรุงโค้ดโดยไม่เปลี่ยนการทำงาน
- `test:` เพิ่มหรือแก้ไข tests
- `chore:` งานบำรุงรักษาอื่นๆ

ตัวอย่าง:
```
feat: เพิ่มระบบ emotion tracking ใน MeeBot
fix: แก้ไขปัญหา badge ไม่แสดงผล
docs: อัพเดทคู่มือการใช้งาน Firebase
```

## 📏 มาตรฐานการเขียนโค้ด

### TypeScript/JavaScript

- ใช้ TypeScript เท่าที่ทำได้
- ตั้งชื่อตัวแปรแบบ camelCase
- ตั้งชื่อ interface/type แบบ PascalCase
- เพิ่ม JSDoc comments สำหรับ functions สำคัญ
- ใช้ `const` และ `let` แทน `var`

```typescript
// ✅ ดี
const userName: string = "MeeChain";
function calculateReward(points: number): number {
  return points * 1.5;
}

// ❌ ไม่ดี
var user_name = "MeeChain";
function calc(p) {
  return p * 1.5;
}
```

### React/Next.js

- ใช้ Functional Components
- ใช้ Hooks (useState, useEffect, etc.)
- แยก components เป็นไฟล์ย่อยๆ
- ใช้ TypeScript interfaces สำหรับ props

```typescript
// ✅ ดี
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### Smart Contracts (Solidity)

- ใช้ Solidity 0.8.0+
- เพิ่ม NatSpec comments
- ตรวจสอบ security vulnerabilities
- เขียน tests ครอบคลุม

```solidity
// ✅ ดี
/// @notice Transfer tokens to recipient
/// @param recipient Address to receive tokens
/// @param amount Amount of tokens to transfer
function transfer(address recipient, uint256 amount) public returns (bool) {
  require(recipient != address(0), "Invalid recipient");
  require(balances[msg.sender] >= amount, "Insufficient balance");
  // ... rest of function
}
```

## 🧩 การสร้าง External Module

External Modules คือโมดูลที่ contributors สามารถสร้างและแชร์ได้

### โครงสร้างโมดูล

```bash
external-modules/
├── smart-contracts/
│   └── your-module/
│       ├── index.ts
│       ├── README.md
│       └── package.json
└── shared-utils/
    └── your-utility/
        ├── index.ts
        ├── README.md
        └── package.json
```

### ขั้นตอนการสร้างโมดูล

1. **สร้างโฟลเดอร์ใหม่**
```bash
cd external-modules/shared-utils
mkdir my-awesome-module
cd my-awesome-module
```

2. **สร้างไฟล์พื้นฐาน**
```bash
npm init -y
touch index.ts README.md
```

3. **เขียนโค้ด**

```typescript
// index.ts
export interface ModuleInfo {
  name: string;
  version: string;
  author: string;
}

export function myFunction(input: string): string {
  return `Processed: ${input}`;
}

export const moduleInfo: ModuleInfo = {
  name: "my-awesome-module",
  version: "1.0.0",
  author: "Your Name"
};
```

4. **เขียนเอกสาร**

สร้าง `README.md` อธิบาย:
- วัตถุประสงค์ของโมดูล
- วิธีการใช้งาน
- ตัวอย่าง code
- Dependencies (ถ้ามี)

5. **ส่ง Pull Request**

ดูรายละเอียดเพิ่มเติมใน [EXTERNAL_MODULES_SETUP.md](EXTERNAL_MODULES_SETUP.md)

## 🏆 ระบบ Badge

เมื่อ PR ของคุณถูก merge คุณจะได้รับ badge อัตโนมัติ!

### ประเภท Badge

- 🌟 **First Contribution** - PR แรกของคุณ
- 🐛 **Bug Hunter** - แก้ไข bug
- ✨ **Feature Creator** - สร้างฟีเจอร์ใหม่
- 📚 **Documentation Hero** - ปรับปรุงเอกสาร
- 🧩 **Module Builder** - สร้าง external module
- 🔥 **Active Contributor** - มี PR มากกว่า 5 ครั้ง
- 🏅 **Core Contributor** - มี PR มากกว่า 20 ครั้ง

Badge จะถูกบันทึกใน Firebase และแสดงในโปรไฟล์ของคุณ!

## 🔍 กระบวนการ Review

1. **Automated Checks** - CI/CD จะรัน tests และ linting
2. **Code Review** - Maintainers จะ review โค้ด
3. **Feedback** - อาจมี comments ขอให้แก้ไข
4. **Merge** - เมื่อผ่านการ review แล้วจะถูก merge
5. **Badge Award** - คุณจะได้รับ badge!

## ❓ คำถามที่พบบ่อย (FAQ)

### Q: ต้องมีประสบการณ์มากแค่ไหน?
A: ไม่จำเป็นต้องเป็นผู้เชี่ยวชาญ! เรายินดีต้อนรับทุกระดับ

### Q: จะเริ่มจากไหนดี?
A: ลองดู Issues ที่มี label "good first issue"

### Q: มีคำถามเพิ่มเติมทำอย่างไร?
A: เปิด Discussion บน GitHub หรือ comment ใน Issue

## 📞 ติดต่อ

- 💬 [GitHub Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- 📧 [GitHub Issues](https://github.com/T1ADIPT4/meechain-template/issues)

---

**ขอบคุณที่มีส่วนร่วมกับ MeeChain! 🚀**
# 🤝 Contributing to MeeChain Template

ขอบคุณที่สนใจมีส่วนร่วมใน MeeChain Template! เอกสารนี้จะช่วยให้คุณเริ่มต้น contribute ได้ง่ายขึ้น

## 🎯 วิธีการ Contribute

มีหลายวิธีที่คุณสามารถมีส่วนร่วมได้:

### 1. 🔧 สร้างโมดูลใหม่

สร้างโมดูลใหม่ที่มีประโยชน์สำหรับ MeeChain ecosystem:

- Smart Contract utilities
- Helper functions
- Firebase Functions
- Integration modules

### 2. 📝 ปรับปรุงเอกสาร

- เพิ่มตัวอย่างการใช้งาน
- แปลเอกสาร
- เขียน tutorials
- แก้ไข typos

### 3. 🐛 รายงาน Bugs

- พบ bug? เปิด Issue
- อธิบายปัญหาให้ชัดเจน
- แนบ error logs ถ้ามี

### 4. ✨ เสนอ Features

- มีไอเดียใหม่? เปิด Discussion
- อธิบายว่าจะมีประโยชน์อย่างไร
- ถ้าเป็นไปได้ เสนอวิธีการ implement

## 📋 ขั้นตอนการ Contribute

### 1. Fork Repository

```bash
# Fork บน GitHub UI แล้ว clone fork ของคุณ
# 🤝 Contributing to MeeChain

ขอบคุณที่สนใจมีส่วนร่วมในการพัฒนา MeeChain! 💙

เอกสารนี้จะแนะนำวิธีการมีส่วนร่วมในโปรเจกต์ของเรา

---

## 📋 สารบัญ

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Badge & Quest System](#badge--quest-system)
- [Community](#community)

---

## 📜 Code of Conduct

โปรดอ่านและปฏิบัติตาม [Code of Conduct](CODE_OF_CONDUCT.md) ของเรา

**สิ่งที่เราคาดหวัง:**
- เคารพซึ่งกันและกัน
- ให้ feedback ที่สร้างสรรค์
- ยอมรับความคิดเห็นที่แตกต่าง
- มุ่งเน้นที่เป็นประโยชน์กับชุมชน

---

## 🚀 Getting Started

### 1. Fork Repository

คลิก "Fork" ที่มุมขวาบนของหน้า repository

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/meechain-template.git
cd meechain-template
```

### 2. สร้าง Branch ใหม่

```bash
# สร้าง branch สำหรับ feature ของคุณ
git checkout -b feature/your-awesome-feature

# หรือ branch สำหรับ bug fix
git checkout -b fix/bug-description
```

### 3. ทำการเปลี่ยนแปลง

```bash
# ติดตั้ง dependencies
npm install

# ทำการเปลี่ยนแปลงโค้ด
# ...

# Build เพื่อตรวจสอบว่า compile ผ่าน
npm run build

# รัน tests
npm test
```

### 4. Commit Changes

```bash
# Add ไฟล์ที่เปลี่ยนแปลง
git add .

# Commit พร้อม message ที่ชัดเจน
git commit -m "Add: new feature description"

# หรือ
git commit -m "Fix: bug description"
```

### 5. Push และสร้าง Pull Request

```bash
# Push ไปยัง fork ของคุณ
git push origin feature/your-awesome-feature

# จากนั้นเปิด Pull Request บน GitHub
```

## 📐 Code Standards

### TypeScript Style

- ใช้ TypeScript strict mode
- เพิ่ม type annotations ทุกที่ที่เป็นไปได้
- Export interfaces และ types
- เขียน JSDoc comments สำหรับ public functions

ตัวอย่าง:

```typescript
/**
 * Description of what the function does
 * 
 * @param param1 - Description of param1
 * @param param2 - Description of param2
 * @returns Description of return value
 * 
 * @example
 * ```typescript
 * const result = myFunction('test', 123);
 * console.log(result);
 * ```
 */
export function myFunction(param1: string, param2: number): ReturnType {
  // Implementation
}
```

### File Structure

```
module-name/
├── index.ts           # Export all public APIs
├── module.ts          # Main implementation
└── README.md          # Module documentation
```

### Testing

- เพิ่ม tests สำหรับ features ใหม่
- ใส่ tests ใน `tests/` directory
- ตั้งชื่อไฟล์เป็น `test-moduleName.ts`
- ตรวจสอบว่า tests ผ่านทั้งหมด

```typescript
// tests/test-myModule.ts
import { myFunction } from '../path/to/module';

console.log('🧪 Testing myModule...\n');

// Test 1
console.log('Test 1: Basic functionality');
const result = myFunction('test', 123);
console.log(`Result: ${result}`);
console.log('✅ Test 1 passed\n');

console.log('🎉 All tests passed!');
```

### Documentation

- เขียนเอกสารเป็นภาษาไทยและอังกฤษ
- เพิ่มตัวอย่างการใช้งาน
- อธิบาย parameters และ return values
- แนบ examples ที่ใช้งานได้จริง

## 🎖️ รับ Badges

เมื่อคุณ contribute คุณจะได้รับ badges:

| Badge | Requirements | Points |
|-------|-------------|---------|
| 🎯 First Quest Complete | Complete your first contribution | 10 |
| 📜 Smart Contract Deployer | Add smart contract module | 50 |
| 🔧 Module Creator | Create a new module | 100 |
| 🌟 Contributor | Contribute to MeeChain | 75 |
| 👑 Quest Master | 10+ contributions | 500 |

## 📦 Module Guidelines

### สร้าง External Module

1. เลือก directory ที่เหมาะสม:
   - `external-modules/smart-contracts/` - Smart contract utilities
   - `external-modules/shared-utils/` - Utility functions
   - `external-modules/[new-category]/` - Category ใหม่

2. สร้างไฟล์ TypeScript:

```typescript
// external-modules/category/myModule.ts

/**
 * Module description
 */

export interface MyModuleConfig {
  // Configuration interface
}

export interface MyModuleResult {
  // Result interface
}

/**
 * Main function description
 */
export async function myModuleFunction(
  config: MyModuleConfig
): Promise<MyModuleResult> {
  // Implementation
}
```

3. สร้าง index.ts:

```typescript
// external-modules/category/index.ts
export * from './myModule';
```

4. เพิ่ม README.md:

```markdown
# Module Name

Description

## Usage

\`\`\`typescript
import { myModuleFunction } from './external-modules/category';
// Example
\`\`\`
```

### สร้าง Firebase Function

1. สร้างไฟล์ใน `firebase-functions/functions/`:

```typescript
// firebase-functions/functions/myFunction.ts

/**
 * Description
 */

export interface MyFunctionInput {
  // Input interface
}

export interface MyFunctionResult {
  success: boolean;
  message: string;
  data?: any;
}

export async function myFunction(
  input: MyFunctionInput
): Promise<MyFunctionResult> {
  try {
    // Implementation
    return {
      success: true,
      message: 'Success',
      data: { /* result */ }
    };
  } catch (error) {
    return {
      success: false,
      message: `Error: ${error}`
    };
  }
}
```

2. Export ใน index.ts:

```typescript
// firebase-functions/functions/index.ts
export * from './myFunction';
```

## ✅ Checklist ก่อน Submit PR

- [ ] โค้ดสามารถ build ได้ (`npm run build`)
- [ ] Tests ผ่านทั้งหมด (`npm test`)
- [ ] เพิ่ม tests สำหรับ features ใหม่
- [ ] เขียน JSDoc comments
- [ ] เพิ่มตัวอย่างการใช้งาน
- [ ] อัพเดท README ถ้าจำเป็น
- [ ] Commit message ชัดเจน
- [ ] ไม่มี console.log ที่ไม่จำเป็น (ยกเว้น debug/logging ที่ตั้งใจ)

## 💬 Community Guidelines

- เคารพ contributors ทุกคน
- ให้ feedback แบบ constructive
- ช่วยเหลือ contributors ใหม่
- แบ่งปันความรู้

## 🐛 รายงาน Bugs

เมื่อรายงาน bugs ควรระบุ:

- **Description**: อธิบายปัญหา
- **Steps to reproduce**: ขั้นตอนทำให้เกิด bug
- **Expected behavior**: ผลลัพธ์ที่คาดหวัง
- **Actual behavior**: ผลลัพธ์จริงที่เกิดขึ้น
- **Environment**: Node version, OS, etc.
- **Error logs**: ถ้ามี

ตัวอย่าง:

```markdown
## Bug Description
formatProgress crashes when total is 0

## Steps to Reproduce
1. Call formatProgress({ current: 0, total: 0 })
2. Function throws error

## Expected Behavior
Should return 0% progress

## Actual Behavior
Throws "Division by zero" error

## Environment
- Node: v18.0.0
- OS: macOS 13.0
```

## 📞 ต้องการความช่วยเหลือ?

- **GitHub Issues**: สำหรับ bugs และ feature requests
- **GitHub Discussions**: สำหรับคำถามและการสนทนา
- **MeeChain Community**: Join our community channels

## 📄 License

เมื่อคุณ contribute โค้ด คุณตกลงที่จะเผยแพร่ภายใต้ ISC License เดียวกับโปรเจคนี้

---

ขอบคุณที่เป็นส่วนหนึ่งของ MeeChain Community! 🎉
### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/T1ADIPT4/meechain-template.git
```

### 4. Setup Development Environment

```bash
# Install dependencies for all components
./scripts/install-all.sh

# Or install individually
cd dapp && npm install
cd ../meebot && pip install -r requirements.txt
cd ../firebase-functions && npm install
cd ../smart-contracts && npm install
```

---

## 🛠️ How to Contribute

### 🐛 Reporting Bugs

1. ตรวจสอบว่ามี [issue](https://github.com/T1ADIPT4/meechain-template/issues) ที่คล้ายกันอยู่แล้วหรือไม่
2. ถ้าไม่มี สร้าง issue ใหม่โดยใช้ [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)
3. ใส่ข้อมูลให้ครบถ้วน:
   - ขั้นตอนการทำซ้ำ
   - พฤติกรรมที่คาดหวัง
   - พฤติกรรมจริง
   - Screenshots (ถ้ามี)
   - Environment details

### 💡 Suggesting Features

1. สร้าง issue โดยใช้ [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)
2. อธิบายว่าคุณต้องการอะไรและทำไม
3. ให้ตัวอย่าง use cases

### 🔧 Submitting Code Changes

#### สำหรับ Small Changes

1. สร้าง branch ใหม่:
```bash
git checkout -b fix/your-fix-name
# หรือ
git checkout -b feature/your-feature-name
```

2. ทำการเปลี่ยนแปลง

3. เขียน tests (ถ้าเป็นไปได้)

4. Commit changes:
```bash
git commit -m "fix: brief description of your fix"
# หรือ
git commit -m "feat: brief description of your feature"
```

5. Push to your fork:
```bash
git push origin your-branch-name
```

6. สร้าง Pull Request

#### สำหรับ Large Changes

1. สร้าง issue เพื่อคุยกันก่อน
2. รอการตอบรับจาก maintainers
3. ทำตาม workflow เหมือนข้างบน

---

## 🔄 Development Workflow

### Branch Naming Convention

- `feat/feature-name` - คุณสมบัติใหม่
- `fix/bug-name` - แก้ไข bugs
- `docs/doc-name` - การเปลี่ยนแปลงเอกสาร
- `refactor/refactor-name` - Refactoring code
- `test/test-name` - เพิ่มหรือแก้ไข tests
- `chore/task-name` - งานอื่นๆ (dependencies, config, etc.)

### Commit Message Format

ใช้ [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: คุณสมบัติใหม่
- `fix`: แก้ไข bug
- `docs`: เอกสาร
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Refactoring code
- `test`: เพิ่มหรือแก้ไข tests
- `chore`: งานบำรุงรักษา

**ตัวอย่าง:**
```
feat(meebot): add new greeting persona

Add a friendly greeting persona for MeeBot that welcomes new contributors.

Closes #123
```

### Pull Request Process

1. **อัปเดต branch ให้เป็นปัจจุบัน:**
```bash
git fetch upstream
git rebase upstream/main
```

2. **รัน tests:**
```bash
npm test  # สำหรับ JavaScript/TypeScript
pytest    # สำหรับ Python
```

3. **รัน linters:**
```bash
npm run lint       # JavaScript/TypeScript
black .            # Python
flake8 .           # Python
```

4. **สร้าง Pull Request:**
   - ใช้ template ที่มีให้
   - อธิบายการเปลี่ยนแปลงอย่างชัดเจน
   - Link ไปยัง related issues
   - รอการ review จาก maintainers

5. **ตอบสนองต่อ feedback:**
   - Maintainers อาจขอให้แก้ไข
   - ทำการแก้ไขและ push ใหม่
   - PR จะถูก merge เมื่อได้รับการอนุมัติ

---

## 📐 Coding Standards

### JavaScript/TypeScript

- ใช้ ESLint และ Prettier
- ใช้ TypeScript สำหรับโค้ดใหม่
- เขียน JSDoc comments สำหรับ public APIs
- ตั้งชื่อแบบ camelCase สำหรับ variables/functions
- ตั้งชื่อแบบ PascalCase สำหรับ classes/components

### Python

- ปฏิบัติตาม PEP 8
- ใช้ Black สำหรับ formatting
- ใช้ type hints
- เขียน docstrings สำหรับ functions/classes
- ตั้งชื่อแบบ snake_case

### Solidity

- ปฏิบัติตาม [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- ใช้ Solhint
- เขียน NatSpec comments
- เขียน comprehensive tests

### Documentation

- ใช้ Markdown
- ใส่ code examples
- อธิบายอย่างชัดเจนและกระชับ
- รองรับทั้งภาษาไทยและอังกฤษ

---

## 🎯 Badge & Quest System

เมื่อคุณ contribute คุณจะได้รับ badges และคะแนนอัตโนมัติ!

### 🏅 Badges

| Badge | เงื่อนไข | คะแนน |
|-------|---------|-------|
| 🌟 First Contribution | PR แรกที่ถูก merge | 10 |
| 🐛 Bug Hunter | แก้ไข bug | 15 |
| ✨ Feature Creator | เพิ่มคุณสมบัติใหม่ | 25 |
| 🧠 Module Maker | สร้าง external module | 30 |
| 📚 Documentarian | ปรับปรุงเอกสาร | 10 |
| 🧪 Test Champion | เพิ่มหรือปรับปรุง tests | 20 |
| 🎓 Academy Author | สร้างเนื้อหาการเรียนรู้ | 35 |
| 💎 Core Contributor | Contribute 10+ PRs | 100 |
| 🏆 Top Contributor | อันดับ 1 ในเดือน | 200 |

### 🎮 Quests

Quests เป็นงานพิเศษที่มีรางวัล:

- **Quest: First Module** - สร้าง external module แรก (รางวัล: 50 คะแนน)
- **Quest: Documentation Hero** - ปรับปรุงเอกสาร 5 หน้า (รางวัล: 40 คะแนน)
- **Quest: Bug Bounty** - แก้ไข 5 bugs (รางวัล: 75 คะแนน)
- **Quest: Test Master** - เพิ่ม test coverage 20% (รางวัล: 60 คะแนน)

ดู quests ที่เปิดอยู่ได้ที่ [Issues with Quest label](https://github.com/T1ADIPT4/meechain-template/labels/quest)

### 💬 MeeBot Welcome

เมื่อ PR ของคุณถูก merge MeeBot จะต้อนรับคุณ:

> "ขอบคุณที่สร้างโมดูลใหม่ให้เพื่อน ๆ ใช้นะครับ!  
> ผมได้มอบ badge 'ผู้สร้างสมองเสริม' ให้คุณแล้ว 🎉  
> ตอนนี้โมดูลของคุณพร้อมให้โหลดผ่าน external-modules แล้วครับ!"

---

## 🎓 Contributing to Different Areas

### 🖼️ DApp (Frontend)

- ดู [dapp/README.md](dapp/README.md)
- ใช้ React/Next.js
- ทำ responsive design
- เขียน unit tests และ E2E tests

### 🤖 MeeBot

- ดู [meebot/README.md](meebot/README.md)
- ใช้ Python
- เขียน personality modules
- Test กับ different scenarios

### 📜 Smart Contracts

- ดู [smart-contracts/README.md](smart-contracts/README.md)
- ใช้ Solidity
- เขียน comprehensive tests
- ทำ security audit ก่อน PR

### 🔥 Firebase Functions

- ดู [firebase-functions/README.md](firebase-functions/README.md)
- ใช้ Node.js/TypeScript
- ทำ error handling
- เขียน unit tests

### 🧩 External Modules

- ดู [external-modules/README.md](external-modules/README.md)
- ปฏิบัติตาม module API
- เขียนเอกสารชัดเจน
- ใส่ตัวอย่างการใช้งาน

### 📚 Academy Content

- ดู [academy/README.md](academy/README.md)
- เขียน tutorials ที่เข้าใจง่าย
- ใส่ code examples
- ทำ step-by-step guides

---

## 💬 Community

### 🗣️ ช่องทางการสื่อสาร

- **GitHub Issues**: สำหรับ bugs และ feature requests
- **GitHub Discussions**: สำหรับ Q&A และการสนทนาทั่วไป
- **Discord**: [Coming Soon]
- **Twitter**: [Coming Soon]

### 🙋 ขอความช่วยเหลือ

ไม่แน่ใจว่าจะเริ่มต้นยังไง?

1. ดู [Good First Issues](https://github.com/T1ADIPT4/meechain-template/labels/good%20first%20issue)
2. อ่าน [Documentation](docs/)
3. ถาม MeeBot (coming soon)
4. ถามใน GitHub Discussions

### 🎉 ทีม MeeChain

- **Maintainers**: ดูแลโปรเจกต์และ review PRs
- **Contributors**: ทุกคนที่มีส่วนร่วม
- **Community**: คุณ! 💙

---

## 📊 Development Process

### Issue Lifecycle

1. **Open** - Issue ถูกสร้าง
2. **Triaged** - Maintainers ตรวจสอบและติด label
3. **Assigned** - มีคนรับทำ
4. **In Progress** - กำลังทำงาน
5. **Review** - PR ถูกสร้างและรอ review
6. **Merged** - PR ถูก merge
7. **Closed** - Issue ถูกปิด

### PR Lifecycle

1. **Draft** - PR ยังทำไม่เสร็จ
2. **Ready for Review** - พร้อมให้ review
3. **Under Review** - Maintainers กำลัง review
4. **Changes Requested** - ต้องแก้ไข
5. **Approved** - ได้รับการอนุมัติ
6. **Merged** - ถูก merge เข้า main branch

---

## 🔐 Security

พบช่องโหว่ด้านความปลอดภัย?

**อย่า** เปิด public issue!

แทนที่จะ:
1. ส่งอีเมลไปที่: [security@meechain.example.com] (Coming Soon)
2. ใส่รายละเอียดช่องโหว่
3. รอการตอบกลับจากทีม

---

## 📝 License

ด้วยการ contribute คุณยอมรับว่าโค้ดของคุณจะถูก license ภายใต้ [MIT License](LICENSE)

---

## 🙏 ขอบคุณ

ขอบคุณที่ช่วยทำให้ MeeChain ดีขึ้น! 💙

ทุก contribution ไม่ว่าจะเล็กหรือใหญ่ล้วนมีค่า

---

<div align="center">

**Happy Coding! 🚀**

[⬆ กลับไปด้านบน](#-contributing-to-meechain)

</div>
