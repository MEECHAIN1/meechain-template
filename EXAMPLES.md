# ตัวอย่างการใช้งาน MeeChain Template

ตัวอย่างโค้ดสำหรับใช้งานโมดูลต่างๆ ใน MeeChain Template

## 1. Deploy Smart Contract

```typescript
import { ethers } from 'ethers';
import { deployContract, verifyDeployment } from './external-modules/smart-contracts';

async function example1() {
  // เชื่อมต่อกับ MeeChain network
  const provider = new ethers.JsonRpcProvider('https://rpc.meechain.network');
  const privateKey = 'YOUR_PRIVATE_KEY'; // เปลี่ยนเป็น private key ของคุณ
  const wallet = new ethers.Wallet(privateKey, provider);

  // สมมติว่ามี ABI และ bytecode
  const myTokenABI = [/* ... */];
  const myTokenBytecode = '0x...';

  // Deploy contract
  const result = await deployContract(provider, wallet, {
    contractName: 'MyToken',
    abi: myTokenABI,
    bytecode: myTokenBytecode,
    constructorArgs: ['MyToken', 'MTK', 18],
    gasLimit: 5000000
  });

  console.log('Deployment Result:');
  console.log(`Address: ${result.address}`);
  console.log(`Transaction Hash: ${result.transactionHash}`);
  console.log(`Block Number: ${result.blockNumber}`);
  console.log(`Gas Used: ${result.gasUsed}`);

  // ตรวจสอบว่า deploy สำเร็จ
  const isDeployed = await verifyDeployment(provider, result.address);
  console.log(`Contract verified: ${isDeployed}`);
}
```

## 2. Format Progress Display

```typescript
import { 
  formatProgress, 
  formatProgressSummary,
  calculateOverallProgress 
} from './external-modules/shared-utils';

async function example2() {
  // แสดง progress ของ quest เดียว
  const singleProgress = formatProgress({
    current: 7,
    total: 10,
    questName: 'Complete Smart Contract Quest',
    moduleName: 'deployContract'
  });

  console.log(singleProgress.message);
  console.log(`Percentage: ${singleProgress.percentage}%`);
  console.log(`Status: ${singleProgress.status}`);

  // แสดง progress ของหลาย quests
  const multipleQuests = [
    { 
      current: 10, 
      total: 10, 
      questName: 'Deploy First Contract',
      moduleName: 'smart-contracts'
    },
    { 
      current: 5, 
      total: 10, 
      questName: 'Create 10 Transactions',
      moduleName: 'transactions'
    },
    { 
      current: 0, 
      total: 10, 
      questName: 'Earn First Badge',
      moduleName: 'badges'
    }
  ];

  const summary = formatProgressSummary(multipleQuests);
  console.log(summary);

  // คำนวณ overall progress
  const overall = calculateOverallProgress(multipleQuests);
  console.log(`Overall Progress: ${overall}%`);
}
```

## 3. Award Badges to Users

```typescript
import { 
  awardBadge, 
  hasBadge, 
  getUserBadges,
  calculateUserPoints,
  AVAILABLE_BADGES 
} from './firebase-functions/functions';

async function example3() {
  const userId = 'user123';

  // มอบ badge ให้ผู้ใช้
  const result = await awardBadge(
    userId,
    'first-quest',
    'quest001',
    { source: 'web', timestamp: Date.now() }
  );

  if (result.success) {
    console.log(`✅ ${result.message}`);
    console.log(`Badge: ${result.badge?.name} ${result.badge?.icon}`);
    console.log(`Points: +${result.badge?.points}`);
  } else {
    console.log(`❌ ${result.message}`);
  }

  // ตรวจสอบว่าผู้ใช้มี badge หรือไม่
  const hasFirstQuest = await hasBadge(userId, 'first-quest');
  console.log(`Has first quest badge: ${hasFirstQuest}`);

  // ดึงข้อมูล badge ทั้งหมดของผู้ใช้
  const userBadges = await getUserBadges(userId);
  console.log(`User has ${userBadges.length} badges`);

  // คำนวณคะแนนรวม
  const totalPoints = await calculateUserPoints(userId);
  console.log(`Total points: ${totalPoints}`);

  // แสดง badge ทั้งหมดที่มี
  console.log('\nAvailable Badges:');
  Object.values(AVAILABLE_BADGES).forEach(badge => {
    console.log(`${badge.icon} ${badge.name} (${badge.rarity}) - ${badge.points} points`);
  });
}
```

## 4. รวมทุกอย่างเข้าด้วยกัน

```typescript
import { ethers } from 'ethers';
import { deployContract } from './external-modules/smart-contracts';
import { formatProgress } from './external-modules/shared-utils';
import { awardBadge } from './firebase-functions/functions';

async function completeWorkflow() {
  const userId = 'user123';
  const questId = 'deploy-smart-contract-quest';

  // 1. แสดง progress เริ่มต้น
  console.log('Starting quest...');
  const initialProgress = formatProgress({
    current: 0,
    total: 3,
    questName: 'Deploy Smart Contract Quest',
    moduleName: 'workflow'
  });
  console.log(initialProgress.message);

  // 2. Deploy smart contract
  const provider = new ethers.JsonRpcProvider('https://rpc.meechain.network');
  const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
  
  console.log('\nStep 1: Deploying contract...');
  // (deployment code here)
  
  const progress1 = formatProgress({
    current: 1,
    total: 3,
    questName: 'Deploy Smart Contract Quest',
    moduleName: 'workflow'
  });
  console.log(progress1.message);

  // 3. Verify deployment
  console.log('\nStep 2: Verifying deployment...');
  // (verification code here)
  
  const progress2 = formatProgress({
    current: 2,
    total: 3,
    questName: 'Deploy Smart Contract Quest',
    moduleName: 'workflow'
  });
  console.log(progress2.message);

  // 4. Award badge
  console.log('\nStep 3: Awarding badge...');
  const badgeResult = await awardBadge(
    userId,
    'smart-contract-deployer',
    questId
  );
  
  if (badgeResult.success) {
    console.log(`\n🎉 Quest completed!`);
    console.log(`Badge awarded: ${badgeResult.badge?.name}`);
    console.log(`Points earned: +${badgeResult.badge?.points}`);
  }

  const finalProgress = formatProgress({
    current: 3,
    total: 3,
    questName: 'Deploy Smart Contract Quest',
    moduleName: 'workflow'
  });
  console.log('\n' + finalProgress.message);
}
```

## 5. การรัน Examples

```bash
# Build project ก่อน
npm run build

# รัน examples (ถ้ามี TypeScript node)
npx ts-node examples.ts

# หรือ compile แล้วรัน
tsc examples.ts
node examples.js
```

## 📝 หมายเหตุ

- เปลี่ยน `YOUR_PRIVATE_KEY` เป็น private key จริงของคุณ
- ใน production ไม่ควรเก็บ private key ในโค้ด ให้ใช้ environment variables
- ตัวอย่างบาง functions อาจต้องการการตั้งค่า Firebase เพิ่มเติม
- สำหรับการใช้งานจริง ควรมี error handling ที่ดีกว่านี้

## 🔗 ข้อมูลเพิ่มเติม

- [External Modules Documentation](./external-modules/README.md)
- [Firebase Functions Documentation](./firebase-functions/README.md)
- [Main README](./README.md)
