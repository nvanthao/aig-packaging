import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/aig-packaging/",
  build: {
    assetsDir: "aig-packaging/assets/"
  }
})
