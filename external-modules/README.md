# External Modules

โมดูลเสริมที่พัฒนาโดยชุมชน (Contributors)

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
