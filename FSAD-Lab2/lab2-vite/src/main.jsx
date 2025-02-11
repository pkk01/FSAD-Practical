import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Template from './components/ex1/Template'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Template></Template>
  </StrictMode>,
)
