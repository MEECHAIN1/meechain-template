# 🚀 Quick Start Guide

ขั้นตอนด่วนในการเริ่มใช้งาน MeeChain Template

## ⚡ Quick Setup (5 นาที)

### 1. Clone Repository

```bash
git clone https://github.com/T1ADIPT4/meechain-template.git
cd meechain-template
```

### 2. Install & Build

```bash
# ติดตั้ง dependencies
npm install

# Build TypeScript
npm run build
```

### 3. Run Tests

```bash
# รันทดสอบทั้งหมด
npm test

# หรือทดสอบแยกแต่ละโมดูล
npm run test:formatProgress
npm run test:awardBadge
```

## ✅ เสร็จแล้ว!

ตอนนี้ระบบพร้อมใช้งานแล้ว ตรวจสอบได้จาก:

- ✅ Build สำเร็จ (โฟลเดอร์ `dist/` ถูกสร้าง)
- ✅ Tests ผ่านทั้งหมด
- ✅ โมดูลพร้อมใช้งาน

## 📦 สิ่งที่คุณได้

### 1. External Modules

โมดูลที่ MeeBot สามารถโหลดได้:

- **Smart Contracts** (`external-modules/smart-contracts/`)
  - `deployContract.ts` - Deploy smart contracts to blockchain
  
- **Shared Utils** (`external-modules/shared-utils/`)
  - `formatProgress.ts` - Format progress displays

### 2. Firebase Functions

- **awardBadge.ts** - Award badges to users when they complete quests

### 3. Documentation

- `README.md` - คำอธิบายโปรเจค
- `EXAMPLES.md` - ตัวอย่างการใช้งาน
- `external-modules/README.md` - รายละเอียด External Modules
- `firebase-functions/README.md` - รายละเอียด Firebase Functions

## 🎯 ขั้นตอนถัดไป

### Option 1: ทดลองใช้โมดูล

ดูตัวอย่างใน `EXAMPLES.md` และลองใช้งานโมดูล:

```typescript
import { formatProgress } from './external-modules/shared-utils';
import { awardBadge } from './firebase-functions/functions';

// ทดลอง formatProgress
const progress = formatProgress({
  current: 5,
  total: 10,
  questName: 'My First Quest'
});
console.log(progress.message);

// ทดลอง awardBadge
const result = await awardBadge('user123', 'first-quest');
console.log(result.message);
```

### Option 2: สร้างโมดูลใหม่

1. เลือกว่าจะสร้างโมดูลประเภทไหน:
   - Smart Contracts → `external-modules/smart-contracts/`
   - Utilities → `external-modules/shared-utils/`
   - Firebase Functions → `firebase-functions/functions/`

2. สร้างไฟล์ TypeScript ใหม่
3. Export functions ของคุณ
4. เพิ่ม tests
5. Build และ test

### Option 3: Deploy to Production

1. ตั้งค่า Firebase project
2. ตั้งค่า environment variables
3. Deploy functions: `firebase deploy --only functions`
4. ตั้งค่า blockchain RPC endpoint

## 🎖️ รับ Badges

เมื่อคุณ contribute คุณจะได้รับ badges:

- 🎯 **First Quest Complete** (10 points)
- 📜 **Smart Contract Deployer** (50 points)
- 🔧 **Module Creator** (100 points)
- 🌟 **Contributor** (75 points)
- 👑 **Quest Master** (500 points)

## 📚 เรียนรู้เพิ่มเติม

- [Main README](./README.md) - ภาพรวมโปรเจค
- [Examples](./EXAMPLES.md) - ตัวอย่างโค้ด
- [External Modules](./external-modules/README.md) - API Reference
- [Firebase Functions](./firebase-functions/README.md) - Cloud Functions

## ❓ ต้องการความช่วยเหลือ?

- เปิด Issue บน GitHub
- Join Discussions
- ติดต่อ MeeChain Team

## 🏗️ Project Structure

```
meechain-template/
├── external-modules/        # โมดูลที่ MeeBot สามารถโหลดได้
│   ├── smart-contracts/     # Smart contract utilities
│   └── shared-utils/        # Shared utility functions
├── firebase-functions/      # Firebase Cloud Functions
│   └── functions/           # Functions สำหรับ badges & quests
├── tests/                   # Test files
├── dist/                    # Built files (after npm run build)
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript config
├── README.md                # Main documentation
├── EXAMPLES.md              # Code examples
└── QUICKSTART.md            # This file
```

## 🔧 Available Scripts

```bash
npm run build              # Build TypeScript
npm run clean              # Clean build files
npm test                   # Run all tests
npm run test:formatProgress  # Test formatProgress module
npm run test:awardBadge     # Test awardBadge module
```

---

Happy coding! 🎉
