import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: { plugins: [autoprefixer()] },
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@shared', replacement: path.resolve(__dirname, './src/shared') },
      {
        find: '@cmpts',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@modules',
        replacement: path.resolve(__dirname, './src/modules'),
      },
      {
        find: '@typings',
        replacement: path.resolve(__dirname, './src/typings'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
})
