import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Jazz/', // 重要：这里必须匹配你的 GitHub 仓库名
})