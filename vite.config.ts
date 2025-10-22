import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

server: {
    host: '127.0.0.1',
    port: 3000,
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:8080',
            changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
