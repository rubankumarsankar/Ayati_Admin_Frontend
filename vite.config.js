import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    Sitemap({
          hostname: 'https://ayatiworks.com', 
          generateRobotsTxt: true,
        }),
  ],
   resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }, 
    },
  build: {
    outDir: 'dist', 
  },
  server: {
    port: 3002,
  },
  base: '/',
   
})
