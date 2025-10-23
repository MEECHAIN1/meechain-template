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
# MeeChain Documentation

ยินดีต้อนรับสู่คู่มือการใช้งาน MeeChain Template

## 📚 เอกสารทั้งหมด

- [CONTRIBUTING.md](./CONTRIBUTING.md) - คู่มือสำหรับผู้ร่วมพัฒนา
- [EXTERNAL_MODULES_SETUP.md](./EXTERNAL_MODULES_SETUP.md) - วิธีตั้งค่าและใช้งาน External Modules

## 🎯 ภาพรวม MeeChain

MeeChain เป็นแพลตฟอร์มติดตามเป้าหมายและภารกิจที่ผสานเทคโนโลยี AI, Web3, และระบบ gamification เข้าด้วยกัน

### คุณสมบัติหลัก

- **MeeBot AI Assistant** - ผู้ช่วยอัจฉริยะที่มีอารมณ์และบุคลิกภาพ
- **Badge & Quest System** - ระบบความสำเร็จและภารกิจผ่าน Firebase
- **Smart Contracts** - สัญญาอัจฉริยะ T2P, MEE, และ DAO
- **External Modules** - รองรับการขยายจากชุมชน
- **Academy** - เนื้อหาการเรียนรู้และบทเรียน

## 🚀 เริ่มต้นอย่างรวดเร็ว

### 1. ติดตั้ง Dependencies

```bash
# ติดตั้ง dependencies สำหรับ dapp
cd dapp
npm install

# ติดตั้ง dependencies สำหรับ smart contracts
cd ../smart-contracts
npm install

# ติดตั้ง dependencies สำหรับ firebase functions
cd ../firebase-functions
npm install
```

### 2. ตั้งค่า Environment Variables

สร้างไฟล์ `.env.local` ใน `dapp/`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

### 3. รันโปรเจกต์

```bash
# รัน dapp
cd dapp
npm run dev

# รัน firebase emulator (ในหน้าต่างใหม่)
cd firebase-functions
npm run serve
```

## 📖 โครงสร้างโปรเจกต์

```
MeeChain/
├── dapp/                  # แอปหลัก (Next.js / React)
├── meebot/                # ระบบ MeeBot
├── smart-contracts/       # สัญญา T2P, MEE, DAO
├── firebase-functions/    # Badge, Quest, Logging
├── external-modules/      # ฟังก์ชันจาก contributors
├── academy/               # เนื้อหาการเรียนรู้
└── docs/                  # เอกสาร
```

## 🤝 การมีส่วนร่วม

