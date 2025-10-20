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
