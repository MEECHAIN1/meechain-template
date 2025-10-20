# 🚀 MeeChain Template

Template สำหรับ MeeChain DApp พร้อมระบบ MeeBot, Firebase, Smart Contracts และ External Modules

✅ ตั้งเป็น public เพื่อให้ contributors เข้าร่วมได้  
✅ เปิด Issues และ Discussions เพื่อรับ feedback  
✅ พร้อม deploy ได้ทันที  
✅ MeeBot สามารถโหลดโมดูลจาก repo นี้ได้  
✅ Contributors สามารถสร้างโมดูลใหม่และรับ badge ได้  
✅ Firebase เชื่อมกับระบบ quest และ progress ได้ทันที

## 📦 โครงสร้าง

```
meechain-template/
├── external-modules/          # โมดูลภายนอกที่ MeeBot สามารถโหลดได้
│   ├── smart-contracts/       # Smart contract utilities
│   │   └── deployContract.ts  # Deploy contracts to blockchain
│   └── shared-utils/          # Shared utility functions
│       └── formatProgress.ts  # Format progress displays
├── firebase-functions/        # Firebase Cloud Functions
│   └── functions/
│       └── awardBadge.ts      # Award badges to users
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎯 โมดูลตัวอย่าง

### 1. Smart Contracts - deployContract.ts
ฟังก์ชันสำหรับ deploy smart contracts ไปยัง blockchain

```typescript
import { deployContract } from './external-modules/smart-contracts/deployContract';

const result = await deployContract(provider, wallet, {
  contractName: 'MyToken',
  abi: myTokenABI,
  bytecode: myTokenBytecode,
  constructorArgs: ['MyToken', 'MTK', 18]
});
```

### 2. Shared Utils - formatProgress.ts
แสดงผล progress ของ quest แบบสวยงาม

```typescript
import { formatProgress } from './external-modules/shared-utils/formatProgress';

const progress = formatProgress({
  current: 7,
  total: 10,
  questName: 'Complete Smart Contract Quest'
});
// Output: 🔄 Complete Smart Contract Quest: 70% ████████████████░░░░ (7/10)
```

### 3. Firebase Functions - awardBadge.ts
มอบ badge ให้ผู้ใช้เมื่อทำ quest สำเร็จ

```typescript
import { awardBadge } from './firebase-functions/functions/awardBadge';

const result = await awardBadge('user123', 'first-quest', 'quest001');
// Awards a badge and updates user points
```

## 🚀 เริ่มต้นใช้งาน

### 1. Clone Repository

```bash
git clone https://github.com/T1ADIPT4/meechain-template.git
cd meechain-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build Project

```bash
npm run build
```

### 4. ใช้งานโมดูล

โมดูลทั้งหมดพร้อมใช้งานหลังจาก build แล้ว สามารถ import ได้เลย:

```typescript
// ใช้งาน deployContract
import { deployContract } from './external-modules/smart-contracts/deployContract';

// ใช้งาน formatProgress
import { formatProgress } from './external-modules/shared-utils/formatProgress';

// ใช้งาน awardBadge
import { awardBadge } from './firebase-functions/functions/awardBadge';
```

## 📚 Documentation

- [External Modules](./external-modules/README.md) - รายละเอียดโมดูลภายนอก
- [Firebase Functions](./firebase-functions/README.md) - รายละเอียด Cloud Functions

## 🎖️ Badges

เมื่อสร้างโมดูลหรือมีส่วนร่วม คุณจะได้รับ badges:

- 🎯 **First Quest Complete** (10 points) - ทำ quest แรกสำเร็จ
- 📜 **Smart Contract Deployer** (50 points) - Deploy smart contract สำเร็จ
- 🔧 **Module Creator** (100 points) - สร้างโมดูลใหม่
- 🌟 **Contributor** (75 points) - มีส่วนร่วมใน MeeChain
- 👑 **Quest Master** (500 points) - ทำ quest ครบ 10 ครั้ง

## 🤝 Contributing

เรายินดีรับ contributions! สามารถ:

1. Fork repository นี้
2. สร้าง branch ใหม่ (`git checkout -b feature/amazing-module`)
3. สร้างโมดูลใหม่ในโฟลเดอร์ที่เหมาะสม
4. Commit changes (`git commit -m 'Add amazing module'`)
5. Push to branch (`git push origin feature/amazing-module`)
6. เปิด Pull Request

### แนวทางการสร้างโมดูล

- เขียนเอกสารให้ครบถ้วน
- เพิ่ม TypeScript types
- เพิ่มตัวอย่างการใช้งาน
- Test โค้ดให้ทำงานได้จริง

## 📝 Scripts

```bash
npm run build      # Build TypeScript to JavaScript
npm run clean      # Clean build artifacts
```

## 🔧 Requirements

- Node.js >= 18
- TypeScript >= 5.0
- npm หรือ yarn

## 📄 License

ISC

## 🙏 Acknowledgments

- MeeChain Team
- All contributors
- Community members

## 📞 Support

หากมีคำถามหรือปัญหา:
- เปิด Issue ใน GitHub
- Join Discussions
- ติดต่อ MeeChain Team

---

Made with ❤️ by MeeChain Community
