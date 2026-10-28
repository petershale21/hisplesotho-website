import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/*
 * Vite config
 * -----------
 * `base` must match the GitHub Pages project path:
 *   https://<user>.github.io/<repo>/
 * If the repository is renamed, this value must be updated or every
 * asset URL will 404 in production.
 *
 * When the site moves to hisplesotho.org, `base` reverts to '/'
 * and this comment stays here as a reminder.
 */
export default defineConfig({
  base: '/hisplesotho-website/',
  plugins: [react(), tailwindcss()],
})