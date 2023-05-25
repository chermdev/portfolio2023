import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'
import './index.css'
import { DarkModeProvider } from './context/DarkModeContext'
import Footer from './pages/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DarkModeProvider>
            <Navbar />
            <App />
            <Footer />
        </DarkModeProvider>
    </React.StrictMode>,
)
