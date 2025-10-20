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
