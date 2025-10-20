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
