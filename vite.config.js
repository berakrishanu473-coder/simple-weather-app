import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: "0.0.0.0",
    port: 10000,
    allowedHosts: [
      "simple-weather-app-w1he.onrender.com"
    ]
  }
})
