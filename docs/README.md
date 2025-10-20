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
