import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: [
        "**/*",
      ],
      manifest: {
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "short_name": "Vite PWA",
        "description": "Vite PWA Boilerplate",
        "name": "Vite PWA Boilerplate",
        "icons": [
          {
            "src": "android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      },
    }),
  ],
});
