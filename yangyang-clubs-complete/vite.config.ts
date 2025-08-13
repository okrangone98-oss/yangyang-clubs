import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/yangyang-clubs/',   // 리포지토리명이 다르면 '/리포명/' 으로 변경
})
