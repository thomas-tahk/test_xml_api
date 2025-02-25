import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    cors: {
      origin: ['localhost:5174']
    }
  }
})
