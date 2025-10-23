# Firebase Functions - Backend Services

Cloud functions สำหรับ Badge, Quest, และ Logging
# 🔥 Firebase Functions

Cloud Functions สำหรับ MeeChain: Badge System, Quest Tracking และ Logging

## 🌟 ฟีเจอร์

- **Badge System** - ระบบให้ badge แก่ contributors
- **Quest Tracking** - ติดตามความคืบหน้าของ quests
- **Event Logging** - บันทึก events และ activities
- **User Management** - จัดการข้อมูลผู้ใช้

## 🚀 เริ่มต้นใช้งาน

### ติดตั้ง

```bash
cd firebase-functions
npm install -g firebase-tools
cd functions
npm install
```

### เข้าสู่ระบบ Firebase

```bash
firebase login
```

### ตั้งค่าโปรเจกต์

```bash
firebase init
```

เลือก:
- Functions
- Firestore
- Hosting (optional)

### รันในโหมด Development

```bash
# Start emulators
firebase emulators:start

# หรือเฉพาะ functions
cd functions
npm run serve
```

### Deploy

```bash
# Deploy ทั้งหมด
firebase deploy

# Deploy เฉพาะ functions
firebase deploy --only functions

# Deploy เฉพาะ function ที่ระบุ
firebase deploy --only functions:awardBadge
```

## 📁 โครงสร้าง

```
firebase-functions/
├── functions/           # Cloud functions source code
│   ├── index.js        # Main entry point
│   ├── badges/         # Badge-related functions
│   ├── quests/         # Quest-related functions
│   └── logging/        # Logging functions
└── firestore.rules     # Firestore security rules
```

## 🚀 Getting Started

### ติดตั้ง Firebase CLI

```bash
npm install -g firebase-tools
```

### Login to Firebase

```bash
firebase login
```

### ติดตั้ง Dependencies

```bash
├── functions/
│   ├── src/
│   │   ├── badge/         # Badge functions
│   │   ├── quest/         # Quest functions
│   │   ├── logging/       # Logging functions
│   │   └── index.ts       # Main entry
│   ├── package.json
│   └── tsconfig.json
├── firestore.rules        # Security rules
├── firestore.indexes.json # Database indexes
└── firebase.json          # Firebase config
```

## 🏆 Badge System

### Award Badge

```typescript
import { awardBadge } from './functions/awardBadge';

// เรียกใช้ function
const result = await awardBadge({
  userId: 'user123',
  badgeType: 'first-contribution',
  metadata: {
    prNumber: 42,
    reason: 'First merged PR'
  }
});
```

### Get User Badges

```typescript
import { getUserBadges } from './functions/awardBadge';

const badges = await getUserBadges({
  userId: 'user123'
});

console.log(`User has ${badges.length} badges`);
```

### Badge Types

- `first-contribution` - PR แรก
- `bug-hunter` - แก้ไข bugs
- `feature-creator` - สร้างฟีเจอร์ใหม่
- `documentation-hero` - ปรับปรุงเอกสาร
- `module-builder` - สร้าง external module
- `active-contributor` - 5+ PRs
- `core-contributor` - 20+ PRs

## 🎯 Quest System

### Create Quest

```typescript
const quest = {
  id: 'learn-smart-contracts',
  title: 'เรียนรู้ Smart Contracts',
  description: 'เรียนรู้พื้นฐาน Smart Contracts',
  tasks: [
    { id: 'task1', title: 'อ่านบทความ', completed: false },
    { id: 'task2', title: 'ทำแบบฝึกหัด', completed: false },
    { id: 'task3', title: 'Deploy contract', completed: false }
  ],
  reward: {
    badge: 'smart-contract-learner',
    points: 100
  }
};

await db.collection('quests').add(quest);
```

### Track Progress

```typescript
export const updateQuestProgress = functions.https.onCall(
  async (data, context) => {
    const { userId, questId, taskId } = data;
    
    // Update task completion
    await db
      .collection('users')
      .doc(userId)
      .collection('quests')
      .doc(questId)
      .update({
        [`tasks.${taskId}.completed`]: true,
        lastUpdated: admin.firestore.FieldValue.serverTimestamp()
      });
    
    // Check if quest is completed
    const quest = await getQuest(userId, questId);
    if (isQuestCompleted(quest)) {
      await awardQuestReward(userId, quest.reward);
    }
    
    return { success: true };
  }
);
```

## 📝 Logging System

### Log Event

```typescript
export const logEvent = functions.https.onCall(
  async (data, context) => {
    const { eventType, userId, metadata } = data;
    
    await db.collection('events').add({
      type: eventType,
      userId,
      metadata,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      source: context.rawRequest.headers['user-agent']
    });
    
    return { success: true };
  }
);
```

### Query Logs

