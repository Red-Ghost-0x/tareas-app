import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { dbPlugin } from './src/server/dbPlugin.ts'

export default defineConfig({
  plugins: [react(), tailwindcss(), dbPlugin()],
  server: { watch: { ignored: ['**/db/**'] } },
})
