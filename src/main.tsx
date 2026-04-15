import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  
import './assets/sass/main.scss'
// i18n MUST be imported before App
import './i18n'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
