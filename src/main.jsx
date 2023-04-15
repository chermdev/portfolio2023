import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Navbar'
import './index.css'
import { DarkModeProvider } from './context/DarkModeContext'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DarkModeProvider>
            <Navbar />
            <App />
            <Footer />
        </DarkModeProvider>
    </React.StrictMode>,
)
