# Firebase Cloud Functions

Cloud Functions สำหรับ MeeChain platform - จัดการ badges, quests, และ logging

## Functions

### awardBadge
มอบ badge ให้ผู้ใช้เมื่อบรรลุความสำเร็จ

**Trigger:** HTTP callable function
**Parameters:**
- `userId`: ID ของผู้ใช้
- `badgeType`: ประเภทของ badge
- `boardId`: (optional) Board ที่เกี่ยวข้อง
- `value`: (optional) คะแนนพิเศษ

### onBoardCompleted
ตรวจจับเมื่อ board เสร็จสมบูรณ์และมอบ badge อัตโนมัติ

**Trigger:** Firestore onUpdate
**Collection:** `boards/{boardId}`

### logProgress
บันทึกความก้าวหน้าเมื่อผู้ใช้ทำงานเสร็จ

**Trigger:** HTTP callable function
**Parameters:**
- `userId`: ID ของผู้ใช้
- `boardId`: ID ของ board
- `taskId`: ID ของงาน
- `completed`: สถานะการทำงาน

### triggerVoice
เปิดใช้งานเสียงของ MeeBot

**Trigger:** HTTP callable function
**Parameters:**
- `userId`: ID ของผู้ใช้
- `emotion`: อารมณ์ของ MeeBot
- `message`: ข้อความที่จะพูด
- `autoPlay`: เปิดเสียงอัตโนมัติหรือไม่

### generateMeeBotResponse
สร้างการตอบกลับของ MeeBot ตามบริบท

**Trigger:** HTTP callable function
**Parameters:**
- `userId`: ID ของผู้ใช้
- `boardId`: ID ของ board
- `progressPercentage`: เปอร์เซ็นต์ความก้าวหน้า

## Setup

```bash
# ติดตั้ง Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# เลือก project
firebase use --add

# ติดตั้ง dependencies
cd firebase-functions
npm install
```

## Development

```bash
# Build functions
npm run build

# Run emulators
npm run serve

# Test functions locally
npm run shell
```

## Deployment

```bash
# Deploy all functions
npm run deploy

# Deploy specific function
firebase deploy --only functions:awardBadge

# View logs
npm run logs
```

## Firestore Rules

กำหนดใน `firestore.rules`:
- Users สามารถอ่าน/เขียนข้อมูลของตัวเองได้
- Boards เจ้าของสามารถจัดการได้
- Badges และ Progress เขียนได้เฉพาะ Cloud Functions
- External modules อ่านได้ทุกคน

## Environment Variables

```bash
# Set environment variables
firebase functions:config:set someservice.key="THE API KEY"

# View current config
firebase functions:config:get
```

## Testing

```bash
# ติดตั้ง Firebase emulator suite
firebase init emulators

# Run tests with emulator
npm test
```
