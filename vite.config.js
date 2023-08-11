import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Absolute paths config
  resolve: {
    alias: {
      '@admin': '/src/admin',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@pages': '/src/pages',
    }
  }
})
