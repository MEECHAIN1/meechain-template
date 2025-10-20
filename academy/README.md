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
