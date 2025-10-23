# การสร้าง External Module

MeeChain รองรับการโหลดฟังก์ชันจาก repo ภายนอก  
คุณสามารถสร้างโมดูลใหม่ได้โดย:

1. สร้างไฟล์ใน `external-modules/` เช่น `smart-contracts/deployContract.ts`
2. ใช้ `useExternalFunction()` เพื่อเรียกใช้งาน
3. เพิ่ม metadata ใน Firebase (ถ้ามต้องการ config)
4. ทดสอบผ่านหน้า `/external-modules`

MeeBot จะโหลดโมดูลของคุณและใช้งานทันทีครับ 💙
# 🔌 External Modules Setup Guide

คู่มือการตั้งค่าและใช้งาน External Modules สำหรับ MeeChain

## 📖 ภาพรวม

External Modules คือโมดูลที่ถูกพัฒนาโดยชุมชน (contributors) เพื่อขยายความสามารถของ MeeChain โดยไม่ต้องแก้ไข core code

## 🗂️ โครงสร้าง External Modules

```
external-modules/
├── smart-contracts/     # Smart contracts เพิ่มเติม
│   ├── rewards/
│   ├── nft/
│   └── governance/
├── shared-utils/        # Utility functions
│   ├── formatters/
│   ├── validators/
│   └── helpers/
└── app-config/          # Configurations
    ├── themes/
    ├── locales/
    └── features/
```

## 🚀 การสร้าง External Module

### 1. Smart Contract Module

สร้าง smart contract ใหม่ใน `external-modules/smart-contracts/`:

```solidity
// external-modules/smart-contracts/rewards/CustomReward.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CustomReward {
    // Your custom logic here
}
```

**ไฟล์ Config:**
```javascript
// external-modules/smart-contracts/rewards/config.js
module.exports = {
  name: "CustomReward",
  version: "1.0.0",
  network: "polygon",
  dependencies: ["MEEToken", "T2P"]
}
```

### 2. Shared Utility Module

สร้าง utility function ใน `external-modules/shared-utils/`:

```javascript
// external-modules/shared-utils/formatters/dateFormatter.js
export function formatMeeDate(timestamp) {
  // Custom date formatting logic
  return formattedDate;
}
```

**ไฟล์ Config:**
```javascript
// external-modules/shared-utils/formatters/config.js
module.exports = {
  name: "DateFormatters",
  version: "1.0.0",
  exports: ["formatMeeDate", "formatMeeTime"]
}
```

### 3. App Configuration Module

สร้าง configuration ใน `external-modules/app-config/`:

```javascript
// external-modules/app-config/themes/custom-theme.js
module.exports = {
  name: "CustomTheme",
  colors: {
    primary: "#FF6B6B",
    secondary: "#4ECDC4",
    accent: "#FFE66D"
  },
  fonts: {
    heading: "Inter",
    body: "Roboto"
  }
}
```

## 🔧 การใช้งาน External Modules

### ใน DApp (React/Next.js)

#### 1. ใช้ Hook สำหรับโหลด Modules

```javascript
// dapp/src/hooks/useExternalModules.js
import { useState, useEffect } from 'react';

export function useExternalModules(modulePath) {
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadModule() {
      try {
        const mod = await import(`@/external-modules/${modulePath}`);
        setModule(mod);
      } catch (error) {
        console.error("Failed to load external module:", error);
      } finally {
        setLoading(false);
      }
    }
    loadModule();
  }, [modulePath]);
  
  return { module, loading };
}
```

#### 2. ใช้งานใน Component

```javascript
import { useExternalModules } from '@/hooks/useExternalModules';

function MyComponent() {
  const { module, loading } = useExternalModules('shared-utils/formatters/dateFormatter');
  
  if (loading) return <div>Loading...</div>;
  
  const formattedDate = module?.formatMeeDate(Date.now());
  
  return <div>{formattedDate}</div>;
}
```

### ใน Smart Contracts

```solidity
// smart-contracts/contracts/Main.sol
import "../external-modules/smart-contracts/rewards/CustomReward.sol";

contract Main {
    CustomReward public customReward;
    
    constructor(address _customRewardAddress) {
        customReward = CustomReward(_customRewardAddress);
    }
}
```

### ใน Firebase Functions

```javascript
// firebase-functions/functions/index.js
const { formatMeeDate } = require('../../external-modules/shared-utils/formatters/dateFormatter');

exports.processQuest = functions.https.onCall((data, context) => {
  const timestamp = formatMeeDate(data.completedAt);
  // Process quest logic
});
```

