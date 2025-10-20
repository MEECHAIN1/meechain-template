# DApp - MeeChain Main Application

แอปพลิเคชันหลักของ MeeChain ที่พัฒนาด้วย Next.js และ React

## 📁 โครงสร้าง

```
dapp/
├── src/
│   ├── pages/          # หน้าเว็บต่างๆ (Next.js routing)
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility libraries และ helpers
└── public/             # Static files (images, fonts, etc.)
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
