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
