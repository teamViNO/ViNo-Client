import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import paths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), paths(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend.vi-no.site/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
