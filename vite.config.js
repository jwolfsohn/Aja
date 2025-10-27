import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Aja/',
  // Copy photos folder to dist during build
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})

