import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        tugas35_1: "tugas35-1.html",
        tugas35_2: "tugas35-2.html",
      }
    }
  }
})
