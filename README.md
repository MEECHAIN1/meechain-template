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

<div align="center">

**Made with ❤️ by the MeeChain Community**

[⬆ กลับไปด้านบน](#-meechain-template)

</div>
