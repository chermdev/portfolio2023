import About from './pages/About'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Skills from './pages/Skills'
import Work from './pages/Work'
import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import { ReactComponent as LinkedinIcon } from './assets/logos/technologies/linkedin.svg'
import { ReactComponent as BlobAnimation } from './assets/blob/blobanimation.svg'
import { ReactComponent as BlobAnimationDark } from './assets/blob/blobanimation-dark.svg'

function App() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <div className="App">
            <div className='absolute z-[-1] w-screen h-fit bg-gradient-to-b from-transparent to-[var(--bg-color)] overflow-hidden flex flex-col items-center'>
                <div className='relative top-16 h-fit overflow-hidden animate-[easeIn_1s_ease-in-out_0.3s_both] animate-[ping_1s_ease-in-out_reverse]'>
                    {
                        darkMode ?
                            <BlobAnimationDark className="w-[max(120vh,100vw)] rotate-45" /> :
                            <BlobAnimation className="w-[max(120vh,100vw)] rotate-45" />
                    }
                </div>
            </div>
            <Home2 />
            {/* <Home /> */}
            <About />
            <Work />
            {/* <Skills /> */}
        </div>
    )
}

export default App
