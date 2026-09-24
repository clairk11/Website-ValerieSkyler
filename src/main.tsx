import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SoundformPage from './pages/Soundform/SoundformPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SoundformPage />
  </StrictMode>,
)
