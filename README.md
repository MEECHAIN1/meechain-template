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

</div>
