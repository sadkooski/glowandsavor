import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/glow-savor/', // ZMIEŃ na nazwę swojego repozytorium
  build: {
    outDir: 'dist', // Folder, gdzie będzie generowany build
  },
});