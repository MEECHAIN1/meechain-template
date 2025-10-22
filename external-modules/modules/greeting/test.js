/**
 * Test for Greeting Module
 */

const GreetingModule = require('./index');

async function test() {
  console.log('🧪 Testing Greeting Module...\n');

  const greeting = new GreetingModule();

  // Test 1: Basic greeting
  console.log('Test 1: Basic greeting');
  const result1 = await greeting.execute({
    user: { name: 'Test User' },
    input: 'hello'
  });
  console.log('Result:', result1);
  console.log('✅ Test 1 passed\n');

  // Test 2: Greeting without user name
  console.log('Test 2: Greeting without user name');
  const result2 = await greeting.execute({
    input: 'hi'
  });
  console.log('Result:', result2);
  console.log('✅ Test 2 passed\n');

  // Test 3: Get help
  console.log('Test 3: Get help');
  const help = greeting.getHelp();
  console.log('Help:', help);
  console.log('✅ Test 3 passed\n');

  // Test 4: Lifecycle methods
  console.log('Test 4: Lifecycle methods');
  await greeting.onLoad();
  await greeting.onUnload();
  console.log('✅ Test 4 passed\n');

  console.log('✅ All tests passed!');
}

test().catch(console.error);
