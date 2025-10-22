# DApp - MeeChain Main Application

แอปพลิเคชันหลักของ MeeChain ที่พัฒนาด้วย Next.js และ React

## 📁 โครงสร้าง
# 🎨 DApp Frontend

แอปพลิเคชันหลักของ MeeChain ที่พัฒนาด้วย Next.js และ React

## 🚀 เริ่มต้นใช้งาน

### การติดตั้ง

```bash
cd dapp
npm install
```

### รันในโหมด Development

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### Build สำหรับ Production

```bash
npm run build
npm start
```

## 📁 โครงสร้างโปรเจกต์

```
dapp/
├── pages/          # Next.js pages
├── components/     # React components
├── styles/         # CSS/SCSS files
├── public/         # Static assets
├── lib/            # Utility functions
├── hooks/          # Custom React hooks
└── types/          # TypeScript types
```

## 🔧 เทคโนโลยีที่ใช้

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Ethers.js** - Blockchain interaction
- **Web3Modal** - Wallet connection

## 🔌 การเชื่อมต่อ Blockchain

```typescript
import { ethers } from 'ethers';

// เชื่อมต่อ wallet
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// เรียกใช้ smart contract
const contract = new ethers.Contract(address, abi, signer);
```

## 🤖 การใช้งาน MeeBot

```typescript
import { MeeBot } from '@meechain/meebot';

const bot = new MeeBot({
  emotion: 'happy',
  voice: 'female',
  persona: 'friendly'
});

await bot.speak('สวัสดีครับ!');
```

## 🧩 External Modules

DApp สามารถโหลด external modules ได้:

```typescript
import { loadModule } from '@meechain/module-loader';

const progressModule = await loadModule('format-progress');
const formatted = progressModule.formatProgress({
  completed: 50,
  total: 100,
  startTime: new Date()
});
```

## 📚 เอกสารเพิ่มเติม

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Ethers.js Documentation](https://docs.ethers.org/)

## 🤝 การมีส่วนร่วม

อ่านเพิ่มเติมใน [CONTRIBUTING.md](../CONTRIBUTING.md)
# MeeChain DApp

Next.js application สำหรับ MeeChain Task-to-Progress platform

## โครงสร้าง

- `src/app/` - Next.js App Router pages
- `src/pages/` - Additional pages (Dashboard, Board Detail)
- `src/components/` - React components (MeeBot, ProgressBar, TaskList)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility libraries (Firebase, Wallet)
- `public/` - Static assets

## Getting Started

```bash
# ติดตั้ง dependencies
npm install

# รันในโหมด development
npm run dev

# Build สำหรับ production
npm run build

# รัน production server
npm start
```

## Environment Variables

สร้างไฟล์ `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Features

- ✅ เชื่อมต่อ Web3 Wallet (MetaMask)
- ✅ Firebase Authentication & Firestore
- ✅ MeeBot - AI companion
- ✅ Task Management System
- ✅ Progress Tracking
- ✅ External Modules Support
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
│   ├── pages/          # หน้าเว็บต่างๆ (Next.js routing)
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility libraries และ helpers
└── public/             # Static files (images, fonts, etc.)
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

### ติดตั้ง Dependencies

```bash
npm install
```

### รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### Build สำหรับ Production

```bash
npm run build
npm start
```

## 📦 Features

- **Next.js 13+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Web3 Integration** - เชื่อมต่อ wallet และ smart contracts
- **Firebase** - Authentication และ Firestore
- **MeeBot Integration** - ผู้ช่วย AI

## 🔗 การเชื่อมต่อ

### Web3
```javascript
import { useWallet } from '@/hooks/useWallet';

function MyComponent() {
  const { address, connect } = useWallet();
  // ...
}
```

### Firebase
```javascript
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, signIn } = useAuth();
  // ...
}
```

### MeeBot
```javascript
import { useMeeBot } from '@/hooks/useMeeBot';

function MyComponent() {
  const { speak, emotion } = useMeeBot();
  // ...
}
```

### External Modules
```javascript
import { useExternalModules } from '@/hooks/useExternalModules';

function MyComponent() {
  const { module, loading } = useExternalModules('module-path');
  // ...
}
```

## 🎨 Styling

ใช้ Tailwind CSS:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello MeeChain!
</div>
```

## 📝 Environment Variables

สร้างไฟล์ `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_CHAIN_ID=137
```

## 🧪 Testing

```bash
npm run test
```

## 📚 เพิ่มเติม

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
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