## 📦 Module Registry

### การลงทะเบียน Module

สร้างไฟล์ `module.json` ใน root ของ module:

```json
{
  "name": "custom-reward-module",
  "version": "1.0.0",
  "description": "Custom reward system for MeeChain",
  "author": "Your Name",
  "license": "MIT",
  "type": "smart-contract",
  "exports": {
    "contracts": ["CustomReward"],
    "abi": "./abi/CustomReward.json"
  },
  "dependencies": {
    "MEEToken": "^1.0.0",
    "T2P": "^1.0.0"
  }
}
```

### Module Validation

โมดูลจะต้องผ่านการตรวจสอบก่อนใช้งาน:

```javascript
// external-modules/validator.js
function validateModule(modulePath) {
  // Check module.json exists
  // Validate exports
  // Check dependencies
  // Run security checks
  return isValid;
}
```

## 🔐 Security Guidelines

### 1. Code Review
- ทุก external module ต้องผ่าน code review
- ตรวจสอบ malicious code
- ทดสอบ security vulnerabilities

### 2. Sandboxing
- Modules ทำงานใน isolated environment
- จำกัด access ไปยัง sensitive data
- Monitor resource usage

### 3. Permissions
```javascript
// module.json
{
  "permissions": {
    "storage": "read",
    "network": false,
    "contracts": ["MEEToken"]
  }
}
```

## 🧪 Testing External Modules

### Unit Tests

```javascript
// external-modules/shared-utils/formatters/__tests__/dateFormatter.test.js
import { formatMeeDate } from '../dateFormatter';

describe('formatMeeDate', () => {
  test('formats timestamp correctly', () => {
    const timestamp = 1234567890000;
    const result = formatMeeDate(timestamp);
    expect(result).toBe('expected format');
  });
});
```

### Integration Tests

```javascript
// tests/external-modules/integration.test.js
test('module integrates with main app', async () => {
  const module = await loadExternalModule('custom-module');
  expect(module).toBeDefined();
  expect(module.version).toBe('1.0.0');
});
```

## 📊 Module Metrics

ติดตาม performance และ usage:

```javascript
// external-modules/metrics.js
{
  "module": "custom-reward",
  "loadTime": "125ms",
  "memoryUsage": "2.3MB",
  "activeUsers": 150,
  "errorRate": "0.1%"
}
```

## 🔄 Update และ Versioning

### Semantic Versioning

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

### Migration Guide

เมื่ออัพเดท module ให้สร้าง migration guide:

```markdown
# Migration from v1.0.0 to v2.0.0

## Breaking Changes
- Function `oldFunction()` renamed to `newFunction()`
- Parameter order changed in `someFunction()`

## Migration Steps
1. Update import statements
2. Rename function calls
3. Test thoroughly
```

## 🌐 Publishing Modules

### 1. Prepare Module
```bash
cd external-modules/your-module
npm run build
npm run test
```

### 2. Create Pull Request
- Fork MeeChain repository
- Add your module
- Submit PR with description

### 3. Review Process
- Code review by maintainers
- Security audit
- Performance testing
- Approval and merge

## 📚 Best Practices

1. **Modularity**: Keep modules focused on single purpose
2. **Documentation**: Write clear README for each module
3. **Testing**: Include comprehensive tests
4. **Performance**: Optimize for speed and memory
5. **Security**: Follow security guidelines
6. **Compatibility**: Ensure backward compatibility
7. **Dependencies**: Minimize external dependencies

## 🆘 Troubleshooting

### Module Not Loading
```javascript
// Check module path
console.log("Loading from:", modulePath);

// Verify module.json
const config = require('./module.json');
console.log("Module config:", config);
```

### Version Conflicts
```bash
# Check installed versions
npm list --depth=0

# Update specific module
npm update external-module-name
```

### Performance Issues
```javascript
// Add performance monitoring
const start = performance.now();
const module = await loadExternalModule('module-name');
const end = performance.now();
console.log(`Load time: ${end - start}ms`);
```

## 📞 Support

- เปิด Issue สำหรับคำถาม
- ดู examples ใน `external-modules/examples/`
- ติดต่อผ่าน Discussions

---

> "External Modules ทำให้ MeeChain เติบโตได้ไม่สิ้นสุด" - MeeBot 💙
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
