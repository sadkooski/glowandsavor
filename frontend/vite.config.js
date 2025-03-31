import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: './', // Zmienione na nazwę Twojego repozytorium, jeśli potrzebujesz
  build: {
    outDir: 'dist', // Folder, w którym będzie generowany build
  },
  resolve: {
    alias: {
      // Zastępujemy 'crypto' z wbudowanego modułu na 'crypto-browserify'
      crypto: 'crypto-browserify',
    },
  },
});