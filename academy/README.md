# Academy - Learning Content

เนื้อหาการเรียนรู้และภารกิจสำหรับ MeeChain

## 📁 โครงสร้าง

```
academy/
├── lessons/       # บทเรียนต่างๆ
└── quests/        # ภารกิจการเรียนรู้
```

## 📚 ภาพรวม

Academy เป็นส่วนสำหรับเนื้อหาการเรียนรู้ที่ช่วยให้ผู้ใช้เข้าใจและใช้งาน MeeChain ได้อย่างมีประสิทธิภาพ

## 📖 Lessons (บทเรียน)

บทเรียนที่สอนเกี่ยวกับ:
- การใช้งาน MeeChain
- Web3 และ Blockchain
- Smart Contracts
- การสร้าง DApp
- การใช้ MeeBot

### โครงสร้างบทเรียน

```
lessons/
├── 01-getting-started/
│   ├── README.md
│   ├── content.md
│   └── assets/
├── 02-web3-basics/
│   ├── README.md
│   ├── content.md
│   └── assets/
└── 03-smart-contracts/
    ├── README.md
    ├── content.md
    └── assets/
```

### ตัวอย่างบทเรียน

```markdown
# Lesson 1: Getting Started with MeeChain

## เป้าหมาย
- เข้าใจว่า MeeChain คืออะไร
- สร้างบัญชีและเชื่อม wallet
- ทำ quest แรกสำเร็จ

## เนื้อหา

### 1. MeeChain คืออะไร?
MeeChain เป็นแพลตฟอร์มติดตามเป้าหมาย...

### 2. การสร้างบัญชี
1. ไปที่ app.meechain.io
2. คลิก "Connect Wallet"
3. เลือก wallet ที่ต้องการ

## แบบฝึกหัด
- [ ] สร้างบัญชี
- [ ] เชื่อม wallet
- [ ] ทำ quest แรก

## เพิ่มเติม
- [MeeBot Guide](../meebot/)
- [Web3 Basics](../02-web3-basics/)
```

## 🎯 Quests (ภารกิจ)

ภารกิจที่ผู้ใช้ต้องทำเพื่อเรียนรู้และได้รับรางวัล

### โครงสร้าง Quests

```
quests/
├── beginner/
│   ├── first-steps.json
│   ├── wallet-setup.json
│   └── first-transaction.json
├── intermediate/
│   ├── create-dao.json
│   └── deploy-contract.json
└── advanced/
    ├── contribute-module.json
    └── audit-contract.json
```

### ตัวอย่าง Quest

```json
{
  "id": "first-steps",
  "title": "First Steps",
  "description": "เริ่มต้นใช้งาน MeeChain",
  "difficulty": "beginner",
  "rewards": {
    "points": 100,
    "mee": 10,
    "badge": "first-quest"
  },
  "requirements": [
    {
      "type": "connect-wallet",
      "description": "เชื่อมต่อ wallet"
    },
    {
      "type": "complete-profile",
      "description": "กรอกข้อมูลโปรไฟล์"
    },
    {
      "type": "read-lesson",
      "lessonId": "01-getting-started",
      "description": "อ่านบทเรียนแรก"
    }
  ],
  "meebotMessage": "ยินดีด้วยครับ! คุณทำ quest แรกสำเร็จแล้ว! 🎉"
}
```

## 🎓 Learning Paths

เส้นทางการเรียนรู้ที่แนะนำ:

### 🌱 Beginner Path
1. Getting Started
2. Web3 Basics
3. Connect Wallet
4. Complete First Quest

### 🌿 Intermediate Path
1. Smart Contracts Basics
2. Deploy Your First Contract
3. Create a DAO
4. Use External Modules

### 🌳 Advanced Path
1. Contribute External Module
2. Audit Smart Contracts
3. Optimize Gas Usage
4. Build DApp Feature

## 📊 Progress Tracking

