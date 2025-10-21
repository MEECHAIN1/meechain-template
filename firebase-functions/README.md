# Firebase Functions

Firebase Cloud Functions สำหรับ MeeChain DApp รองรับระบบ quest, badge และ progress tracking

## 📦 Functions

### awardBadge.ts
Cloud Function สำหรับมอบ badge ให้ผู้ใช้เมื่อทำ quest สำเร็จหรือบรรลุเป้าหมาย

**Features:**
- ระบบ badge หลายระดับ (common, rare, epic, legendary)
- คำนวณคะแนนอัตโนมัติ
- ตรวจสอบ badge ที่มีอยู่แล้ว
- รองรับ metadata เพิ่มเติม

## 🎖️ Available Badges

| Badge ID | Name | Rarity | Points | Icon |
|----------|------|--------|--------|------|
| first-quest | First Quest Complete | Common | 10 | 🎯 |
| smart-contract-deployer | Smart Contract Deployer | Rare | 50 | 📜 |
| module-creator | Module Creator | Epic | 100 | 🔧 |
| contributor | Contributor | Rare | 75 | 🌟 |
| quest-master | Quest Master | Legendary | 500 | 👑 |

## 🚀 การใช้งาน

### Award Badge

```typescript
import { awardBadge } from './firebase-functions/functions/awardBadge';

// มอบ badge ให้ผู้ใช้
const result = await awardBadge(
  'user123',
  'first-quest',
  'quest001',
  { source: 'web', ip: '1.2.3.4' }
);

if (result.success) {
  console.log(`✅ ${result.message}`);
  console.log(`Badge: ${result.badge?.name}`);
  console.log(`Points: ${result.badge?.points}`);
}
```

### Check if User Has Badge

```typescript
import { hasBadge } from './firebase-functions/functions/awardBadge';

const hasFirstQuest = await hasBadge('user123', 'first-quest');
console.log(`Has first quest badge: ${hasFirstQuest}`);
```

### Get User Badges

```typescript
import { getUserBadges } from './firebase-functions/functions/awardBadge';

const badges = await getUserBadges('user123');
console.log(`User has ${badges.length} badges`);
```

### Calculate User Points

```typescript
import { calculateUserPoints } from './firebase-functions/functions/awardBadge';

const totalPoints = await calculateUserPoints('user123');
console.log(`Total points: ${totalPoints}`);
```

## 📚 API Reference

### awardBadge

มอบ badge ให้ผู้ใช้

**Parameters:**
- `userId: string` - User ID ที่จะมอบ badge
- `badgeId: string` - Badge ID ที่จะมอบ
- `questId?: string` - Quest ID ที่ทำให้ได้ badge (optional)
- `metadata?: Record<string, any>` - ข้อมูลเพิ่มเติม (optional)

**Returns:** `Promise<BadgeAwardResult>`

### hasBadge

ตรวจสอบว่าผู้ใช้มี badge หรือไม่

**Parameters:**
- `userId: string` - User ID ที่จะตรวจสอบ
- `badgeId: string` - Badge ID ที่จะตรวจสอบ

**Returns:** `Promise<boolean>`

### getUserBadges

ดึงข้อมูล badge ทั้งหมดของผู้ใช้

**Parameters:**
- `userId: string` - User ID

**Returns:** `Promise<BadgeAward[]>`

### calculateUserPoints

คำนวณคะแนนรวมจาก badge ทั้งหมดของผู้ใช้

**Parameters:**
- `userId: string` - User ID

**Returns:** `Promise<number>`

## 🔧 Integration with Firebase

ในการใช้งานจริง ควรเชื่อมต่อกับ Firebase:

