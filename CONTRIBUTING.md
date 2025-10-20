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
