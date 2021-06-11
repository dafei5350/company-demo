import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }) => defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
  },
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1/api/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/image': {
        target: ''
      }
    }
  }
})