```typescript
// Get recent events
const events = await db
  .collection('events')
  .orderBy('timestamp', 'desc')
  .limit(100)
  .get();

// Get user-specific events
const userEvents = await db
  .collection('events')
  .where('userId', '==', userId)
  .orderBy('timestamp', 'desc')
  .get();
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

### รัน Local Emulator

```bash
firebase emulators:start
```

### Deploy to Firebase

```bash
firebase deploy --only functions
```

## 🎖️ Badge System

### Badge Functions

```javascript
// functions/badges/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Award badge to user
exports.awardBadge = functions.https.onCall(async (data, context) => {
  const { userId, badgeId } = data;
  
  // Verify authentication
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  // Add badge to user
  await admin.firestore()
    .collection('users')
    .doc(userId)
    .collection('badges')
    .doc(badgeId)
    .set({
      awardedAt: admin.firestore.FieldValue.serverTimestamp(),
      badgeId: badgeId
    });
  
  return { success: true };
});

// Get user badges
exports.getUserBadges = functions.https.onCall(async (data, context) => {
  const { userId } = data;
  
  const badges = await admin.firestore()
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
  
  return badges.docs.map(doc => doc.data());
});
```

### Badge Types

```javascript
// functions/badges/types.js
const badgeTypes = {
  FIRST_QUEST: {
    id: 'first-quest',
    name: 'First Steps',
    description: 'Complete your first quest',
    icon: '🎯',
    rarity: 'common'
  },
  STREAK_7: {
    id: 'streak-7',
    name: '7-Day Streak',
    description: 'Complete quests for 7 days straight',
    icon: '🔥',
    rarity: 'rare'
  },
  COMMUNITY: {
    id: 'community',
    name: 'Community Helper',
    description: 'Help other users 10 times',
    icon: '🤝',
    rarity: 'epic'
  }
};
```

## 🎯 Quest System

### Quest Functions

```javascript
// functions/quests/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Create quest
exports.createQuest = functions.https.onCall(async (data, context) => {
  const { title, description, rewards, requirements } = data;
  
  const questRef = await admin.firestore()
    .collection('quests')
    .add({
      title,
      description,
      rewards,
      requirements,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      active: true
    });
  
  return { questId: questRef.id };
});

// Complete quest
exports.completeQuest = functions.https.onCall(async (data, context) => {
  const { userId, questId } = data;
  
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  // Get quest details
  const quest = await admin.firestore()
    .collection('quests')
    .doc(questId)
    .get();
  
  if (!quest.exists) {
    throw new functions.https.HttpsError('not-found', 'Quest not found');
  }
  
  // Mark as completed
  await admin.firestore()
    .collection('users')
    .doc(userId)
    .collection('completedQuests')
    .doc(questId)
    .set({
      questId,
      completedAt: admin.firestore.FieldValue.serverTimestamp(),
      rewards: quest.data().rewards
    });
  
  // Award rewards
  const rewards = quest.data().rewards;
  if (rewards.badge) {
    await awardBadge({ userId, badgeId: rewards.badge });
  }
  
  return { success: true, rewards };
});