```typescript
import * as functions from 'firebase-functions';
import { awardBadge } from './awardBadge';

// HTTP Trigger
export const awardBadgeHTTP = functions.https.onRequest(async (req, res) => {
  const { userId, badgeId, questId } = req.body;
  const result = await awardBadge(userId, badgeId, questId);
  res.json(result);
});

// Firestore Trigger - ตัวอย่าง: มอบ badge เมื่อทำ quest สำเร็จ
export const onQuestComplete = functions.firestore
  .document('quests/{questId}/completions/{userId}')
  .onCreate(async (snap, context) => {
    const { questId } = context.params;
    const { userId } = context.params;
    
    // มอบ badge
    await awardBadge(userId, 'first-quest', questId);
  });
```

## 🔐 Security

ใน production ควร:
- ตรวจสอบ authentication
- Validate input data
- ใช้ Firebase Admin SDK
- ตั้งค่า security rules ให้เหมาะสม

## 📄 License

ISC
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
# 🔥 Firebase Functions

Backend services สำหรับ MeeChain ecosystem

## 📋 Overview

Firebase Functions รวมถึง:
- **Badge Management**: จัดการ badges และ achievements
- **Quest System**: ระบบ quest และรางวัล
- **Logging**: บันทึก activities และ events
- **Notifications**: ส่งการแจ้งเตือน
- **Analytics**: เก็บสถิติและข้อมูล

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Firebase Functions (2nd gen)
- **Database**: Firestore
- **Auth**: Firebase Auth
- **Storage**: Cloud Storage
- **Language**: TypeScript

## 📁 Structure

```
firebase-functions/
├── functions/          # Cloud functions source
│   ├── src/
│   │   ├── badges/    # Badge management
│   │   ├── quests/    # Quest system
│   │   ├── logging/   # Activity logging
│   │   ├── notifications/ # Notifications
│   │   └── utils/     # Utilities
│   │
│   ├── index.ts       # Functions export
│   └── package.json   # Dependencies
│
├── firestore.rules    # Security rules
├── storage.rules      # Storage rules
└── firebase.json      # Firebase config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Firebase CLI
- Firebase project

### Installation

```bash
# Install Firebase CLI
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
# Install dependencies
cd functions
npm install
```

### Configuration

```bash
# Initialize Firebase
firebase init

# Set environment variables
firebase functions:config:set \
  github.token="YOUR_GITHUB_TOKEN" \
  openai.key="YOUR_OPENAI_KEY"
```

### Development

```bash
# Serve functions locally
npm run serve

# or
firebase emulators:start
```

### Deployment

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
# or
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:awardBadge
```

## 🎯 Functions

### Badge Management

#### `awardBadge`

มอบ badge ให้ผู้ใช้

```typescript
export const awardBadge = functions.https.onCall(async (data, context) => {
  const { userId, badgeId, reason } = data;
  
  // Validate user
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Must be logged in');
  }
  
  // Award badge
  await db.collection('users').doc(userId).collection('badges').add({
    badgeId,
    reason,
    awardedAt: admin.firestore.FieldValue.serverTimestamp(),
    awardedBy: context.auth.uid
  });
  
  // Send notification
  await sendNotification(userId, {
    title: 'New Badge! 🎉',
    body: `You earned: ${badgeId}`
  });
  
  return { success: true };
});
```

**Usage:**

```javascript
const awardBadge = functions.httpsCallable('awardBadge');
const result = await awardBadge({
  userId: 'user123',
  badgeId: 'first-contribution',
  reason: 'First PR merged'
});
```

#### `getBadges`

ดึงข้อมูล badges ของผู้ใช้

```typescript
export const getBadges = functions.https.onCall(async (data, context) => {
  const { userId } = data;
  
  const badges = await db
    .collection('users')
    .doc(userId)
    .collection('badges')
    .get();
  
  return badges.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
});
```

### Quest System

#### `createQuest`

สร้าง quest ใหม่

```typescript
export const createQuest = functions.https.onCall(async (data, context) => {
  const { title, description, requirements, rewards } = data;
  
  // Create quest
  const questRef = await db.collection('quests').add({
    title,
    description,
    requirements,
    rewards,
    active: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });
  
  return { questId: questRef.id };
});
```

