# การสร้าง External Module

MeeChain รองรับการโหลดฟังก์ชันจาก repo ภายนอก  
คุณสามารถสร้างโมดูลใหม่ได้โดย:

1. สร้างไฟล์ใน `external-modules/` เช่น `smart-contracts/deployContract.ts`
2. ใช้ `useExternalFunction()` เพื่อเรียกใช้งาน
3. เพิ่ม metadata ใน Firebase (ถ้ามต้องการ config)
4. ทดสอบผ่านหน้า `/external-modules`

MeeBot จะโหลดโมดูลของคุณและใช้งานทันทีครับ 💙
# External Modules Setup Guide

คู่มือสำหรับการสร้าง external modules ใน MeeChain

## 📦 External Modules คืออะไร?

External modules คือส่วนขยายที่ contributors สร้างขึ้นเพื่อ:
- เพิ่มความสามารถให้ MeeChain
- แชร์โค้ดที่ใช้ซ้ำได้
- สร้าง ecosystem ร่วมกัน

## 🗂️ โครงสร้าง

```
external-modules/
├── smart-contracts/    # Utilities สำหรับ smart contracts
├── shared-utils/       # Helper functions ทั่วไป
└── app-config/         # Configuration และ templates
```

## 🚀 Quick Start

### 1. Setup Environment

```bash
# Clone repository
git clone https://github.com/T1ADIPT4/meechain-template.git
cd meechain-template

# สร้าง branch ใหม่
git checkout -b module/my-module-name

# ติดตั้ง dependencies (ถ้าจำเป็น)
npm install
```

### 2. สร้าง Module

เลือกหมวดที่เหมาะสม:

#### Smart Contracts Utilities

สำหรับ functions ที่เกี่ยวกับ smart contracts, deployment, verification

```typescript
// external-modules/smart-contracts/myContractHelper.ts

import { ethers } from 'ethers'

/**
 * Helper function description
 */
export async function myContractHelper(
  param: Type
): Promise<ReturnType> {
  // Implementation
}
```

#### Shared Utilities

สำหรับ helper functions ทั่วไป เช่น formatting, calculations, validations

```typescript
// external-modules/shared-utils/myUtility.ts

/**
 * Utility function description
 */
export function myUtility(input: InputType): OutputType {
  // Implementation
}
```

#### App Configuration

สำหรับ templates, configs, constants

```typescript
// external-modules/app-config/myConfig.ts

export interface MyConfig {
  // Config structure
}

export const myConfigs: MyConfig[] = [
  // Configuration data
]
```

### 3. เขียน Documentation

เพิ่ม JSDoc comments:

```typescript
/**
 * Calculate task completion rate
 * 
 * @param completed - Number of completed tasks
 * @param total - Total number of tasks
 * @returns Completion rate as percentage (0-100)
 * 
 * @example
 * ```typescript
 * const rate = calculateCompletionRate(7, 10)
 * // Returns: 70
 * ```
 */
export function calculateCompletionRate(
  completed: number,
  total: number
): number {
  return (completed / total) * 100
}
```

### 4. เพิ่มตัวอย่างการใช้งาน

สร้างไฟล์ `examples/` หรือเพิ่มใน README:

```typescript
// examples/myModule.example.ts

import { myModule } from '../external-modules/shared-utils/myModule'

// Example 1: Basic usage
const result = myModule({ param: 'value' })

// Example 2: Advanced usage
const advanced = myModule({
  param: 'value',
  options: { /* ... */ }
})
```

### 5. เขียน Tests (Optional แต่แนะนำ)

```typescript
// __tests__/myModule.test.ts

import { myModule } from '../external-modules/shared-utils/myModule'

describe('myModule', () => {
  it('should return expected result', () => {
    const result = myModule({ param: 'test' })
    expect(result).toBe(expected)
  })

  it('should handle edge cases', () => {
    const result = myModule({ param: '' })
    expect(result).toBeDefined()
  })
})
```

## 📝 Module Template

### Minimum Required