// Get available quests
exports.getAvailableQuests = functions.https.onCall(async (data, context) => {
  const { userId } = data;
  
  // Get all active quests
  const quests = await admin.firestore()
    .collection('quests')
    .where('active', '==', true)
    .get();
  
  // Get completed quests
  const completed = await admin.firestore()
    .collection('users')
    .doc(userId)
    .collection('completedQuests')
    .get();
  
  const completedIds = completed.docs.map(doc => doc.id);
  
  // Filter out completed quests
  const available = quests.docs
    .filter(doc => !completedIds.includes(doc.id))
    .map(doc => ({ id: doc.id, ...doc.data() }));
  
  return available;
});
```

## 📊 Logging System

### Log Functions

```javascript
// functions/logging/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Log user action
exports.logAction = functions.https.onCall(async (data, context) => {
  const { userId, action, metadata } = data;
  
  await admin.firestore()
    .collection('logs')
    .add({
      userId,
      action,
      metadata,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
  
  return { success: true };
});

// Log MeeBot interaction
exports.logMeeBotInteraction = functions.https.onCall(async (data, context) => {
  const { userId, message, response, emotion } = data;
  
  await admin.firestore()
    .collection('meebotLogs')
    .add({
      userId,
      message,
      response,
      emotion,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
  
  return { success: true };
});

// Get user logs
exports.getUserLogs = functions.https.onCall(async (data, context) => {
  const { userId, limit = 50 } = data;
  
  const logs = await admin.firestore()
    .collection('logs')
    .where('userId', '==', userId)
    .orderBy('timestamp', 'desc')
    .limit(limit)
    .get();
  
  return logs.docs.map(doc => doc.data());
});
```

## 🔒 Firestore Security Rules

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
      
      // User badges
      match /badges/{badgeId} {
        allow read: if request.auth != null;
        allow write: if false; // Only through cloud functions
      }
      
      // Completed quests
      match /completedQuests/{questId} {
        allow read: if request.auth != null;
        allow write: if false; // Only through cloud functions
      }
    }
    
    // Quests collection
    match /quests/{questId} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.admin == true;
    }
    
    // Logs collection
    match /logs/{logId} {
      allow read: if request.auth.token.admin == true;
      allow write: if false; // Only through cloud functions
    }
  }
}
```

## 🔔 Triggers and Scheduled Functions

### Firestore Triggers

```javascript
// functions/triggers/index.js
const functions = require('firebase-functions');

// Trigger on quest completion
exports.onQuestComplete = functions.firestore
  .document('users/{userId}/completedQuests/{questId}')
  .onCreate(async (snap, context) => {
    const { userId, questId } = context.params;
    const questData = snap.data();
    
    // Send notification
    await sendNotification(userId, {
      title: 'Quest Completed!',
      body: `You earned ${questData.rewards.points} points!`
    });
    
    // Update user stats
    await updateUserStats(userId, questData.rewards);
  });

// Trigger on badge awarded
exports.onBadgeAwarded = functions.firestore
  .document('users/{userId}/badges/{badgeId}')
  .onCreate(async (snap, context) => {
    const { userId, badgeId } = context.params;
    
    // Send notification
    await sendNotification(userId, {
      title: 'New Badge!',
      body: `You earned a new badge: ${badgeId}`
    });
  });
```

### Scheduled Functions

```javascript
// functions/scheduled/index.js
const functions = require('firebase-functions');

// Daily quest reset (runs at midnight)
exports.dailyQuestReset = functions.pubsub
  .schedule('0 0 * * *')
  .timeZone('Asia/Bangkok')
  .onRun(async (context) => {
    // Reset daily quests
    const batch = admin.firestore().batch();
    
    const dailyQuests = await admin.firestore()
      .collection('quests')
      .where('type', '==', 'daily')
      .get();
    
    dailyQuests.forEach(doc => {
      batch.update(doc.ref, { active: true });
    });
    
    await batch.commit();
    console.log('Daily quests reset');
  });
```

## 🔧 Configuration

### Firebase Config

```javascript
// functions/config/firebase.js
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://your-project.firebaseio.com'
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { admin, db, auth };
```

### Environment Variables

```bash
# Set config
firebase functions:config:set service.key="value"

# Get config
firebase functions:config:get
```

## 🧪 Testing

### Unit Tests

```javascript
// functions/test/badges.test.js
const test = require('firebase-functions-test')();
const admin = require('firebase-admin');
const { awardBadge } = require('../badges');

describe('Badge Functions', () => {
  it('should award badge to user', async () => {
    const wrapped = test.wrap(awardBadge);
    const result = await wrapped({ 
      userId: 'user123', 
      badgeId: 'first-quest' 
    });
    
    expect(result.success).toBe(true);
  });
});
```

## 📚 เพิ่มเติม

- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)

---

> "Backend ที่ดีคือหัวใจของระบบ" - MeeBot 💙
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

```javascript
// firestore.rules
### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
      
      // Badges subcollection
      match /badges/{badgeId} {
        allow read: if request.auth != null;
        allow write: if false; // Only functions can write badges
      }
    }
    
    // Public read for quests
    match /quests/{questId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## 📊 Database Schema

### Users Collection

```typescript
interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  badgeCount: number;
  points: number;
  level: number;
  createdAt: Timestamp;
  lastBadgeEarned?: string;
  lastBadgeEarnedAt?: Timestamp;
}
```

### Badges Subcollection

```typescript
interface UserBadge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  earnedAt: Timestamp;
  count: number;
  metadata?: any;
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

```typescript
import * as test from 'firebase-functions-test';

const testEnv = test();

describe('awardBadge', () => {
  it('should award badge to user', async () => {
    const wrapped = testEnv.wrap(awardBadge);
    
    const result = await wrapped({
      userId: 'testuser',
      badgeType: 'first-contribution'
    });
    
    expect(result.success).toBe(true);
  });
});
```

### Integration Tests
```bash
npm test
```

### Emulator Testing

```bash
# Start emulators
firebase emulators:start

# Run tests
npm test
```

## 📈 Monitoring

### View Logs

```bash
firebase functions:log
```

### Monitor Performance

```bash
firebase functions:config:get
```

## 🌐 Environment Variables

```bash
# Set config
firebase functions:config:set api.key="YOUR_API_KEY"

# Get config
firebase functions:config:get

# Use in code
const apiKey = functions.config().api.key;
```

## 📚 เอกสารเพิ่มเติม

- [Firebase Functions Documentation](https://firebase.google.com/docs/functions)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)

## 🤝 การมีส่วนร่วม

อ่าน [CONTRIBUTING.md](../CONTRIBUTING.md) สำหรับรายละเอียด
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
