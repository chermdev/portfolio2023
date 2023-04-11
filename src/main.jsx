import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Navbar'
import './index.css'
import { DarkModeProvider } from './context/DarkModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Navbar />
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
)
