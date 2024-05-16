import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(GetVitePWAOptions())],
})

function GetVitePWAOptions(): Partial<VitePWAOptions> {
  return {
    registerType: 'prompt',
    devOptions: {
      enabled: true,
    },
    injectRegister: 'auto',
    workbox: {
      globPatterns: ['**/*'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    },
    manifest: {
      name: 'סופר-פארם | קופות',
      short_name: 'סופר-פארם',
      description: 'סופר-פארם | קופות"',
      theme_color: '#1E3F9E',
      background_color: '#1E3F9E',
      display: 'standalone',
      // scope: '/',
      // start_url: '/',
      icons: [
        {
          src: './icons/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
        }
      ],
    },
  };
}
