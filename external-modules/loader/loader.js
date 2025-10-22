/**
 * Module Loader for MeeChain External Modules
 * Dynamically loads and manages external modules from GitHub or local filesystem
 */

const fs = require('fs').promises;
const path = require('path');

class ModuleLoader {
  constructor(config = {}) {
    this.registryPath = config.registryPath || './registry.json';
    this.modulesPath = config.modulesPath || './modules';
    this.loadedModules = new Map();
    this.registry = null;
  }

  /**
   * Initialize the loader by loading the registry
   */
  async initialize() {
    try {
      const registryContent = await fs.readFile(this.registryPath, 'utf8');
      this.registry = JSON.parse(registryContent);
      console.log(`✅ Loaded registry with ${this.registry.modules.length} modules`);
    } catch (error) {
      console.error('❌ Failed to load registry:', error.message);
      this.registry = { modules: [] };
    }
  }

  /**
   * Get module info from registry
   * @param {string} moduleId - Module ID
   * @returns {Object|null} Module info
   */
  getModuleInfo(moduleId) {
    if (!this.registry) {
      throw new Error('Registry not initialized. Call initialize() first.');
    }
    return this.registry.modules.find(m => m.id === moduleId) || null;
  }

  /**
   * Load a module by ID
   * @param {string} moduleId - Module ID
   * @returns {Promise<Object>} Loaded module instance
   */
  async load(moduleId) {
    // Check if already loaded
    if (this.loadedModules.has(moduleId)) {
      console.log(`ℹ️ Module '${moduleId}' already loaded`);
      return this.loadedModules.get(moduleId);
    }

    // Get module info
    const moduleInfo = this.getModuleInfo(moduleId);
    if (!moduleInfo) {
      throw new Error(`Module '${moduleId}' not found in registry`);
    }

    try {
      // Load module from filesystem (using absolute path)
      const modulePath = path.resolve(this.modulesPath, moduleInfo.path, moduleInfo.entry);
      const ModuleClass = require(modulePath);
      
      // Create instance
      const moduleInstance = new ModuleClass(moduleInfo);
      
      // Call onLoad if exists
      if (typeof moduleInstance.onLoad === 'function') {
        await moduleInstance.onLoad();
      }

      // Store instance
      this.loadedModules.set(moduleId, moduleInstance);
      
      console.log(`✅ Loaded module '${moduleId}'`);
      return moduleInstance;
    } catch (error) {
      console.error(`❌ Failed to load module '${moduleId}':`, error.message);
      throw error;
    }
  }

  /**
   * Unload a module
   * @param {string} moduleId - Module ID
   */
  async unload(moduleId) {
    const moduleInstance = this.loadedModules.get(moduleId);
    
    if (!moduleInstance) {
      console.log(`ℹ️ Module '${moduleId}' not loaded`);
      return;
    }

    // Call onUnload if exists
    if (typeof moduleInstance.onUnload === 'function') {
      await moduleInstance.onUnload();
    }

    // Remove from cache
    this.loadedModules.delete(moduleId);
    console.log(`✅ Unloaded module '${moduleId}'`);
  }

  /**
   * Reload a module
   * @param {string} moduleId - Module ID
   */
  async reload(moduleId) {
    await this.unload(moduleId);
    return await this.load(moduleId);
  }

  /**
   * List all available modules
   * @returns {Array} List of module info
   */
  listModules() {
    if (!this.registry) {
      throw new Error('Registry not initialized. Call initialize() first.');
    }
    return this.registry.modules.map(m => ({
      id: m.id,
      name: m.name,
      version: m.version,
      description: m.description,
      author: m.author,
      verified: m.verified,
      loaded: this.loadedModules.has(m.id)
    }));
  }

  /**
   * Execute a module
   * @param {string} moduleId - Module ID
   * @param {Object} context - Execution context
   * @returns {Promise<Object>} Execution result
   */
  async execute(moduleId, context = {}) {
    let module = this.loadedModules.get(moduleId);
    
    // Auto-load if not loaded
    if (!module) {
      module = await this.load(moduleId);
    }

    // Execute
    return await module.execute(context);
  }

  /**
   * Search modules by tag
   * @param {string} tag - Tag to search
   * @returns {Array} Matching modules
   */
  searchByTag(tag) {
    if (!this.registry) {
      throw new Error('Registry not initialized. Call initialize() first.');
    }
    return this.registry.modules.filter(m => 
      m.tags && m.tags.includes(tag)
    );
  }

  /**
   * Get MeeBot compatible modules
   * @returns {Array} MeeBot modules
   */
  getMeeBotModules() {
    if (!this.registry) {
      throw new Error('Registry not initialized. Call initialize() first.');
    }
    return this.registry.modules.filter(m => 
      m.meebot && m.meebot.enabled
    );
  }

  /**
   * Load module from GitHub (placeholder for future implementation)
   * @param {Object} options - GitHub options
   * @returns {Promise<Object>} Module instance
   */
  async loadFromGitHub(options) {
    const { owner, repo, path: modulePath } = options;
    
    console.log(`🔄 Loading module from GitHub: ${owner}/${repo}/${modulePath}`);
    
    // TODO: Implement GitHub API integration
    // This would:
    // 1. Fetch module files from GitHub
    // 2. Cache them locally
    // 3. Load the module
    
    throw new Error('GitHub loading not yet implemented. Coming soon!');
  }

  /**
   * Get loader statistics
   * @returns {Object} Statistics
   */
  getStats() {
    return {
      totalModules: this.registry ? this.registry.modules.length : 0,
      loadedModules: this.loadedModules.size,
      verifiedModules: this.registry ? 
        this.registry.modules.filter(m => m.verified).length : 0,
      meebotModules: this.getMeeBotModules().length
    };
  }
}

module.exports = ModuleLoader;
