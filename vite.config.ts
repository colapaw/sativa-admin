import { fileURLToPath, URL } from 'url';

import { defineConfig, loadEnv } from 'vite';
import { setupPlugins } from './build/vite/plugins';

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;

  return {
    plugins: setupPlugins(viteEnv),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});
