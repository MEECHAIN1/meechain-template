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
