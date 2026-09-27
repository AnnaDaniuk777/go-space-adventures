import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      logStats: true,
      svg: {
        multipass: true,
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
        progressive: true,
      },
      jpg: {
        quality: 80,
        progressive: true,
      },
      cache: true,
      cacheLocation: './.cache',
    }),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    cssTarget: ['chrome113', 'edge113', 'firefox88', 'safari17'],
  },
  server: {
    port: 3000,
  },
});
