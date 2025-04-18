import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel
  build: {
    outDir: 'dist',
  },
  define: {
    'global.crypto': '{}',  // Fix dla błędu z crypto
  },
});