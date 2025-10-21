import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    allowedHosts: [''],
    host: true, // Cho phép truy cập từ mọi host
  },
  base: '/', // Đảm bảo đúng base path khi deploy
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['moment', 'moment/locale/vi']
  }
  
})
