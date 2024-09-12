import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function NewPortfolioMessage() {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center bg-gradient-to-b from-green-400/20 to-green-600/20 text-white shadow-lg text-center p-4">
            <div className='font-bold mb-4 mr-0 sm:mb-0 sm:mr-2 text-green-500 rounded-full px-2 border border-green-500 min-w-[9rem]'>
                <div className='inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2'></div>
                <p className='inline-block'>Coming soon</p>
            </div>
            <p className="font-medium">New 2025 portfolio from scratch with</p>
            <a href='https://astro.build/' className='underline ml-2 underline-offset-2 hover:underline-offset-4 transition-all'>🚀 Astro</a>
        </div>
    )
}

function App() {
    return (
        <div>
            <NewPortfolioMessage />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App