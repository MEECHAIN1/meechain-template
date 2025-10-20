# MeeChain Template Setup Guide

ยินดีต้อนรับสู่ MeeChain Template! 🎉

## 📋 ภาพรวม

Repository นี้เป็น template สำหรับสร้างระบบ MeeChain ที่ประกอบด้วย:
- **DApp**: แอปพลิเคชันหลัก (Next.js/React)
- **MeeBot**: ระบบ AI assistant ที่มีอารมณ์และบุคลิกภาพ
- **Smart Contracts**: สัญญาอัจฉริยะบน blockchain (T2P, MEE, DAO)
- **Firebase Functions**: Backend services สำหรับ badges และ quests
- **External Modules**: ระบบโมดูลขยายจากชุมชน
- **Academy**: เนื้อหาการเรียนรู้และบทเรียน

## 🚀 เริ่มต้นใช้งาน

### ข้อกำหนด

- Node.js 18 หรือสูงกว่า
- npm หรือ yarn
- Git
- Firebase CLI (สำหรับ Firebase Functions)
- Wallet (MetaMask หรือเทียบเท่า)

### การติดตั้ง

1. **Clone Repository**
   ```bash
   git clone https://github.com/T1ADIPT4/meechain-template.git
   cd meechain-template
   ```

2. **ติดตั้ง Dependencies**
   
   สำหรับ DApp:
   ```bash
   cd dapp
   npm install
   ```
   
   สำหรับ Smart Contracts:
   ```bash
   cd ../smart-contracts
   npm install
   ```
   
   สำหรับ Firebase Functions:
   ```bash
   cd ../firebase-functions/functions
   npm install
   ```

3. **ตั้งค่า Environment Variables**
   
   สร้างไฟล์ `.env.local` ในโฟลเดอร์ `dapp/`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
   NEXT_PUBLIC_CHAIN_ID=137
   ```

4. **รันโปรเจกต์**
   
   DApp (Development):
   ```bash
   cd dapp
   npm run dev
   ```
   
   Firebase Emulator:
   ```bash
   cd firebase-functions
   firebase emulators:start
   ```

## 📁 โครงสร้างโปรเจกต์

```
MeeChain/
├── dapp/                  # แอปหลัก (Next.js / React)
│   ├── src/
│   │   ├── pages/        # หน้าเว็บต่างๆ
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom hooks (รวม useExternalModules)
│   │   └── lib/          # Utility libraries
│   └── public/           # Static files
│
├── meebot/               # ระบบ MeeBot
│   ├── engine/          # Core logic (MeeBotEngine.js)
│   ├── prompts/         # AI prompts และ templates
│   └── voice/           # Text-to-speech features
│
├── smart-contracts/      # Smart Contracts
│   ├── contracts/       # Solidity contracts
│   ├── scripts/         # Deployment scripts
│   └── hardhat.config.ts
│
├── firebase-functions/   # Backend Services
│   ├── functions/       # Cloud functions (badges, quests, logging)
│   └── firestore.rules  # Security rules
│
├── external-modules/     # External Modules
│   ├── smart-contracts/ # Additional contracts
│   ├── shared-utils/    # Utility functions
│   └── app-config/      # Configurations
│
├── academy/              # Learning Content
│   ├── lessons/         # บทเรียน
│   └── quests/          # ภารกิจ
│
├── docs/                 # Documentation
│   ├── README.md
│   ├── CONTRIBUTING.md
│   └── EXTERNAL_MODULES_SETUP.md
│
└── .github/              # GitHub Configuration
    ├── workflows/       # CI/CD pipelines
    └── ISSUE_TEMPLATE.md
