// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import Sitemap from 'vite-plugin-sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// List SPA routes you want in the sitemap
const dynamicRoutes = [
  '/',                       // home
  '/about',
  '/services',
  '/contact',
  // add more real routes from your app:
  // '/content-as-a-strategy/multilingual-marketing',
  // '/digital-pr',
  // '/case-studies/jeep-india-independence-day-merchandise',
];

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      // Your canonical site URL
      hostname: 'https://ayatiworks.com',

      // Matches Vite build output
      outDir: 'dist',

      // Important for SPAs: include client-only routes
      dynamicRoutes, // <- add your routes here

      // Optional: exclude private areas
      exclude: ['/admin', '/dashboard', '/private'],

      // Emit robots.txt (you had this off)
      generateRobotsTxt: true,
      robots: [
        { userAgent: '*', disallow: [''] } // allow everything (or set disallow paths)
      ],

      // Optional niceties
      changefreq: 'weekly',
      priority: 0.7,
      // readable: true, // pretty-print XML if you like
      // enforce: 'post',
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  base: '/',
  server: { port: 3002 },
});
