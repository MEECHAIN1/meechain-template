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
