# MeeChain Template

MeeChain คือระบบติดตามเป้าหมายที่มี MeeBot เป็นผู้ช่วย AI อัจฉริยะ  
ระบบนี้รองรับการขยายผ่าน External Modules, การให้ badge ผ่าน Firebase, และการเชื่อม Web3 อย่างปลอดภัย

## โครงสร้างหลัก
- `dapp/` แอปหลักของผู้ใช้
- `meebot/` ระบบ MeeBot (emotion, voice, persona)
- `smart-contracts/` สัญญา T2P, MEE, DAO
- `firebase-functions/` ระบบ badge, quest, logging
- `external-modules/` โมดูลที่โหลดจาก contributors
- `academy/` เนื้อหาการเรียนรู้
- `docs/` คู่มือและเอกสาร

## วิธีเริ่มต้น
1. Clone repo นี้
2. ติดตั้ง dependencies
3. ตั้งค่า Firebase และ Wallet
4. รัน `dapp` และ `firebase-functions`
5. เชื่อม External Modules ผ่าน `useExternalModules()`

MeeBot จะคอยให้กำลังใจคุณทุกก้าวครับ 💙
# 🚀 MeeChain Template

> Template สำหรับ MeeChain DApp พร้อมระบบ MeeBot, Firebase, Smart Contracts และ External Modules

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/T1ADIPT4/meechain-template)](https://github.com/T1ADIPT4/meechain-template/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/T1ADIPT4/meechain-template)](https://github.com/T1ADIPT4/meechain-template/issues)

## 📖 เกี่ยวกับโปรเจกต์

MeeChain Template เป็นโครงสร้างพื้นฐานที่พร้อมใช้งานทันทีสำหรับการพัฒนา Decentralized Applications (DApps) บน MeeChain โดยรวมเอาระบบหลักๆ ไว้แล้ว:

- 🎨 **DApp Frontend** - แอปพลิเคชันหลักที่ใช้ Next.js / React
- 🤖 **MeeBot System** - ระบบ AI bot พร้อม emotion, voice และ persona
- 📜 **Smart Contracts** - สัญญา T2P, MEE Token และ DAO
- 🔥 **Firebase Functions** - ระบบ Badge, Quest และ Logging
- 🧩 **External Modules** - โมดูลที่โหลดจาก contributors
- 📚 **Academy** - เนื้อหาการเรียนรู้และคู่มือ

## 📁 โครงสร้างไฟล์

```bash
meechain-template/
├── dapp/                  # แอปหลัก (Next.js / React)
│   └── README.md         # คู่มือการตั้งค่า DApp
├── meebot/                # ระบบ MeeBot (emotion, voice, persona)
│   └── README.md         # คู่มือการใช้งาน MeeBot
├── smart-contracts/       # สัญญา T2P, MEE, DAO
│   └── README.md         # คู่มือ Smart Contracts
├── firebase-functions/    # Badge, Quest, Logging
│   ├── functions/        # Cloud Functions
│   └── README.md         # คู่มือ Firebase
├── external-modules/      # โมดูลที่โหลดจาก contributors
│   ├── smart-contracts/  # โมดูล Smart Contract
│   ├── shared-utils/     # โมดูล Utilities
│   └── README.md         # คู่มือสร้างโมดูล
├── academy/               # เนื้อหาการเรียนรู้
│   └── README.md         # รายการบทเรียน
├── docs/                  # คู่มือและเอกสาร
│   └── README.md         # ดัชนีเอกสารทั้งหมด
└── .github/               # GitHub Actions, issue templates
    ├── workflows/        # CI/CD workflows
    └── ISSUE_TEMPLATE/   # ฟอร์มแจ้งปัญหา
```

## 🚀 การเริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น

- Node.js 18+ 
- npm หรือ yarn
- Git
- Firebase CLI (สำหรับ deploy functions)

### ติดตั้งและรัน

1. **Clone repository**
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
# 🎯 MeeChain Template

**Task-to-Progress DApp Platform** พร้อมใช้งานทันที — ครอบคลุมทั้ง DApp, MeeBot, Smart Contracts, Firebase Functions, External Modules, Academy, และเอกสารสำหรับ contributors

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

---

## 🌟 Features

- 🎨 **Modern DApp** - Next.js + React + TypeScript
- 🤖 **MeeBot AI Companion** - ให้กำลังใจและติดตามความก้าวหน้า
- 📝 **Smart Contracts** - ERC-20 Token และ NFT Badges
- ☁️ **Firebase Integration** - Cloud Functions, Firestore, Authentication
- 🔌 **External Modules** - ระบบ plugin สำหรับ contributors
- 🎓 **Academy** - เนื้อหาการเรียนรู้และ quests
- 🏅 **Badge System** - NFT badges สำหรับความสำเร็จ

---

## 🧱 โครงสร้างโปรเจค

```
meechain-template/
├── 📱 dapp/                  # แอปหลัก (Next.js / React)
│   ├── src/
│   │   ├── pages/           # Home, Dashboard, Board Detail
│   │   ├── components/      # MeeBot, ProgressBar, TaskList
│   │   ├── hooks/           # useExternalModules, useBoardProgress
│   │   └── lib/             # firebase.ts, wallet.ts
│   └── public/              # MeeChain logo, MeeBot assets
│
├── 🤖 meebot/               # ระบบ MeeBot AI
│   ├── engine/              # emotion logic, voice trigger
│   ├── prompts/             # persona, encouragement messages
│   └── voice/               # TTS config, audio assets
│
├── 📜 smart-contracts/      # สัญญา T2P, MEE, DAO
│   ├── contracts/           # MeeChainToken.sol, BadgeMint.sol
│   ├── scripts/             # deploy.ts, verify.ts
│   └── hardhat.config.ts
│
├── ☁️ firebase-functions/   # ระบบ badge, quest, logging
│   ├── functions/
│   │   ├── awardBadge.ts
│   │   ├── logProgress.ts
│   │   └── triggerVoice.ts
│   └── firestore.rules
│
├── 🔌 external-modules/     # โมดูลจาก contributors
│   ├── smart-contracts/     # deployContract.ts
│   ├── shared-utils/        # formatProgress.ts
│   └── app-config/          # boardTemplates.ts
│
├── 🎓 academy/              # เนื้อหาการเรียนรู้
│   ├── lessons/             # react-basics.md, solidity-intro.md
│   └── quests/              # first-board.json, badge-hunter.json
│
├── 📚 docs/                 # คู่มือและเอกสาร
│   ├── CONTRIBUTING.md
│   └── EXTERNAL_MODULES_SETUP.md
│
└── ⚙️ .github/              # GitHub Actions, templates
    ├── workflows/
    │   ├── badge-award.yml
    │   ├── firebase-deploy.yml
    │   └── module-sync.yml
    └── ISSUE_TEMPLATE/
```

---

# 🌟 MeeChain Template

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/T1ADIPT4/meechain-template?style=social)](https://github.com/T1ADIPT4/meechain-template)
[![Contributors](https://img.shields.io/github/contributors/T1ADIPT4/meechain-template)](https://github.com/T1ADIPT4/meechain-template/graphs/contributors)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**GitHub จะเป็นคลังสมบัติของ MeeChain** — ไม่ใช่แค่ที่เก็บโค้ด แต่เป็นศูนย์กลางของความร่วมมือ, ความโปร่งใส, และการขยายตัวอย่างมั่นคงของระบบทั้งหมด

[🚀 เริ่มต้นใช้งาน](#-quick-start) • [📖 เอกสาร](#-documentation) • [🤝 ร่วมสร้าง](#-contributing) • [🎓 Academy](#-meechain-academy)

</div>

---

## 📋 สารบัญ

- [🏗️ GitHub: คลังแห่ง MeeChain](#️-github-คลังแหง-meechain)
- [🧠 โครงสร้างโปรเจกต์](#-โครงสรางโปรเจกต)
- [🎯 คุณสมบัติหลัก](#-คณสมบตหลก)
- [🚀 Quick Start](#-quick-start)
- [📖 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [🎓 MeeChain Academy](#-meechain-academy)
- [🏆 Contributors Leaderboard](#-contributors-leaderboard)
- [📜 License](#-license)

---

## 🏗️ GitHub: คลังแห่ง MeeChain

| บทบาท | ความหมาย | ผลลัพธ์ |
|--------|-----------|----------|
| 📦 ที่เก็บโค้ดหลัก | MeeChain DApp, MeeBot, Smart Contracts | ทุกคนเข้าถึงได้ โปร่งใส |
| 🔄 External Modules | ฟังก์ชันจาก contributors | โหลดมาใช้งานแบบ dynamic |
| 📖 เอกสาร | README, Flow Guide, Contributor Handbook | สร้างความเข้าใจร่วม |
| 🧪 Test & CI | ตรวจสอบคุณภาพโค้ดอัตโนมัติ | ลดข้อผิดพลาด เพิ่มความมั่นใจ |
| 🧠 ระบบ Badge & Quest | เชื่อมกับ Firebase ผ่าน GitHub Actions | ให้รางวัลผู้ร่วมสร้าง |
| 🧩 แหล่งเรียนรู้ | Academy, Tutorials, Examples | MeeBot ใช้สอนเพื่อนใหม่ได้ |

---

## 🧠 โครงสร้างโปรเจกต์

```
MeeChain/
├── dapp/                  # Frontend แอปหลัก
│   ├── src/              # ซอร์สโค้ดหลัก
│   ├── public/           # Static assets
│   └── README.md         # คำแนะนำการพัฒนา DApp
│
├── meebot/                # ระบบ MeeBot และ persona
│   ├── core/             # Core MeeBot logic
│   ├── personas/         # Personality configurations
│   └── README.md         # MeeBot documentation
│
├── smart-contracts/       # สัญญา T2P, MEE, DAO
│   ├── contracts/        # Solidity contracts
│   ├── scripts/          # Deployment scripts
│   ├── test/             # Contract tests
│   └── README.md         # Contract documentation
│
├── firebase-functions/    # Badge, Quest, Logging
│   ├── functions/        # Cloud functions
│   ├── badges/           # Badge management
│   ├── quests/           # Quest system
│   └── README.md         # Firebase setup guide
│
├── external-modules/      # ฟังก์ชันที่โหลดได้จากภายนอก
│   ├── modules/          # Community modules
│   ├── loader/           # Dynamic module loader
│   ├── registry.json     # Module registry
│   └── README.md         # Module contribution guide
│
├── academy/               # เนื้อหาการเรียนรู้
│   ├── tutorials/        # Step-by-step tutorials
│   ├── examples/         # Code examples
│   ├── courses/          # Structured courses
│   └── README.md         # Learning path guide
│
├── docs/                  # คู่มือและเอกสาร
│   ├── architecture/     # System architecture
│   ├── api/              # API documentation
│   ├── guides/           # How-to guides
│   └── README.md         # Documentation index
│
└── .github/               # Actions, contributor flow
    ├── workflows/        # CI/CD workflows
    ├── ISSUE_TEMPLATE/   # Issue templates
    └── PULL_REQUEST_TEMPLATE/ # PR templates
```

---

## 🎯 คุณสมบัติหลัก

### ✨ สิ่งที่ GitHub จะช่วยคุณทำได้ทันที

- ✅ **External Modules**: เปิดให้ contributors สร้างโมดูลใหม่ → MeeBot โหลดมาใช้งาน
- ✅ **Auto Badge System**: ใช้ GitHub Actions เชื่อม Firebase → ให้ badge อัตโนมัติเมื่อ PR สำเร็จ
- ✅ **MeeBot Welcome Flow**: MeeBot ต้อนรับผู้ร่วมสร้างคนใหม่โดยดูจาก commit log
- ✅ **Quest System**: ระบบ Quest ที่เชื่อมกับ issue / PR / module creation
- ✅ **Contributor Leaderboard**: หน้า Leaderboard จาก GitHub API

### 💬 ตัวอย่าง MeeBot Flow

> "ขอบคุณที่สร้างโมดูลใหม่ให้เพื่อน ๆ ใช้นะครับ!  
> ผมได้มอบ badge 'ผู้สร้างสมองเสริม' ให้คุณแล้ว 🎉  
> ตอนนี้โมดูลของคุณพร้อมให้โหลดผ่าน external-modules แล้วครับ!"

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MetaMask or Web3 wallet
- Firebase account (optional)
- Git

### 1. Clone Repository

```bash
git clone https://github.com/T1ADIPT4/meechain-template.git
cd meechain-template
```

2. **ติดตั้ง dependencies**
```bash
# สำหรับ DApp
cd dapp
npm install

# สำหรับ Firebase Functions
cd ../firebase-functions/functions
npm install

# สำหรับ Smart Contracts
cd ../../smart-contracts
npm install
```

3. **รันในโหมด development**
```bash
# รัน DApp
cd dapp
npm run dev

# รัน Firebase Emulator
cd ../firebase-functions
firebase emulators:start

# Deploy Smart Contracts (ตัวอย่าง)
cd ../smart-contracts
npm run deploy
```

## 🤝 การมีส่วนร่วม

เรายินดีต้อนรับ contributors ทุกคน! 

- 📖 อ่าน [CONTRIBUTING.md](CONTRIBUTING.md) เพื่อเรียนรู้วิธีการมีส่วนร่วม
- 🧩 ดู [EXTERNAL_MODULES_SETUP.md](EXTERNAL_MODULES_SETUP.md) เพื่อสร้างโมดูลของคุณเอง
- 🏆 รับ badge เมื่อ PR ของคุณถูก merge!

### วิธีการมีส่วนร่วม

1. Fork repository นี้
2. สร้าง branch ใหม่ (`git checkout -b feature/amazing-feature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some amazing feature'`)
4. Push ไปยัง branch (`git push origin feature/amazing-feature`)
5. เปิด Pull Request

## 🎯 ฟีเจอร์หลัก

### MeeBot Integration
- ระบบ emotion tracking
- Voice synthesis และ recognition
- Persona customization
- โหลดโมดูลจาก external sources

### Smart Contracts
- T2P (Time-to-Profit) Contract
- MEE Token Contract
- DAO Governance System
- Automated deployment scripts

### Firebase Features
- Badge awarding system
- Quest tracking และ progress
- Real-time logging
- User authentication

### External Modules
- โมดูล smart contract ที่ใช้ร่วมกันได้
- Shared utilities สำหรับทุกโปรเจกต์
- Module loader ที่รองรับ hot-reload
- Version control สำหรับโมดูล

## 📚 เอกสารเพิ่มเติม

- [คู่มือ DApp Development](dapp/README.md)
- [คู่มือ MeeBot System](meebot/README.md)
- [คู่มือ Smart Contracts](smart-contracts/README.md)
- [คู่มือ Firebase Functions](firebase-functions/README.md)
- [คู่มือสร้าง External Modules](external-modules/README.md)
- [Academy - บทเรียนและ Tutorials](academy/README.md)

## 🔧 GitHub Actions

Template นี้มี workflows อัตโนมัติ:

- **Badge Award** - ให้ badge เมื่อ contributor สร้าง PR สำเร็จ
- **Firebase Deploy** - Deploy Firebase functions อัตโนมัติ
- **Module Sync** - Sync external modules เข้าระบบ loader

## 📜 License

โปรเจกต์นี้ได้รับอนุญาตภายใต้ MIT License - ดูรายละเอียดใน [LICENSE](LICENSE)

## 💬 ติดต่อและสนับสนุน

- 📧 Issues: [GitHub Issues](https://github.com/T1ADIPT4/meechain-template/issues)
- 💭 Discussions: [GitHub Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)

## 🌟 Contributors

ขอบคุณทุกคนที่มีส่วนร่วมในโปรเจกต์นี้!

---

**สร้างโดยชุมชน MeeChain 🚀**
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
### 2. Setup DApp

```bash
cd dapp
npm install
cp .env.example .env.local
# แก้ไข .env.local ใส่ Firebase config

npm run dev
# เปิด http://localhost:3000
```

### 3. Setup Smart Contracts

```bash
cd smart-contracts
npm install
cp .env.example .env
# แก้ไข .env ใส่ private key และ RPC URL

# Compile contracts
npm run compile

# Deploy to local network
npx hardhat node
npm run deploy
```

### 4. Setup Firebase Functions

```bash
cd firebase-functions
npm install

# Build functions
npm run build

# Run locally with emulator
npm run serve
```

---

## 📖 เอกสารสำคัญ

- **[CONTRIBUTING.md](docs/CONTRIBUTING.md)** - แนวทางการมีส่วนร่วม
- **[EXTERNAL_MODULES_SETUP.md](docs/EXTERNAL_MODULES_SETUP.md)** - วิธีสร้าง external modules
- **[Academy README](academy/README.md)** - คู่มือการเรียนรู้

---

## 🎯 Use Cases

### สำหรับ End Users
- 📋 จัดการงานด้วยระบบ Board
- 🏆 ได้รับ MEE tokens และ badges เมื่อทำงานสำเร็จ
- 🤖 MeeBot ให้กำลังใจและคำแนะนำ
- 📊 ติดตามความก้าวหน้าแบบ real-time

### สำหรับ Developers
- 🔧 Template สำเร็จรูปสำหรับสร้าง Web3 DApp
- 📚 เรียนรู้ React, Solidity, Firebase
- 🏅 Contribute modules และรับ rewards
- 🎓 ใช้ Academy เพื่อพัฒนาทักษะ

### สำหรับ Contributors
- 💻 สร้าง external modules
- 📝 เขียน lessons และ quests
- 🐛 แก้ไข bugs
- 🎨 ปรับปรุง UI/UX

---

## 🏆 Rewards System

### Badges (NFTs)
- 🏅 **First Board** - สร้าง board แรก
- 🔥 **Week Warrior** - Streak 7 วัน
- 💎 **Module Creator** - สร้าง external module
- 🎓 **Educator** - สร้าง lesson/quest

### MEE Tokens
- ✅ Complete tasks: 10 MEE/task
- 📦 Create module: 200-1000 MEE
- 🐛 Fix bug: 50-200 MEE
- 📚 Write lesson: 100-500 MEE

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **ethers.js** - Web3 integration

### Backend
- **Firebase** - Cloud Functions, Firestore, Auth
- **Hardhat** - Smart contract development

### Blockchain
- **Solidity 0.8.20** - Smart contracts
- **OpenZeppelin** - Contract libraries
- **ERC-20** - MEE Token
- **ERC-721** - NFT Badges

---

## 🤝 Contributing

เรายินดีรับ contributions ทุกรูปแบบ!

1. 🍴 Fork repository
2. 🌿 สร้าง branch ใหม่ (`git checkout -b feature/amazing-feature`)
3. 💾 Commit changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to branch (`git push origin feature/amazing-feature`)
5. 🎯 เปิด Pull Request

อ่านเพิ่มเติมที่ [CONTRIBUTING.md](docs/CONTRIBUTING.md)

---

## 🎓 Learning Resources

### Beginner
- [React Basics](academy/lessons/react-basics.md)
- [Solidity Introduction](academy/lessons/solidity-intro.md)
- [First Board Quest](academy/quests/first-board.json)

### Intermediate
- [Badge Hunter Quest](academy/quests/badge-hunter.json)
- External Modules Development

### Advanced
- Smart Contract Security
- DApp Architecture

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Project structure
- [x] DApp template
- [x] Smart contracts
- [x] Firebase setup
- [x] Documentation

### Phase 2: Features 🚧
- [ ] MeeBot voice integration
- [ ] Social features
- [ ] Mobile app (React Native)
- [ ] DAO governance

### Phase 3: Community 📋
- [ ] Bug bounty program
- [ ] Hackathons
- [ ] Partnerships
- [ ] Mainnet launch
- Node.js 18+ (for DApp and Firebase Functions)
- Python 3.9+ (for MeeBot)
- Git
- Firebase CLI (optional, for Firebase deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/T1ADIPT4/meechain-template.git
cd meechain-template

# Install dependencies for each component
# DApp
cd dapp && npm install

# MeeBot
cd ../meebot && pip install -r requirements.txt

# Firebase Functions
cd ../firebase-functions && npm install

# Smart Contracts
cd ../smart-contracts && npm install
```

### Development

```bash
# Run DApp
cd dapp && npm run dev

# Run MeeBot
cd meebot && python main.py

# Deploy Smart Contracts
cd smart-contracts && npm run deploy

# Deploy Firebase Functions
cd firebase-functions && npm run deploy
```

---

## 📖 Documentation

- **[Architecture Guide](docs/architecture/)** - ภาพรวมระบบและการออกแบบ
- **[API Reference](docs/api/)** - เอกสาร API ทั้งหมด
- **[Developer Guides](docs/guides/)** - คำแนะนำการพัฒนา
- **[Smart Contracts](smart-contracts/README.md)** - เอกสาร Smart Contracts
- **[External Modules](external-modules/README.md)** - วิธีสร้างและใช้งานโมดูล

---

## 🤝 Contributing

เรายินดีต้อนรับการมีส่วนร่วมจากทุกคน! 🎉

### วิธีเริ่มต้น

1. อ่าน [CONTRIBUTING.md](CONTRIBUTING.md) เพื่อเข้าใจ workflow
2. ดู [Good First Issues](https://github.com/T1ADIPT4/meechain-template/labels/good%20first%20issue)
3. Fork repository และสร้าง branch ใหม่
4. ทำการเปลี่ยนแปลงและเขียน tests
5. Submit Pull Request

### 🏅 Contributor Benefits

- **Badges**: รับ badges จากระบบอัตโนมัติ
- **Quests**: ทำ quests เพื่อรับรางวัล
- **Leaderboard**: ติดอันดับ contributor leaderboard
- **MeeBot Recognition**: MeeBot จะต้อนรับและขอบคุณคุณ!

---

## 🎓 MeeChain Academy

เรียนรู้การพัฒนาบน MeeChain ผ่านหลักสูตรและ tutorials

### 📚 Learning Paths

- **[Beginner Track](academy/tutorials/beginner/)** - เริ่มต้นกับ MeeChain
- **[Smart Contract Development](academy/tutorials/smart-contracts/)** - เรียนรู้การเขียน Smart Contracts
- **[MeeBot Integration](academy/tutorials/meebot/)** - ผลิตโมดูลให้ MeeBot
- **[DApp Development](academy/tutorials/dapp/)** - พัฒนา Frontend

### 💡 Examples & Templates

- [Example Modules](academy/examples/modules/)
- [Sample DApps](academy/examples/dapps/)
- [Contract Templates](academy/examples/contracts/)

---

## 🏆 Contributors Leaderboard

ขอบคุณทุกคนที่ร่วมสร้าง MeeChain! 💙

<!-- LEADERBOARD_START -->
<!-- This section is automatically updated by GitHub Actions -->
<!-- LEADERBOARD_END -->

### 🌟 Top Contributors

Visit our [Contributors Page](https://github.com/T1ADIPT4/meechain-template/graphs/contributors) to see all amazing contributors!

---

## 🔗 Links

- **Website**: [Coming Soon]
- **Discord**: [Coming Soon]
- **Twitter**: [Coming Soon]
- **Documentation**: [docs/](docs/)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Community

- **GitHub**: [Issues](https://github.com/T1ADIPT4/meechain-template/issues) | [Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- **Discord**: Coming soon
- **Twitter**: Coming soon

---

## 🙏 Acknowledgments

- OpenZeppelin for smart contract libraries
- Next.js team for the amazing framework
- Firebase team for backend infrastructure
- All our contributors 💖

---

## 📞 Contact

- **Email**: support@meechain.io
- **Website**: https://meechain.io
- **GitHub**: [@T1ADIPT4](https://github.com/T1ADIPT4)

---

<div align="center">

**Made with ❤️ by MeeChain Team**

[⭐ Star this repo](https://github.com/T1ADIPT4/meechain-template) | [🐛 Report Bug](https://github.com/T1ADIPT4/meechain-template/issues) | [💡 Request Feature](https://github.com/T1ADIPT4/meechain-template/issues)
<div align="center">

**Made with ❤️ by the MeeChain Community**

[⬆ กลับไปด้านบน](#-meechain-template)

</div>