ติดตามความก้าวหน้าของผู้เรียน:

```javascript
{
  "userId": "user123",
  "lessonsCompleted": [
    "01-getting-started",
    "02-web3-basics"
  ],
  "questsCompleted": [
    "first-steps",
    "wallet-setup"
  ],
  "currentPath": "intermediate",
  "totalPoints": 500,
  "badges": ["first-quest", "web3-learner"]
}
```

## 🎖️ Achievements

ความสำเร็จที่ได้รับจากการเรียน:

- **Beginner Badge** 🎯 - ทำ beginner quests ครบ
- **Web3 Expert** 🌐 - ผ่านบทเรียน Web3 ทั้งหมด
- **Smart Contract Master** 📜 - Deploy contract สำเร็จ
- **Community Teacher** 🎓 - สอนคนอื่น 10 คน
- **Module Creator** 🔧 - สร้าง external module

## ✨ การสร้างเนื้อหาใหม่

### สร้างบทเรียนใหม่

1. สร้างโฟลเดอร์ใน `lessons/`
2. เพิ่มไฟล์ `README.md` และ `content.md`
3. เพิ่ม assets ที่จำเป็น
4. ทดสอบเนื้อหา
5. ส่ง Pull Request

### สร้าง Quest ใหม่

1. สร้างไฟล์ JSON ใน `quests/`
2. กำหนด requirements
3. ตั้งค่า rewards
4. เขียน MeeBot message
5. ทดสอบ quest
6. ส่ง Pull Request

## 🤝 การมีส่วนร่วม

เรายินดีรับเนื้อหาการเรียนรู้จากทุกคน!

- แปลเนื้อหาเป็นภาษาอื่น
- สร้างบทเรียนใหม่
- ออกแบบ quests
- ปรับปรุงเนื้อหาเดิม

ดูรายละเอียดที่ [docs/CONTRIBUTING.md](../docs/CONTRIBUTING.md)

## 📚 เพิ่มเติม

- [MeeChain Documentation](../docs/)
- [Smart Contracts Guide](../smart-contracts/)
- [DApp Development](../dapp/)

---

> "การเรียนรู้ไม่มีวันสิ้นสุด ผมจะเป็นเพื่อนร่วมทางของคุณครับ" - MeeBot 💙
# 📚 MeeChain Academy

ศูนย์รวมความรู้และบทเรียนสำหรับการพัฒนาบน MeeChain

## 🎯 เป้าหมาย

MeeChain Academy เป็นแหล่งเรียนรู้ที่ครบครันสำหรับ:
- ผู้เริ่มต้นที่อยากเข้าใจ blockchain
- นักพัฒนาที่ต้องการสร้าง DApp
- Contributors ที่ต้องการมีส่วนร่วม

## 📖 หลักสูตร

### 🌟 ระดับเริ่มต้น (Beginner)

#### 1. Blockchain Basics
- [บทที่ 1: Blockchain คืออะไร?](beginner/01-blockchain-basics.md)
- [บทที่ 2: Smart Contracts พื้นฐาน](beginner/02-smart-contracts-intro.md)
- [บทที่ 3: Wallets และ Transactions](beginner/03-wallets-transactions.md)

#### 2. MeeChain Introduction
- [บทที่ 4: MeeChain Ecosystem](beginner/04-meechain-ecosystem.md)
- [บทที่ 5: MEE Token](beginner/05-mee-token.md)
- [บทที่ 6: T2P System](beginner/06-t2p-system.md)

### 🚀 ระดับกลาง (Intermediate)

#### 3. DApp Development
- [บทที่ 7: ตั้งค่าสภาพแวดล้อม](intermediate/07-setup-environment.md)
- [บทที่ 8: สร้าง DApp แรก](intermediate/08-first-dapp.md)
- [บทที่ 9: เชื่อมต่อ Wallet](intermediate/09-wallet-integration.md)
- [บทที่ 10: Smart Contract Integration](intermediate/10-contract-integration.md)

