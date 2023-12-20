import { useContext } from 'react'
import Work from './Work'
import Home from './Home'
import { useDarkMode } from '../context/ThemeContext'
import { ReactComponent as BlobAnimation } from '../assets/blob/blobanimation.svg'
import { ReactComponent as BlobAnimationDark } from '../assets/blob/blobanimation-dark.svg'


function App() {

    const { darkMode } = useDarkMode()

    return (
        <div className="App">
            <div className='relative bg-gradient-to-b from-transparent to-bgcolor overflow-hidden flex flex-col items-center'>
                <Home />
                <div className='absolute z-[-1] top-16 overflow-hidden animate-[easeIn_1s_ease-in-out_0.3s_both]'>
                    {
                        darkMode ?
                            <BlobAnimationDark className="w-[max(120vh,100vw)] rotate-90" /> :
                            <BlobAnimation className="w-[max(120vh,100vw)] rotate-90" />
                    }
                </div>
            </div>
            <Work />
        </div>
    )
}


export default App
