import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` debe coincidir con el nombre del repositorio para GitHub Pages.
export default defineConfig({
  base: '/vulkron/',
  plugins: [react()],
})
