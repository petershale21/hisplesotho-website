import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/*
 * `basename` tells React Router that the app is mounted under a
 * sub-path (GitHub Pages project sites live at /<repo>/).
 * Vite exposes its `base` config as `import.meta.env.BASE_URL`,
 * so this stays in sync automatically:
 *   - Dev:            '/'
 *   - GitHub Pages:   '/hisplesotho-website/'
 *   - Custom domain:  '/'
 * Without this, every route fails to match once `base` is non-root.
 */
const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)