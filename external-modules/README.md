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
