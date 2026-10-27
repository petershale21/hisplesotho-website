import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      BrowserRouter wraps the whole app so every page can use
      useNavigate / <Link> without prop-drilling the router.
      See src/App.jsx for the route definitions.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)