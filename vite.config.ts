import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  IMPORTANT: Change 'portfolio' below to your GitHub repository name!
//     Example: If your repo is https://github.com/yourname/my-site
//     then set base to '/my-site/'
//
//     If you're using a custom domain (e.g., yourdomain.com), set base to '/'

export default defineConfig({
  plugins: [react()],
  base: '/portofolio/',
})
