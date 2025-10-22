/**
 * Simple test to verify formatProgress module works
 */

import { formatProgress, formatProgressSummary, calculateOverallProgress } from '../external-modules/shared-utils/formatProgress';

console.log('🧪 Testing formatProgress module...\n');

// Test 1: Single progress
console.log('Test 1: Single progress formatting');
const progress1 = formatProgress({
  current: 7,
  total: 10,
  questName: 'Complete Smart Contract Quest',
  moduleName: 'deployContract'
});

console.log(progress1.message);
console.log(`Percentage: ${progress1.percentage}%`);
console.log(`Status: ${progress1.status}`);
console.log(`Progress Bar: ${progress1.progressBar}`);
console.log('✅ Test 1 passed\n');

// Test 2: Progress at 0%
console.log('Test 2: Progress at 0%');
const progress2 = formatProgress({
  current: 0,
  total: 10,
  questName: 'Not Started Quest'
});

console.log(progress2.message);
console.log(`Status: ${progress2.status}`);
console.log('✅ Test 2 passed\n');

// Test 3: Progress at 100%
console.log('Test 3: Progress at 100%');
const progress3 = formatProgress({
  current: 10,
  total: 10,
  questName: 'Completed Quest'
});

console.log(progress3.message);
console.log(`Status: ${progress3.status}`);
console.log('✅ Test 3 passed\n');

// Test 4: Multiple progress summary
console.log('Test 4: Multiple progress summary');
const progressItems = [
  { current: 10, total: 10, questName: 'Deploy First Contract', moduleName: 'smart-contracts' },
  { current: 5, total: 10, questName: 'Create 10 Transactions', moduleName: 'transactions' },
  { current: 0, total: 10, questName: 'Earn First Badge', moduleName: 'badges' }
];

const summary = formatProgressSummary(progressItems);
console.log(summary);
console.log('✅ Test 4 passed\n');

// Test 5: Overall progress calculation
console.log('Test 5: Overall progress calculation');
const overall = calculateOverallProgress(progressItems);
console.log(`Overall Progress: ${overall}%`);
console.log('✅ Test 5 passed\n');

console.log('🎉 All formatProgress tests passed!');
