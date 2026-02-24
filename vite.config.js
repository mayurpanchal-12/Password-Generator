
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'



export default defineConfig({
  plugins: [react(),
     tailwindcss(),
 
  VitePWA({
  registerType: 'autoUpdate',
  injectRegister: 'auto', // Automatically injects the SW registration
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // Caches all assets for offline use
    navigateFallback: '/index.html', // Essential for React Router to work inside PWA
  },
  devOptions: {
    enabled: true // Allows you to test PWA features during 'npm run dev'
  },
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
  manifest: {
    name: 'Secure Password Generator',
    short_name: 'PassGen',
    start_url: '/',
    scope: '/',
    description: 'Generate secure passwords offline',
    theme_color: '#0f172a',
    background_color: '#0f172a',
    display: 'standalone',
    icons: [
      {
        src: 'logo.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'logo-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  }
})
  ],
})
