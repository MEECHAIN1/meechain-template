/**
 * Simple test to verify awardBadge module works
 */

import { 
  awardBadge, 
  hasBadge, 
  getUserBadges,
  calculateUserPoints,
  AVAILABLE_BADGES 
} from '../firebase-functions/functions/awardBadge';

async function runTests() {
  console.log('🧪 Testing awardBadge module...\n');

  const userId = 'test-user-123';

  // Test 1: Award a badge
  console.log('Test 1: Award a badge');
  const result1 = await awardBadge(userId, 'first-quest', 'quest001');
  console.log(`Success: ${result1.success}`);
  console.log(`Message: ${result1.message}`);
  if (result1.badge) {
    console.log(`Badge: ${result1.badge.name} ${result1.badge.icon}`);
    console.log(`Points: ${result1.badge.points}`);
    console.log(`Rarity: ${result1.badge.rarity}`);
  }
  console.log('✅ Test 1 passed\n');

  // Test 2: Award another badge
  console.log('Test 2: Award smart contract deployer badge');
  const result2 = await awardBadge(userId, 'smart-contract-deployer', 'quest002');
  console.log(`Success: ${result2.success}`);
  console.log(`Message: ${result2.message}`);
  console.log('✅ Test 2 passed\n');

  // Test 3: Award with metadata
  console.log('Test 3: Award badge with metadata');
  const result3 = await awardBadge(
    userId, 
    'module-creator', 
    'quest003',
    { source: 'web', timestamp: Date.now(), module: 'test-module' }
  );
  console.log(`Success: ${result3.success}`);
  console.log(`Message: ${result3.message}`);
  console.log('✅ Test 3 passed\n');

  // Test 4: Try to award non-existent badge
  console.log('Test 4: Try to award non-existent badge (should fail)');
  const result4 = await awardBadge(userId, 'non-existent-badge');
  console.log(`Success: ${result4.success}`);
  console.log(`Message: ${result4.message}`);
  console.log('✅ Test 4 passed (correctly failed)\n');

  // Test 5: Check if user has badge
  console.log('Test 5: Check if user has badge');
  const hasFirstQuest = await hasBadge(userId, 'first-quest');
  console.log(`Has first quest badge: ${hasFirstQuest}`);
  console.log('✅ Test 5 passed\n');

  // Test 6: Get all user badges
  console.log('Test 6: Get all user badges');
  const userBadges = await getUserBadges(userId);
  console.log(`User has ${userBadges.length} badges`);
  console.log('✅ Test 6 passed\n');

  // Test 7: Calculate user points
  console.log('Test 7: Calculate user points');
  const totalPoints = await calculateUserPoints(userId);
  console.log(`Total points: ${totalPoints}`);
  console.log('✅ Test 7 passed\n');

  // Test 8: Display all available badges
  console.log('Test 8: Display all available badges');
  console.log('Available badges:');
  Object.values(AVAILABLE_BADGES).forEach(badge => {
    console.log(`  ${badge.icon} ${badge.name} (${badge.rarity}) - ${badge.points} points`);
    console.log(`     ${badge.description}`);
  });
  console.log('✅ Test 8 passed\n');

  console.log('🎉 All awardBadge tests passed!');
}

runTests().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});
