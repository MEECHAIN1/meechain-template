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
