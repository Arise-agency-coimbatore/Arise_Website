import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        poster: resolve(__dirname, 'poster-design.html'),
        logo: resolve(__dirname, 'logo-design.html'),
        social: resolve(__dirname, 'social-media.html')
      }
    }
  }
})