#### 4. Smart Contract Development
- [บทที่ 11: Solidity Basics](intermediate/11-solidity-basics.md)
- [บทที่ 12: เขียน Smart Contract](intermediate/12-writing-contracts.md)
- [บทที่ 13: Testing Contracts](intermediate/13-testing-contracts.md)
- [บทที่ 14: Deploy Contracts](intermediate/14-deploying-contracts.md)

### 🏆 ระดับสูง (Advanced)

#### 5. Advanced Topics
- [บทที่ 15: Gas Optimization](advanced/15-gas-optimization.md)
- [บทที่ 16: Security Best Practices](advanced/16-security.md)
- [บทที่ 17: DAO Implementation](advanced/17-dao-implementation.md)
- [บทที่ 18: Cross-chain Integration](advanced/18-cross-chain.md)

#### 6. MeeBot Development
- [บทที่ 19: MeeBot Architecture](advanced/19-meebot-architecture.md)
- [บทที่ 20: Emotion System](advanced/20-emotion-system.md)
- [บทที่ 21: Voice Integration](advanced/21-voice-integration.md)
- [บทที่ 22: Module Development](advanced/22-module-development.md)

## 🎓 Quest System

เรียนรู้พร้อมรับรางวัล! แต่ละบทเรียนมี Quest ให้ทำ

### ตัวอย่าง Quest

```typescript
{
  "questId": "blockchain-basics-quest",
  "title": "เรียนรู้ Blockchain Basics",
  "description": "เข้าใจพื้นฐาน blockchain และ smart contracts",
  "tasks": [
    {
      "id": "read-article",
      "title": "อ่านบทความ Blockchain คืออะไร?",
      "type": "reading",
      "points": 10
    },
    {
      "id": "quiz",
      "title": "ทำแบบทดสอบ",
      "type": "quiz",
      "points": 20
    },
    {
      "id": "exercise",
      "title": "ทำแบบฝึกหัด",
      "type": "exercise",
      "points": 30
    }
  ],
  "totalPoints": 60,
  "badge": "blockchain-beginner",
  "estimatedTime": "2 hours"
}
```

## 🏅 Badges และ Rewards

เมื่อเรียนจบแต่ละ level คุณจะได้รับ:

### Beginner Level
- 🌟 **Blockchain Explorer** - จบบทที่ 1-6
- 💎 **MEE Starter** - เข้าใจระบบ MEE Token

### Intermediate Level
- 🚀 **DApp Developer** - สร้าง DApp สำเร็จ
- 📜 **Smart Contract Writer** - เขียน contract ได้

### Advanced Level
- 🏆 **Gas Optimizer** - Optimize gas ได้
- 🔒 **Security Expert** - เข้าใจ security
- 🤖 **MeeBot Creator** - พัฒนา MeeBot ได้

## 📝 แบบฝึกหัด

### Beginner Exercises
1. สร้าง Wallet แรกของคุณ
2. Transfer MEE Token
3. อ่าน Transaction บน Explorer

### Intermediate Exercises
1. สร้าง Simple DApp
2. เขียน ERC20 Contract
3. Deploy Contract to Testnet

### Advanced Exercises
1. สร้าง DAO Contract
2. Optimize Gas Usage
3. สร้าง MeeBot Module

## 🎬 Video Tutorials

