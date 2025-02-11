import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parent from './components/ex3/Parent'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)
