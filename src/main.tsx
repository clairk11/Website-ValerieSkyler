import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SoundformPage from './pages/Soundform/SoundformPage.tsx'

const isSoundformRoute = window.location.pathname.replace(/\/+$/, '') === '/soundform'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isSoundformRoute ? <SoundformPage /> : <App />}
  </StrictMode>,
)
