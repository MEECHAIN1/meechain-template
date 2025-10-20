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
