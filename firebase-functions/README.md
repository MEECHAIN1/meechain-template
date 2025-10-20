# Firebase Functions - Backend Services

Cloud functions สำหรับ Badge, Quest, และ Logging

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
