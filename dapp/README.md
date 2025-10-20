# 🎨 MeeChain DApp

Frontend application สำหรับ MeeChain ecosystem

## 📋 Overview

MeeChain DApp เป็น decentralized application ที่เชื่อมต่อกับ:
- Smart Contracts (T2P, MEE, DAO)
- MeeBot AI Assistant
- Firebase Backend
- External Modules

## 🛠️ Tech Stack

- **Framework**: React / Next.js
- **Styling**: Tailwind CSS / styled-components
- **State Management**: Redux / Zustand / Context API
- **Web3**: ethers.js / web3.js
- **Build Tool**: Vite / Next.js

## 📁 Structure

```
dapp/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── services/       # API services
│   ├── store/          # State management
│   ├── contracts/      # Smart contract ABIs
│   └── App.js          # Main app component
│
├── public/             # Static assets
├── package.json        # Dependencies
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask or compatible Web3 wallet

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Development

```bash
# Start development server
npm run dev

# or
yarn dev
```

### Build

```bash
# Build for production
npm run build

# or
yarn build
```

### Testing

```bash
# Run tests
npm test

# or
yarn test
```

## 🎯 Features

### 🔐 Wallet Connection
- Connect with MetaMask, WalletConnect
- Multi-chain support
- Account management

### 📊 Dashboard
- Token balances (MEE)
- T2P transactions history
- Contribution statistics
- Badge collection

### 🤖 MeeBot Integration
- Chat interface
- Voice commands (planned)
- Personality selection
- Module execution

### 🏅 Badge & Quest System
- View earned badges
- Track quest progress
- Leaderboard

### 🧩 External Modules
- Browse available modules
- Install/use modules
- Module marketplace (planned)

### 🗳️ DAO Governance
- Proposal creation
- Voting
- Delegation

## 📱 Pages

### Home (`/`)
- Landing page
- Connect wallet
- Quick stats

### Dashboard (`/dashboard`)
- User overview
- Token balances
- Recent activity

### MeeBot (`/meebot`)
- Chat interface
- Module browser
- Settings

### Badges (`/badges`)
- Badge collection
- Achievement tracking
- Leaderboard

### Quest (`/quest`)
- Available quests
- Quest details
- Claim rewards

### Governance (`/governance`)
- Proposals list
- Voting interface
- Create proposal

### Profile (`/profile`)
- User profile
- Contribution history
- Settings

## 🔌 API Integration

### Smart Contracts

```javascript
import { ethers } from 'ethers';
import MEE_ABI from './contracts/MEE.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const meeContract = new ethers.Contract(MEE_ADDRESS, MEE_ABI, signer);

// Get balance
const balance = await meeContract.balanceOf(address);
```

### Firebase

```javascript
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// Get user badges
const badgesRef = collection(db, 'users', userId, 'badges');
const badgesSnap = await getDocs(badgesRef);
```

### MeeBot API

```javascript
import { MeeBotClient } from './services/meebot';

const client = new MeeBotClient();
const response = await client.chat({
  message: 'Hello MeeBot!',
  userId: currentUser.id
});
```

## 🎨 Theming

### Colors

```css
/* Primary Colors */
--primary: #4F46E5;      /* Indigo */
--secondary: #06B6D4;    /* Cyan */
--accent: #F59E0B;       /* Amber */

/* Status Colors */
--success: #10B981;      /* Green */
--error: #EF4444;        /* Red */
--warning: #F59E0B;      /* Orange */
--info: #3B82F6;         /* Blue */

/* Neutral Colors */
--background: #FFFFFF;
--surface: #F9FAFB;
--text: #111827;
```

### Typography

```css
/* Font Families */
--font-primary: 'Inter', sans-serif;
--font-heading: 'Poppins', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm run test:e2e
```

### Coverage

```bash
npm run test:coverage
```

## 📦 Build & Deployment

### Build

```bash
npm run build
```

### Deploy

```bash
# Deploy to Vercel
vercel deploy

# or Deploy to Netlify
netlify deploy

# or Deploy to Firebase Hosting
firebase deploy
```

## 🤝 Contributing

ดู [CONTRIBUTING.md](../CONTRIBUTING.md) สำหรับรายละเอียด

### Development Workflow

1. Fork repository
2. Create feature branch
3. Make changes
4. Write tests
5. Submit PR

## 📚 Resources

- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Ethers.js Documentation](https://docs.ethers.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🐛 Known Issues

- [List known issues here]

## 📝 TODO

- [ ] Implement wallet connection
- [ ] Create dashboard components
- [ ] Integrate MeeBot chat
- [ ] Add badge display
- [ ] Implement quest system
- [ ] Add DAO governance UI

## 📄 License

MIT

---

<div align="center">

**Built with ❤️ by MeeChain Community**

[⬆ Back to Top](#-meechain-dapp)

</div>
