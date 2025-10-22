/**
 * Test for Calculator Module
 */

const CalculatorModule = require('./index');

async function test() {
  console.log('🧪 Testing Calculator Module...\n');

  const calc = new CalculatorModule();

  // Test 1: Basic addition
  console.log('Test 1: Basic addition');
  const result1 = await calc.execute({ input: '2 + 2' });
  console.log('Result:', result1);
  console.assert(result1.data.result === 4, 'Addition failed');
  console.log('✅ Test 1 passed\n');

  // Test 2: Multiplication
  console.log('Test 2: Multiplication');
  const result2 = await calc.execute({ input: '10 * 5' });
  console.log('Result:', result2);
  console.assert(result2.data.result === 50, 'Multiplication failed');
  console.log('✅ Test 2 passed\n');

  // Test 3: Complex expression
  console.log('Test 3: Complex expression');
  const result3 = await calc.execute({ input: '(5 + 3) * 2' });
  console.log('Result:', result3);
  console.assert(result3.data.result === 16, 'Complex expression failed');
  console.log('✅ Test 3 passed\n');

  // Test 4: Power
  console.log('Test 4: Power');
  const result4 = await calc.execute({ input: '2 ** 3' });
  console.log('Result:', result4);
  console.assert(result4.data.result === 8, 'Power operation failed');
  console.log('✅ Test 4 passed\n');

  // Test 5: Modulo
  console.log('Test 5: Modulo');
  const result5 = await calc.execute({ input: '10 % 3' });
  console.log('Result:', result5);
  console.assert(result5.data.result === 1, 'Modulo operation failed');
  console.log('✅ Test 5 passed\n');

  // Test 6: Decimals
  console.log('Test 6: Decimals');
  const result6 = await calc.execute({ input: '10.5 + 2.3' });
  console.log('Result:', result6);
  console.assert(Math.abs(result6.data.result - 12.8) < 0.001, 'Decimal operation failed');
  console.log('✅ Test 6 passed\n');

  // Test 7: Invalid input
  console.log('Test 7: Invalid input');
  const result7 = await calc.execute({ input: 'abc' });
  console.log('Result:', result7);
  console.assert(result7.success === false, 'Validation should fail for invalid input');
  console.log('✅ Test 7 passed\n');

  // Test 8: Get help
  console.log('Test 8: Get help');
  const help = calc.getHelp();
  console.log('Help:', help);
  console.log('✅ Test 8 passed\n');

  console.log('✅ All tests passed!');
}

test().catch(console.error);
