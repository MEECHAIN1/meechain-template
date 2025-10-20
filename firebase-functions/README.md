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
```

## 🔐 Security Rules

```javascript
// firestore.rules
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
