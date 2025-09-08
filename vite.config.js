// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import Sitemap from 'vite-plugin-sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      // Your canonical site URL
      hostname: 'https://ayatiworks.com',

      // Make sure this matches build.outDir and Vercel’s Output Directory
      outDir: 'dist',

      // Generate robots.txt alongside sitemap.xml
      generateRobotsTxt: false,
      robots: [{ userAgent: '*', allow: '/' }],

      // Optional niceties
      changefreq: 'weekly',
      priority: 0.7,
      // enforce: 'post' // (uncomment if you use other plugins that emit late)
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true, // ensures folder exists cleanly before plugin writes
  },

  base: '/', // keep for SPA on Vercel
  server: { port: 3002 },
});