```typescript
/**
 * Module name and description
 * 
 * @author Your Name (@github-username)
 * @version 1.0.0
 */

// Interfaces/Types
export interface ModuleInput {
  // Input structure
}

export interface ModuleOutput {
  // Output structure
}

// Main function(s)
/**
 * Function description
 * @param input - Input parameter description
 * @returns Return value description
 */
export function mainFunction(input: ModuleInput): ModuleOutput {
  // Implementation
  return {
    // Output
  }
}

// Helper functions (if needed)
function helperFunction() {
  // Internal helper
}
```

## ✅ Best Practices

### TypeScript

- ✅ ใช้ TypeScript เสมอ
- ✅ กำหนด types/interfaces ให้ชัดเจน
- ✅ Avoid `any` type
- ✅ Use strict mode

### Code Quality

- ✅ Single responsibility per function
- ✅ Descriptive names
- ✅ Handle errors properly
- ✅ Add input validation
- ✅ Write pure functions (ถ้าเป็นไปได้)

### Documentation

- ✅ JSDoc comments
- ✅ Usage examples
- ✅ Parameter descriptions
- ✅ Return value descriptions

### Performance

- ✅ Avoid unnecessary loops
- ✅ Cache calculations (ถ้าเหมาะสม)
- ✅ Consider async operations
- ✅ Test with large datasets

## 🔧 Testing Locally

### Manual Testing

```typescript
// test.ts
import { myModule } from './external-modules/shared-utils/myModule'

// Test cases
console.log(myModule({ param: 'test1' }))
console.log(myModule({ param: 'test2' }))

// Edge cases
console.log(myModule({ param: '' }))
console.log(myModule({ param: null }))
```

```bash
# Run test
npx ts-node test.ts
```

### Integration Testing

ทดสอบ module ใน DApp:

```tsx
// dapp/src/pages/test-module.tsx
import { myModule } from '../../../external-modules/shared-utils/myModule'

export default function TestModulePage() {
  const result = myModule({ param: 'test' })
  return <div>Result: {JSON.stringify(result)}</div>
}
```

## 📤 Submitting Module

### 1. Update README

เพิ่มข้อมูล module ใน `external-modules/README.md`:

```markdown
### myModule.ts
Description of what the module does

**Functions:**
- `functionName()` - What it does

**Usage:**
\```typescript
import { functionName } from './external-modules/category/myModule'
const result = functionName(params)
\```
```

### 2. Commit Changes

```bash
git add external-modules/
git commit -m "Add: [Module Name] - [Brief description]"
```

### 3. Push and Create PR

```bash
git push origin module/my-module-name
```

Go to GitHub and create Pull Request with:
- **Title**: `Add: [Module Name]`
- **Description**: 
  - What the module does
  - How to use it
  - Examples
  - Any dependencies

### 4. Code Review

- Maintainers จะ review ภายใน 48 ชั่วโมง
- ตอบ comments หรือแก้ไขตาม feedback
- เมื่อ approved จะ merge เข้า main branch

## 🎁 Rewards

เมื่อ module ของคุณถูก merge:

- 🏅 **Module Creator** badge
- 💰 200-1000 MEE tokens (ตามความซับซ้อน)
- ⭐ Listed in Contributors
- 🎯 Early access to features

## 💡 Module Ideas

ไม่รู้จะสร้างอะไร? ลองดูไอเดียเหล่านี้:

### Smart Contracts
- Contract interaction helpers
- ABI utilities
- Gas optimization tools
- Multi-signature wallet helpers

### Shared Utils
- Date/time formatters (Thai locale)
- Number formatters (บาท, satang)
- Validation utilities
- Data transformation helpers

### App Config
- More board templates
- Badge configurations
- Theme presets
- Language packs

## 🆘 Need Help?

- 📖 ดูตัวอย่าง modules ที่มีอยู่
- 💬 ถาม in GitHub Discussions
- 📧 Email: dev@meechain.io
- 🐛 Open an issue

## 🔗 References

- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [MeeChain API Reference](./API.md)
- [Contributing Guide](./CONTRIBUTING.md)

---

**พร้อมแล้ว?** เริ่มสร้าง module แรกของคุณกันเลย! 🚀
