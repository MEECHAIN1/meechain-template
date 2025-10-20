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
