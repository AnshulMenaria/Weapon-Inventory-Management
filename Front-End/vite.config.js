import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
     host: '0.0.0.0',
    proxy: {
      '/api': 'http://172.20.10.2:8000'
      
    },
  },

  plugins: [react()],
})
