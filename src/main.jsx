import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './pages/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <Navbar />
            <App />
            <Footer />
        </ThemeProvider>
    </React.StrictMode>,
)