#### `completeQuest`

บันทึกการทำ quest สำเร็จ

```typescript
export const completeQuest = functions.https.onCall(async (data, context) => {
  const { userId, questId } = data;
  
  // Verify quest completion
  const quest = await db.collection('quests').doc(questId).get();
  const verified = await verifyQuestCompletion(userId, quest.data());
  
  if (!verified) {
    throw new functions.https.HttpsError('failed-precondition', 'Quest not completed');
  }
  
  // Record completion
  await db.collection('users').doc(userId).collection('completedQuests').add({
    questId,
    completedAt: admin.firestore.FieldValue.serverTimestamp()
  });
  
  // Award rewards
  const rewards = quest.data().rewards;
  await awardRewards(userId, rewards);
  
  return { success: true, rewards };
});
```

### Logging

#### `logActivity`

บันทึก activity ของผู้ใช้

```typescript
export const logActivity = functions.https.onCall(async (data, context) => {
  const { userId, activityType, metadata } = data;
  
  await db.collection('activities').add({
    userId,
    activityType,
    metadata,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  });
  
  return { success: true };
});
```

#### `onPRMerged` (GitHub Webhook)

ตอบสนอง PR merged event จาก GitHub

```typescript
export const onPRMerged = functions.https.onRequest(async (req, res) => {
  const event = req.body;
  
  if (event.action === 'closed' && event.pull_request.merged) {
    const author = event.pull_request.user.login;
    
    // Award badge
    await awardBadge({
      userId: author,
      badgeId: 'contributor',
      reason: 'PR merged'
    });
    
    // Log activity
    await logActivity({
      userId: author,
      activityType: 'pr_merged',
      metadata: {
        prNumber: event.pull_request.number,
        title: event.pull_request.title
      }
    });
  }
  
  res.status(200).send('OK');
});
```

### Notifications

#### `sendNotification`

ส่งการแจ้งเตือนให้ผู้ใช้

```typescript
export const sendNotification = functions.https.onCall(async (data, context) => {
  const { userId, title, body } = data;
  
  // Get user's FCM tokens
  const userDoc = await db.collection('users').doc(userId).get();
  const tokens = userDoc.data()?.fcmTokens || [];
  
  // Send notification
  await admin.messaging().sendMulticast({
    tokens,
    notification: {
      title,
      body
    }
  });
  
  return { success: true };
});
```

## 🔐 Security Rules

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read their own data
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow write: if request.auth.uid == userId;
      
      // Badges subcollection
      match /badges/{badgeId} {
        allow read: if request.auth.uid == userId;
        allow write: if false; // Only functions can write
      }
    }
    
    // Quests are public
    match /quests/{questId} {
      allow read: if true;
      allow write: if false; // Only admins
    }
  }
}
```

### Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /badges/{badgeId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### Emulator Testing

```bash
# Start emulators
firebase emulators:start

# Run tests against emulators
npm run test:emulator
```

## 📊 Monitoring

### Logs

```bash
# View logs
firebase functions:log

# Specific function
firebase functions:log --only awardBadge
```

### Metrics

- Function invocations
- Error rate
- Execution time
- Memory usage

## 🤝 Contributing

ดู [CONTRIBUTING.md](../CONTRIBUTING.md)

## 📚 Resources

- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Cloud Storage Documentation](https://firebase.google.com/docs/storage)

## 🐛 Known Issues

- [List known issues here]

## 📝 TODO

- [ ] Implement badge management functions
- [ ] Create quest system
- [ ] Add logging functions
- [ ] Set up notifications
- [ ] Write security rules
- [ ] Add comprehensive tests
- [ ] Deploy to production

## 📄 License

MIT

---

<div align="center">

**Serverless Backend for MeeChain**

[⬆ Back to Top](#-firebase-functions)

</div>