ดูรายละเอียดใน [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📝 License

ดูรายละเอียดใน [LICENSE](../LICENSE)
# 📖 Documentation

ศูนย์รวมเอกสารทั้งหมดสำหรับ MeeChain Template

## 📚 เอกสารหลัก

### Getting Started
- [README](../README.md) - ภาพรวมโปรเจกต์
- [CONTRIBUTING](../CONTRIBUTING.md) - คู่มือการมีส่วนร่วม
- [EXTERNAL_MODULES_SETUP](../EXTERNAL_MODULES_SETUP.md) - วิธีสร้างโมดูล

### Component Documentation
- [DApp Documentation](../dapp/README.md) - คู่มือพัฒนา DApp
- [MeeBot Documentation](../meebot/README.md) - คู่มือระบบ MeeBot
- [Smart Contracts](../smart-contracts/README.md) - คู่มือ Smart Contracts
- [Firebase Functions](../firebase-functions/README.md) - คู่มือ Firebase
- [External Modules](../external-modules/README.md) - คู่มือโมดูล
- [Academy](../academy/README.md) - บทเรียนและหลักสูตร

## 🏗 สถาปัตยกรรม (Architecture)
# 📚 Documentation

Comprehensive documentation สำหรับ MeeChain ecosystem

## 📋 Table of Contents

- [Architecture](#architecture)
- [API Reference](#api-reference)
- [Guides](#guides)
- [FAQ](#faq)
- [Glossary](#glossary)

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      MeeChain Ecosystem                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐    ┌──────────┐    ┌──────────────┐         │
│  │  DApp    │───▶│  MeeBot  │───▶│   Firebase   │         │
│  │ Frontend │    │  System  │    │   Functions  │         │
│  └──────────┘    └──────────┘    └──────────────┘         │
│       │               │                   │                 │
│       │               │                   │                 │
│       ▼               ▼                   ▼                 │
│  ┌────────────────────────────────────────────────┐        │
│  │           MeeChain Blockchain                  │        │
│  │  ┌────────────┐  ┌────────────┐  ┌─────────┐ │        │
│  │  │ T2P        │  │ MEE Token  │  │   DAO   │ │        │
│  │  │ Contract   │  │ Contract   │  │ Contract│ │        │
│  │  └────────────┘  └────────────┘  └─────────┘ │        │
│  └────────────────────────────────────────────────┘        │
│       ▲                                                     │
│       │                                                     │
│  ┌────────────────┐                                        │
│  │ External       │                                        │
│  │ Modules        │                                        │
│  └────────────────┘                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Component Interaction

1. **User** ↔ **DApp Frontend**
   - เข้าถึงผ่าน web browser
   - เชื่อมต่อ wallet
   - ทำ transactions

2. **DApp** ↔ **Smart Contracts**
   - เรียกใช้ contract functions
   - ส่ง transactions
   - อ่าน blockchain data

3. **MeeBot** ↔ **External Modules**
   - โหลดโมดูล dynamically
   - ใช้งานฟังก์ชันจากโมดูล
   - Cache โมดูลที่โหลดแล้ว

4. **Firebase Functions** ↔ **Database**
   - บันทึก user data
   - จัดการ badges
   - Track quests

## 🔧 Technical Stack

### Frontend
- **Framework:** Next.js 14
- **UI Library:** React 18
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **State Management:** Zustand / Redux
- **Blockchain:** Ethers.js

### Backend
- **Cloud Functions:** Firebase Functions
- **Database:** Firestore
- **Authentication:** Firebase Auth
- **Storage:** Firebase Storage

### Blockchain
- **Smart Contracts:** Solidity 0.8+
- **Development:** Hardhat
- **Testing:** Hardhat + Chai
- **Libraries:** OpenZeppelin

### DevOps
- **CI/CD:** GitHub Actions
- **Version Control:** Git
- **Package Manager:** npm
- **Deployment:** Vercel (Frontend), Firebase (Backend)

## 📋 API Reference

### Smart Contracts API

#### MEE Token
```solidity
// Transfer tokens
function transfer(address to, uint256 amount) public returns (bool)

// Approve spending
function approve(address spender, uint256 amount) public returns (bool)

// Check balance
function balanceOf(address account) public view returns (uint256)
```

#### T2P Contract
```solidity
// Stake tokens
function stake(uint256 amount) public

// Unstake tokens
function unstake(uint256 amount) public

// Calculate rewards
function calculateRewards(address user) public view returns (uint256)
```

### Firebase Functions API

#### Badge System
```typescript
// Award badge
awardBadge(userId: string, badgeType: string, metadata?: object)

// Get user badges
getUserBadges(userId: string)

// Get badge leaderboard
getBadgeLeaderboard(limit?: number)
```

#### Quest System
```typescript
// Get quests
getQuests(userId?: string)

// Update quest progress
updateQuestProgress(userId: string, questId: string, taskId: string)

// Complete quest
completeQuest(userId: string, questId: string)
```

### External Modules API

#### Deploy Contract Module
```typescript
deployContract(
  config: DeployConfig,
  provider: Provider,
  signer: Signer
): Promise<DeployResult>
```

#### Format Progress Module
```typescript
formatProgress(data: ProgressData): FormattedProgress
createProgressBar(percentage: number, width?: number): string
estimatedCompletionTime(data: ProgressData): Date
```

## 🔐 Security

### Best Practices

1. **Smart Contract Security**
   - ใช้ OpenZeppelin contracts
   - Audit code before deployment
   - ป้องกัน reentrancy attacks
   - ใช้ Access Control

2. **Frontend Security**
   - Validate user inputs
   - Sanitize data
   - ใช้ HTTPS
   - Secure API keys

3. **Backend Security**
   - Firebase Security Rules
   - Authentication required
   - Rate limiting
   - Input validation

### Security Checklist

- [ ] Smart contracts audited
- [ ] Security rules configured
- [ ] API keys secured
- [ ] Input validation implemented
- [ ] Error handling proper
- [ ] Logging enabled
- [ ] Monitoring setup

## 🧪 Testing Guide

### Unit Testing
```bash
# Test smart contracts
cd smart-contracts
npm test

# Test Firebase functions
cd firebase-functions/functions
npm test

# Test DApp components
cd dapp
npm test
```

### Integration Testing
```bash
# Start local blockchain
npx hardhat node

# Deploy contracts
npm run deploy:local

# Start emulators
firebase emulators:start

# Run integration tests
npm run test:integration
```

### End-to-End Testing
```bash
# Start all services
npm run dev

# Run E2E tests
npm run test:e2e
```

## 📊 Performance

### Optimization Tips

1. **Smart Contracts**
   - Minimize storage operations
   - Use events for logging
   - Batch operations
   - Optimize gas usage

2. **Frontend**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Caching strategies

3. **Firebase**
   - Minimize reads/writes
   - Use caching
   - Optimize queries
   - Batch operations

## 🔍 Troubleshooting

### Common Issues

#### Deployment Failed
```bash
# Check network connection
npm run check-network

# Verify configuration
npm run verify-config

# Check gas price
npm run check-gas
```

#### Transaction Reverted
- Check contract address
- Verify function parameters
- Ensure sufficient gas
- Check allowances

#### Module Not Loading
- Verify module exists
- Check module syntax
- Clear cache
- Rebuild modules

## 📈 Monitoring

### Metrics to Track

- **Smart Contracts**
  - Gas usage
  - Transaction count
  - Active users
  - TVL (Total Value Locked)

- **Frontend**
  - Page load time
  - User sessions
  - Error rate
  - Conversion rate

- **Backend**
  - Function invocations
  - Response time
  - Error rate
  - Database operations

## 🌐 Deployment

### Production Checklist

- [ ] All tests passing
- [ ] Security audit completed
- [ ] Environment variables set
- [ ] Monitoring configured
- [ ] Backup strategy in place
- [ ] Documentation updated
- [ ] Team notified

### Deployment Commands

```bash
# Deploy smart contracts
npm run deploy:mainnet

# Deploy Firebase functions
firebase deploy --only functions

# Deploy frontend
vercel --prod
```

## 📞 Support

### Getting Help

- 📧 [GitHub Issues](https://github.com/T1ADIPT4/meechain-template/issues)
- 💭 [Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- 📚 [Academy](../academy/README.md)

### Contributing

- [Contributing Guide](../CONTRIBUTING.md)
- [Module Setup Guide](../EXTERNAL_MODULES_SETUP.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

---

**Documentation maintained by MeeChain Community 📖**
┌─────────────────────────────────────────────────────┐
│                    MeeChain DApp                    │
│                  (Frontend/UI)                      │
└────────────┬────────────────────────┬───────────────┘
             │                        │
             │                        │
   ┌─────────▼─────────┐    ┌────────▼──────────┐
   │   Smart Contracts │    │      MeeBot       │
   │   (Blockchain)    │    │   (AI Assistant)  │
   └─────────┬─────────┘    └────────┬──────────┘
             │                        │
             │                        │
   ┌─────────▼────────────────────────▼───────────┐
   │          Firebase Backend                    │
   │   (Functions, Firestore, Auth, Storage)      │
   └──────────────────────────────────────────────┘
             │
             │
   ┌─────────▼─────────┐
   │  External Modules │
   │   (Community)     │
   └───────────────────┘
```

### Component Architecture

#### DApp Layer
- **Frontend**: React/Next.js
- **State**: Redux/Zustand
- **Web3**: ethers.js
- **UI**: Tailwind CSS

#### Smart Contract Layer
- **Token**: MEE ERC-20
- **Rewards**: T2P System
- **Governance**: DAO
- **Badges**: NFTs

#### Backend Layer
- **Functions**: Badge, Quest, Logging
- **Database**: Firestore
- **Auth**: Firebase Auth
- **Storage**: Cloud Storage

#### AI Layer
- **MeeBot**: AI Assistant
- **Modules**: Dynamic Loading
- **Personas**: Customizable

### Data Flow

```
User Action → DApp → Smart Contract/Firebase → MeeBot
                ↓                    ↓            ↓
            Blockchain          Database      External
            Transaction         Update        Modules
                ↓                    ↓            ↓
           Confirmation        Notification   Response
                ↓                    ↓            ↓
                └────────────────────┴────────────┘
                              ↓
                         User Feedback
```

## 📡 API Reference

### Smart Contract APIs

#### MEE Token

```solidity
// ERC-20 Standard
function transfer(address to, uint256 amount) external returns (bool);
function balanceOf(address account) external view returns (uint256);
function approve(address spender, uint256 amount) external returns (bool);
```

#### T2P System

```solidity
function recordContribution(address contributor, uint256 points, string memory type) external;
function claimReward() external returns (uint256);
function getContributions(address contributor) external view returns (Contribution[] memory);
```

#### DAO

```solidity
function createProposal(string memory description) external returns (uint256);
function vote(uint256 proposalId, bool support) external;
function executeProposal(uint256 proposalId) external;
```

### Firebase Functions APIs

#### Badge System

```javascript
// Award badge
awardBadge({
  userId: string,
  badgeId: string,
  reason: string
}) -> { success: boolean }

// Get badges
getBadges({
  userId: string
}) -> Badge[]
```

#### Quest System

```javascript
// Create quest
createQuest({
  title: string,
  description: string,
  requirements: object,
  rewards: object
}) -> { questId: string }

// Complete quest
completeQuest({
  userId: string,
  questId: string
}) -> { success: boolean, rewards: object }
```

### MeeBot APIs

```python
# Chat
bot.chat(
  user_id: str,
  message: str
) -> Response

# Execute module
bot.execute_module(
  user_id: str,
  module: str,
  context: dict
) -> Result

# Award badge
bot.award_badge(
  user_id: str,
  badge: str,
  reason: str
) -> None
```

### External Module API

```javascript
// Load module
loader.load(moduleId: string) -> Module

// Execute module
loader.execute(
  moduleId: string,
  context: object
) -> Result

// List modules
loader.listModules() -> ModuleInfo[]
```

## 📖 Guides

### Development Guides

- [Getting Started](guides/getting-started.md)
- [Development Setup](guides/development-setup.md)
- [Testing Guide](guides/testing.md)
- [Deployment Guide](guides/deployment.md)

### Feature Guides

- [Wallet Integration](guides/wallet-integration.md)
- [Smart Contract Interaction](guides/contract-interaction.md)
- [MeeBot Usage](guides/meebot-usage.md)
- [Module Development](guides/module-development.md)

### Best Practices

- [Code Style Guide](guides/style-guide.md)
- [Security Best Practices](guides/security.md)
- [Performance Optimization](guides/performance.md)
- [Testing Best Practices](guides/testing-best-practices.md)

## ❓ FAQ

### General

**Q: What is MeeChain?**
A: MeeChain is a decentralized ecosystem that rewards contributions through blockchain technology, AI assistance, and community-driven development.

**Q: How do I start contributing?**
A: Read our [CONTRIBUTING.md](../CONTRIBUTING.md) and start with [Good First Issues](https://github.com/T1ADIPT4/meechain-template/labels/good%20first%20issue).

### Technical

**Q: Which blockchain networks are supported?**
A: Currently Ethereum, Polygon, and BSC. More networks coming soon.

**Q: How do I deploy smart contracts?**
A: See our [Deployment Guide](guides/deployment.md).

**Q: Can I create custom MeeBot personalities?**
A: Yes! See [MeeBot Persona Guide](../meebot/README.md#personas).

### Badges & Quests

**Q: How do I earn badges?**
A: Contribute to the project! PRs, modules, documentation, and quests all earn badges.

**Q: What are quests?**
A: Quests are special challenges with specific rewards. Check [Issues with Quest label](https://github.com/T1ADIPT4/meechain-template/labels/quest).

## 📚 Glossary

**MEE Token**: Native ERC-20 token of MeeChain ecosystem

**T2P (Time-to-Profit)**: Reward system for contributors

**MeeBot**: AI assistant that helps users and awards badges

**External Module**: Community-created functionality that can be loaded dynamically

**Badge**: NFT achievement token earned through contributions

**Quest**: Special challenge with rewards

**DAO**: Decentralized Autonomous Organization for governance

**DApp**: Decentralized Application (frontend)

## 🔗 Additional Resources

### Internal Docs

- [Architecture Details](architecture/)
- [API Full Reference](api/)
- [All Guides](guides/)

### External Resources

- [Ethereum Documentation](https://ethereum.org/developers)
- [Solidity Docs](https://docs.soliditylang.org)
- [Firebase Docs](https://firebase.google.com/docs)
- [React Docs](https://react.dev)

## 🤝 Contributing to Docs

Documentation improvements are always welcome!

1. Find docs that need improvement
2. Make changes
3. Submit PR with label `documentation`
4. Earn **Documentarian** badge! 📚

## 📄 License

Documentation is licensed under [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

---

<div align="center">

**Knowledge is Power 💡**

[⬆ Back to Top](#-documentation)

</div>
