// Example custom hook for using external modules
import { useState, useEffect } from 'react';

/**
 * Hook สำหรับโหลด external modules แบบ dynamic
 * @param {string} modulePath - path ของ module ที่ต้องการโหลด
 * @returns {Object} - { module, loading, error }
 */
export function useExternalModules(modulePath) {
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function loadModule() {
      try {
        setLoading(true);
        // Dynamic import external module
        const mod = await import(`@/external-modules/${modulePath}`);
        setModule(mod);
        setError(null);
      } catch (err) {
        console.error("Failed to load external module:", err);
        setError(err);
        setModule(null);
      } finally {
        setLoading(false);
      }
    }
    
    if (modulePath) {
      loadModule();
    }
  }, [modulePath]);
  
  return { module, loading, error };
}
