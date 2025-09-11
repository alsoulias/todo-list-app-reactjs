import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // points to project root where index.html lives
  build: {
    outDir: 'dist', // default output folder
    emptyOutDir: true, // clears old builds
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'reactjs-todolist/src'), // optional, nice for imports
    },
  },
});