- [Introduction to MeeChain](https://youtube.com/watch?v=...)
- [Building Your First DApp](https://youtube.com/watch?v=...)
- [Smart Contract Development](https://youtube.com/watch?v=...)
- [MeeBot Integration](https://youtube.com/watch?v=...)
# MeeChain Academy

ศูนย์การเรียนรู้สำหรับผู้ใช้ MeeChain - ตั้งแต่เริ่มต้นจนถึงขั้นสูง

## 📚 Lessons (บทเรียน)

### Beginner

1. **[React Basics](./lessons/react-basics.md)** ⭐
   - เรียนรู้พื้นฐาน React
   - Components, State, Hooks
   - Event handling
   - เวลา: 2-3 ชั่วโมง

2. **[Solidity Introduction](./lessons/solidity-intro.md)** ⭐
   - เขียน Smart Contracts
   - Data types, Functions
   - Events, Mappings
   - เวลา: 3-4 ชั่วโมง

### Intermediate

3. **Web3 Integration** (Coming soon)
   - เชื่อม React กับ Web3
   - ใช้ ethers.js
   - Wallet connections

4. **Firebase Integration** (Coming soon)
   - Cloud Functions
   - Firestore
   - Authentication

### Advanced

5. **Smart Contract Security** (Coming soon)
   - Common vulnerabilities
   - Best practices
   - Auditing

6. **DApp Architecture** (Coming soon)
   - Scalable design
   - State management
   - Performance optimization

## 🎯 Quests (ภารกิจ)

### Beginner Quests

1. **[First Board](./quests/first-board.json)** 🎯
   - สร้าง board แรก
   - ใช้งานพื้นฐาน
   - รับ badge แรก
   - รางวัล: 50 MEE + First Board badge

2. **[Badge Hunter](./quests/badge-hunter.json)** 🏅
   - สะสม badges
   - เรียนรู้ระบบ
   - Active participation
   - รางวัล: 200 MEE + Badge Hunter badge

### Intermediate Quests

3. **Contributor Pro** (Coming soon)
   - Contribute modules
   - Code review
   - Community engagement

4. **Smart Contract Master** (Coming soon)
   - Deploy contracts
   - Verify on explorer
   - Interact with contracts

### Advanced Quests

5. **DApp Builder** (Coming soon)
   - Build full DApp
   - Integrate all features
   - Deploy to production

## 🎓 Learning Path

### Path 1: Frontend Developer

```
React Basics → Web3 Integration → DApp Architecture
    ↓              ↓                    ↓
First Board → Badge Hunter → DApp Builder
```

### Path 2: Smart Contract Developer

```
Solidity Intro → Smart Contract Security → Advanced Solidity
      ↓                  ↓                       ↓
First Board → Smart Contract Master → Auditor Badge
```

### Path 3: Full Stack Web3 Developer

```
React Basics + Solidity Intro
         ↓
Web3 Integration + Firebase Integration
         ↓
DApp Architecture + Smart Contract Security
         ↓
   DApp Builder Quest
```

## 🏆 Rewards System

### Badges
- 🏅 **First Board** - สร้าง board แรก
- 🎯 **Task Master** - ทำงานครบ 10 tasks
- 🔥 **Week Warrior** - Streak 7 วัน
- 💎 **Badge Hunter** - สะสม 5+ badges
- 🚀 **Contributor** - Contribute code
- 🌟 **Master Builder** - Deploy DApp

### MEE Tokens
- Complete lessons: 10-50 MEE
- Complete quests: 50-500 MEE
- Contribute modules: 100-1000 MEE
- Help community: 10-100 MEE

### Experience Points (XP)
- Lessons: 50-200 XP
- Quests: 100-1000 XP
- Contributions: 500-5000 XP
- Level up every 1000 XP

## 📖 How to Use Academy

### 1. เลือก Learning Path
- กำหนดเป้าหมายว่าต้องการเป็นอะไร
- เลือก path ที่เหมาะสม

### 2. เรียนตาม Lessons
- อ่านบทเรียนทีละบท
- ทำแบบฝึกหัด
- สอบถามใน Discussions ถ้าติดปัญหา

### 3. ทำ Quests
- เริ่มจาก beginner quests
- ทำตามขั้นตอน
- รับ rewards

### 4. Practice & Build
- ฝึกทำโปรเจคเล็กๆ
- Contribute กลับชุมชน
- สร้าง portfolio

## 🤝 Community Learning

### Study Groups
- Discord study sessions
- Weekly challenges
- Peer reviews

### Mentorship
- ขอคำแนะนำจาก mentors
- ช่วยเหลือ newcomers
- แชร์ความรู้

### Contributions
- เขียน lessons ใหม่
- สร้าง quests
- แปลเอกสาร

## 📝 Certification (Coming soon)

- MeeChain Certified Developer
- MeeChain Certified Smart Contract Auditor
- MeeChain Certified Contributor

## 🔗 Resources

- [Official Docs](../docs/)
- [GitHub Repository](https://github.com/T1ADIPT4/meechain-template)
- [Discord Community](#)
- [Twitter](#)

## 🆘 Need Help?

- 💬 Ask in Discord
- 🐛 Open an issue on GitHub
- 📧 Email: support@meechain.io
- 🤖 Chat with MeeBot

---

**Ready to learn?** Start with [React Basics](./lessons/react-basics.md) or jump right into [First Board Quest](./quests/first-board.json)! 🚀
# 🎓 MeeChain Academy

ศูนย์การเรียนรู้สำหรับ MeeChain ecosystem

## 📋 Overview

MeeChain Academy เป็นแหล่งเรียนรู้ที่ครอบคลุม:
- Tutorials สำหรับผู้เริ่มต้น
- หลักสูตรขั้นสูง
- ตัวอย่างโค้ด
- Best practices
- Case studies

## 📚 Learning Paths

### 🌱 Beginner Track

เหมาะสำหรับผู้ที่เพิ่งเริ่มต้น

**Prerequisites:**
- ความรู้พื้นฐานเกี่ยวกับ programming
- ความสนใจใน blockchain

**Courses:**
1. [Introduction to MeeChain](tutorials/beginner/01-introduction.md)
2. [Setting Up Your Environment](tutorials/beginner/02-setup.md)
3. [Your First Contribution](tutorials/beginner/03-first-contribution.md)
4. [Understanding External Modules](tutorials/beginner/04-external-modules.md)
5. [Using MeeBot](tutorials/beginner/05-meebot.md)

**Duration:** 2-3 hours

### 🚀 Smart Contract Development

เรียนรู้การพัฒนา Smart Contracts

**Prerequisites:**
- JavaScript/TypeScript
- Blockchain basics
- Solidity fundamentals

**Courses:**
1. [Solidity Basics](tutorials/smart-contracts/01-solidity-basics.md)
2. [MEE Token Contract](tutorials/smart-contracts/02-mee-token.md)
3. [T2P System](tutorials/smart-contracts/03-t2p-system.md)
4. [DAO Governance](tutorials/smart-contracts/04-dao-governance.md)
5. [Testing & Deployment](tutorials/smart-contracts/05-testing-deployment.md)

**Duration:** 8-10 hours

### 🤖 MeeBot Integration

สร้างและใช้งาน MeeBot modules

**Prerequisites:**
- Python basics
- API understanding
- Natural language processing (helpful)

**Courses:**
1. [MeeBot Architecture](tutorials/meebot/01-architecture.md)
2. [Creating Your First Module](tutorials/meebot/02-first-module.md)
3. [Advanced Module Development](tutorials/meebot/03-advanced-modules.md)
4. [Persona Customization](tutorials/meebot/04-personas.md)
5. [Deploying MeeBot](tutorials/meebot/05-deployment.md)

**Duration:** 6-8 hours

### 🎨 DApp Development

พัฒนา frontend application

**Prerequisites:**
- React/Next.js
- Web3 basics
- UI/UX principles

**Courses:**
1. [React & Web3 Setup](tutorials/dapp/01-setup.md)
2. [Wallet Integration](tutorials/dapp/02-wallet-integration.md)
3. [Smart Contract Interaction](tutorials/dapp/03-contract-interaction.md)
4. [Building UI Components](tutorials/dapp/04-ui-components.md)
5. [State Management & Testing](tutorials/dapp/05-state-testing.md)

**Duration:** 10-12 hours

## 📖 Tutorials

### Beginner Tutorials

- [Getting Started with MeeChain](tutorials/beginner/)
- [How to Contribute](tutorials/beginner/how-to-contribute.md)
- [Understanding the Badge System](tutorials/beginner/badge-system.md)
- [Your First External Module](tutorials/beginner/first-module.md)

### Intermediate Tutorials

- [Building Complex Modules](tutorials/intermediate/)
- [Firebase Integration](tutorials/intermediate/firebase.md)
- [GitHub Actions for MeeChain](tutorials/intermediate/github-actions.md)
- [Advanced Smart Contracts](tutorials/intermediate/contracts.md)

### Advanced Tutorials

- [System Architecture Deep Dive](tutorials/advanced/)
- [Performance Optimization](tutorials/advanced/performance.md)
- [Security Best Practices](tutorials/advanced/security.md)
- [Scaling MeeChain](tutorials/advanced/scaling.md)

## 💡 Examples

### Code Examples

- [Example Modules](examples/modules/)
  - Greeting Module
  - Calculator Module
  - Weather Module
  - Translation Module

- [Example DApps](examples/dapps/)
  - Token Dashboard
  - Quest Tracker
  - Badge Gallery
  - Governance Interface

- [Example Contracts](examples/contracts/)
  - ERC-20 Extensions
  - NFT Badges
  - DAO Templates
  - Staking Contracts

### Project Templates

- [Module Template](examples/templates/module-template/)
- [DApp Template](examples/templates/dapp-template/)
- [Contract Template](examples/templates/contract-template/)
- [Bot Module Template](examples/templates/bot-template/)

## 🎯 Quests & Challenges

### Learning Quests

1. **Hello MeeChain** (10 points)
   - Complete beginner tutorial
   - Submit first contribution

2. **Module Master** (30 points)
   - Create 3 external modules
   - Pass all tests

3. **Smart Contract Expert** (50 points)
   - Deploy 2 contracts
   - Write comprehensive tests

4. **DApp Developer** (40 points)
   - Build complete DApp feature
   - Integrate with contracts

### Monthly Challenges

- **October**: Build a voting module
- **November**: Create a DAO proposal interface
- **December**: Develop a badge showcase

## 📹 Video Tutorials

- [MeeChain Overview](https://youtube.com/...) (10 min)
- [First Contribution Walkthrough](https://youtube.com/...) (15 min)
- [Module Development](https://youtube.com/...) (30 min)
- [Smart Contract Tutorial](https://youtube.com/...) (45 min)

## 📝 Workshops

### Upcoming Workshops

- **Smart Contract Development** - December 1, 2025
- **MeeBot Advanced Features** - December 15, 2025
- **DApp UI/UX Best Practices** - January 5, 2026

### Past Workshops

- [Introduction to MeeChain](workshops/past/intro-meechain.md)
- [External Modules Workshop](workshops/past/modules-workshop.md)

## 🏆 Certifications

### MeeChain Developer Certificate

**Requirements:**
- Complete all beginner courses
- Submit 5 contributions
- Pass certification exam

**Benefits:**
- Official certificate
- Special badge
- Priority support
- Community recognition

### MeeChain Expert Certificate

**Requirements:**
- Complete advanced track
- Build production-ready project
- Help 10 other developers

## 📚 Resources

### Documentation
- [MeeChain Docs](../docs/README.md)
- [Smart Contract Guide](../smart-contracts/README.md)
- [DApp Development Guide](../dapp/README.md)

### External Resources
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Ethereum Development](https://ethereum.org/developers)
- [Web3.js Guide](https://web3js.readthedocs.io/)

### Community
- [Discord](https://discord.gg/meechain)
- [Forum](https://forum.meechain.network)
- [GitHub Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)

## 🤝 Learning Paths

### Path 1: DApp Developer
1. Blockchain Basics
2. MeeChain Introduction
3. DApp Development
4. Smart Contract Integration
5. Deploy to Production

**Estimated Time:** 4-6 weeks

### Path 2: Smart Contract Developer
1. Blockchain Basics
2. Solidity Basics
3. Smart Contract Development
4. Security Best Practices
5. Gas Optimization

**Estimated Time:** 6-8 weeks

### Path 3: MeeBot Developer
1. Blockchain Basics
2. MeeChain Introduction
3. MeeBot Architecture
4. Module Development
5. Integration

**Estimated Time:** 5-7 weeks

## 🎯 Learning Goals

เมื่อจบ Academy คุณจะสามารถ:

- ✅ เข้าใจหลักการทำงานของ blockchain
- ✅ พัฒนา DApp บน MeeChain
- ✅ เขียน Smart Contracts ด้วย Solidity
- ✅ Integrate MeeBot เข้า application
- ✅ สร้าง External Modules
- ✅ Deploy และ manage contracts
- ✅ Optimize gas และ security

## 📊 Progress Tracking

ระบบจะติดตามความคืบหน้าของคุณ:

```typescript
{
  "userId": "user123",
  "level": "intermediate",
  "completedLessons": 12,
  "totalLessons": 22,
  "earnedBadges": 5,
  "totalPoints": 450,
  "currentQuest": "dapp-development-quest",
  "achievements": [
    "blockchain-explorer",
    "mee-starter",
    "dapp-developer"
  ]
}
```

## 🌟 Become a Teacher

สามารถสร้างบทเรียนเองได้!

1. Fork repository
2. สร้างบทเรียนใน academy/
3. เพิ่ม quest และ exercises
4. ส่ง Pull Request

อ่านเพิ่มเติม: [Teaching Guide](teaching-guide.md)

- [API Reference](../docs/api/)
- [Architecture Guide](../docs/architecture/)
- [Style Guide](../docs/guides/style-guide.md)

### External Resources

- [Solidity Documentation](https://docs.soliditylang.org)
- [React Documentation](https://react.dev)
- [Web3.js Documentation](https://web3js.readthedocs.io)
- [Hardhat Documentation](https://hardhat.org/docs)

### Community

- [Discord](https://discord.gg/meechain)
- [GitHub Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- [Twitter](https://twitter.com/meechain)

## 🤝 Contributing to Academy

เราต้อนรับการมีส่วนร่วมในการสร้างเนื้อหาการเรียนรู้!

### How to Contribute

1. เลือกหัวข้อที่ต้องการสร้าง
2. เขียน tutorial/course
3. เพิ่มตัวอย่างโค้ด
4. Submit PR

### Content Guidelines

- เขียนให้เข้าใจง่าย
- ใส่ตัวอย่างโค้ดที่ชัดเจน
- รองรับทั้งภาษาไทยและอังกฤษ
- Test โค้ดก่อน submit
- ใส่ screenshots/diagrams

### Rewards

- 📚 **Tutorial Creator** badge (35 points)
- การยอมรับจากชุมชน
- Profile spotlight

## 💬 Support

ต้องการความช่วยเหลือ?

- 📧 [Issues](https://github.com/T1ADIPT4/meechain-template/issues)
- 💭 [Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- 💬 [Discord Community](https://discord.gg/meechain)

---

**เริ่มต้นการเรียนรู้วันนี้! 🚀**
- [Ask in Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- [Open an Issue](https://github.com/T1ADIPT4/meechain-template/issues)
- [Chat with MeeBot](../meebot/)

## 📄 License

All educational content is licensed under [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

---

<div align="center">

**Learn, Build, Grow with MeeChain 🚀**

[⬆ Back to Top](#-meechain-academy)

</div>