```

## 🎯 ฟีเจอร์หลัก

### 1. MeeBot AI Assistant
- อารมณ์และบุคลิกภาพที่หลากหลาย
- ระบบ Text-to-Speech
- Context-aware responses
- รองรับภาษาไทย

### 2. Quest & Badge System
- ระบบภารกิจแบบ gamification
- Badges ที่สามารถปลดล็อกได้
- รางวัลเป็น points และ MEE tokens
- Firebase Functions สำหรับ backend

### 3. External Modules
- โหลดโมดูลแบบ dynamic
- รองรับ smart contracts, utils, และ configs
- Security และ permission management
- ชุมชนสามารถสร้างโมดูลเพิ่มได้

### 4. Smart Contracts
- T2P (Task-to-Point) system
- MEE Token (ERC-20)
- DAO governance
- Polygon network

### 5. Academy
- บทเรียนการใช้งาน
- Quests สำหรับการเรียนรู้
- Progress tracking

## 📖 การใช้งาน

### ใช้งาน MeeBot

```javascript
import MeeBotEngine from '@/meebot/engine/MeeBotEngine';

const meebot = new MeeBotEngine();
const greeting = meebot.greet();
console.log(greeting.text); // "สวัสดีครับ! ผมชื่อ MeeBot..."
```

### โหลด External Modules

```javascript
import { useExternalModules } from '@/hooks/useExternalModules';

function MyComponent() {
  const { module, loading } = useExternalModules('shared-utils/formatters/dateFormatter');
  
  if (!loading) {
    const formatted = module.formatMeeDate(Date.now());
  }
}
```

### ทำงานกับ Quests

```javascript
// Firebase Function
const result = await completeQuest({
  userId: 'user123',
  questId: 'first-steps'
});
```

## 🤝 การมีส่วนร่วม

เรายินดีรับการมีส่วนร่วมจากทุกคน!

### วิธีการ Contribute

1. Fork repository
2. สร้าง feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. เปิด Pull Request

ดูรายละเอียดเพิ่มเติมที่ [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md)

### ประเภทของ Contributions

- 🐛 รายงานและแก้ไข bugs
- ✨ เสนอและสร้างฟีเจอร์ใหม่
- 📝 ปรับปรุงเอกสาร
- 🔌 สร้าง External Modules
- 🎓 สร้างเนื้อหาการเรียนรู้
- 🎨 ปรับปรุง UI/UX

## 📚 เอกสาร

- [README.md](./README.md) - ภาพรวมโปรเจกต์
- [docs/README.md](./docs/README.md) - คู่มือหลัก
- [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) - คู่มือสำหรับผู้ร่วมพัฒนา
- [docs/EXTERNAL_MODULES_SETUP.md](./docs/EXTERNAL_MODULES_SETUP.md) - วิธีสร้าง External Modules

### เอกสารเฉพาะส่วน

- [dapp/README.md](./dapp/README.md) - DApp documentation
- [meebot/README.md](./meebot/README.md) - MeeBot documentation
- [smart-contracts/README.md](./smart-contracts/README.md) - Smart Contracts documentation
- [firebase-functions/README.md](./firebase-functions/README.md) - Firebase Functions documentation
- [external-modules/README.md](./external-modules/README.md) - External Modules documentation
- [academy/README.md](./academy/README.md) - Academy documentation

## 🔧 Development

### รัน Tests

```bash
# DApp
cd dapp
npm test

# Smart Contracts
cd smart-contracts
npx hardhat test

# Firebase Functions
cd firebase-functions/functions
npm test
```

### Build สำหรับ Production

```bash
# DApp
cd dapp
npm run build

# Smart Contracts
cd smart-contracts
npx hardhat compile
```

### Deploy

```bash
# Smart Contracts (testnet)
cd smart-contracts
npx hardhat run scripts/deploy.js --network mumbai

# Firebase Functions
cd firebase-functions
firebase deploy --only functions
```

## 🔐 Security

- ไม่มี sensitive data ใน repository
- ใช้ environment variables สำหรับ secrets
- Firestore security rules ตั้งค่าเรียบร้อยแล้ว
- Smart contracts ควรผ่าน audit ก่อน deploy production

## 📞 ติดต่อและสนับสนุน

- **Issues**: [GitHub Issues](https://github.com/T1ADIPT4/meechain-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)

## 📄 License

ดูรายละเอียดใน [LICENSE](./LICENSE)

---

## 🎉 ยินดีต้อนรับสู่ฐาน MeeChain!

MeeBot พร้อมเป็นเพื่อนคู่คิดของคุณในการพัฒนาแล้วครับ! 💙

> "ทุกการเริ่มต้นคือก้าวแรกสู่ความสำเร็จ" - MeeBot
