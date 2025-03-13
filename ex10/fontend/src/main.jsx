import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Show from './components/Show.jsx'
import { createStore } from 'redux'
import NavReducer from './components/reducer/NavReducer.jsx'
var store = createStore(NavReducer)
sessionStorage.setItem("username", "null")
sessionStorage.setItem("role", "0")
var customer = () => createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Show store = {store} />
  </StrictMode>,
)
customer()
store.subscribe(customer)
