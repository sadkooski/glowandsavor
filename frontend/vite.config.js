import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: './', // Ustawienie bazy na repozytorium
  build: {
    outDir: 'dist', // Folder, gdzie będzie generowany build
  },
  define: {
    'globalThis.crypto': 'require("crypto")', // Polifil dla getRandomValues
  },
});