import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Pokemon } from './pokemon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {location.pathname === "/" ? <App /> : <Pokemon />}
  </StrictMode>,
)
