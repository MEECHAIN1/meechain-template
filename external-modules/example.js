/**
 * Example: Using the Module Loader
 * 
 * This example demonstrates how to use the MeeChain External Module Loader
 */

const ModuleLoader = require('./loader/loader');
const path = require('path');

async function main() {
  console.log('🚀 MeeChain Module Loader Example\n');

  // Initialize the loader
  const loader = new ModuleLoader({
    registryPath: path.join(__dirname, 'registry.json'),
    modulesPath: path.join(__dirname, 'modules')
  });

  await loader.initialize();
  console.log('✅ Loader initialized\n');

  // List all available modules
  console.log('📋 Available Modules:');
  const modules = loader.listModules();
  modules.forEach(module => {
    console.log(`  - ${module.name} (${module.id}) v${module.version}`);
    console.log(`    ${module.description}`);
    console.log(`    Verified: ${module.verified ? '✅' : '❌'}`);
    console.log('');
  });

  // Example 1: Using Greeting Module
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Example 1: Greeting Module\n');

  const greetingResult = await loader.execute('greeting', {
    user: { name: 'MeeChain Developer' },
    input: 'สวัสดี'
  });

  console.log('Result:', greetingResult);
  console.log('');

  // Example 2: Using Calculator Module
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Example 2: Calculator Module\n');

  const calcResult = await loader.execute('calculator', {
    input: '(5 + 3) * 2'
  });

  console.log('Result:', calcResult);
  console.log('');

  // Example 3: Search modules by tag
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Example 3: Search by Tag\n');

  const meebotModules = loader.getMeeBotModules();
  console.log('MeeBot-compatible modules:');
  meebotModules.forEach(module => {
    console.log(`  - ${module.name}`);
    console.log(`    Triggers: ${module.meebot.trigger.join(', ')}`);
  });
  console.log('');

  // Example 4: Get loader stats
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Example 4: Loader Statistics\n');

  const stats = loader.getStats();
  console.log('Statistics:');
  console.log(`  Total Modules: ${stats.totalModules}`);
  console.log(`  Loaded Modules: ${stats.loadedModules}`);
  console.log(`  Verified Modules: ${stats.verifiedModules}`);
  console.log(`  MeeBot Modules: ${stats.meebotModules}`);
  console.log('');

  // Example 5: Load and use module directly
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Example 5: Direct Module Usage\n');

  const greetingModule = await loader.load('greeting');
  const help = greetingModule.getHelp();
  console.log('Greeting Module Help:', help);

  // Cleanup
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🧹 Cleaning up...\n');

  await loader.unload('greeting');
  await loader.unload('calculator');

  console.log('✅ Example completed!');
}

// Run the example
main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
