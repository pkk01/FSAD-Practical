import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import Ex5 from './Ex5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ex5 />
  </StrictMode>,
)
