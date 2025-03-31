import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: './', // Zmień na nazwę swojego repo, jeśli potrzebujesz
  build: {
    outDir: 'dist',
  },
  define: {
    'global.crypto': '{}',  // Fix dla błędu z crypto
  },
});