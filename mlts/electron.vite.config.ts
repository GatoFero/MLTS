import { join, resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer/src')
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: join(__dirname, 'src/renderer/index.html')
        }
      }
    },
    plugins: [react()],
    server: {
      headers: {
        'Content-Security-Policy': "default-src 'self'; img-src 'self' data:;"
      }
    }
  }
})
