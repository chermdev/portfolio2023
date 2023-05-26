import { useContext } from 'react'
import Work from './pages/Work'
import Home2 from './pages/Home2'
import { DarkModeContext } from './context/DarkModeContext'
import { ReactComponent as BlobAnimation } from './assets/blob/blobanimation.svg'
import { ReactComponent as BlobAnimationDark } from './assets/blob/blobanimation-dark.svg'

function App() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <div className="App">
            <div className='relative bg-gradient-to-b from-transparent to-[var(--bg-color)] overflow-hidden flex flex-col items-center'>
                <Home2 />
                <div className='absolute z-[-1] top-16 overflow-hidden animate-[easeIn_1s_ease-in-out_0.3s_both] animate-[ping_1s_ease-in-out_reverse]'>
                    {
                        darkMode ?
                            <BlobAnimationDark className="w-[max(120vh,100vw)] rotate-45" /> :
                            <BlobAnimation className="w-[max(120vh,100vw)] rotate-45" />
                    }
                </div>
            </div>
            <Work />
        </div>
    )
}

export default App
