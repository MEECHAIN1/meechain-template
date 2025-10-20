# MeeChain Template Documentation

Welcome to the MeeChain documentation! This directory contains guides and documentation to help you understand and work with the MeeChain template.

## 📚 Available Documentation

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guidelines for contributing to the MeeChain project
- **[EXTERNAL_MODULES_SETUP.md](EXTERNAL_MODULES_SETUP.md)** - Guide for creating and using external modules

## 🧱 Project Structure

```
meechain-template/
├── dapp/                  # แอปหลัก (Next.js / React)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
│   └── public/
├── meebot/                # ระบบ MeeBot (emotion, voice, persona)
│   ├── engine/
│   ├── prompts/
│   └── voice/
├── smart-contracts/       # สัญญา T2P, MEE, DAO
│   ├── contracts/
│   ├── scripts/
│   └── hardhat.config.ts
├── firebase-functions/    # Badge, Quest, Logging
│   ├── functions/
│   └── firestore.rules
├── external-modules/      # โมดูลที่โหลดจาก contributors
│   ├── smart-contracts/
│   ├── shared-utils/
│   └── app-config/
├── academy/               # เนื้อหาการเรียนรู้
│   ├── lessons/
│   └── quests/
├── docs/                  # คู่มือและเอกสาร
│   ├── README.md
│   ├── CONTRIBUTING.md
│   └── EXTERNAL_MODULES_SETUP.md
└── .github/               # GitHub Actions, issue templates
    ├── workflows/
    └── ISSUE_TEMPLATE.md
```

## 🚀 Quick Start

For quick start instructions, please refer to the main [README.md](../README.md) in the root directory.

## 💡 Need Help?

If you have questions or need assistance:
- Check the documentation files in this directory
- Open an issue on GitHub
- Join our community discussions

MeeBot is here to support you every step of the way! 💙
