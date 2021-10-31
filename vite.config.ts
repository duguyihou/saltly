import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
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
      { find: '@config', replacement: path.resolve(__dirname, './src/config') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
})
