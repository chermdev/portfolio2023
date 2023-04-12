import { useState, useEffect, useContext } from 'react'
import { ReactComponent as SunIcon } from './assets/icons/sun.svg'
import { ReactComponent as MoonIcon } from './assets/icons/moon.svg'
import { ReactComponent as DesktopIcon } from './assets/icons/desktop.svg'
import { DarkModeContext } from './context/DarkModeContext'

function ToggleButton() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    // const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.style
                .setProperty('--bg-color', 'rgb(20, 20, 20)')
            document.documentElement.style
                .setProperty('--bg-navbar-color', 'rgba(25, 25, 25, 0.6)')
            document.documentElement.style
                .setProperty('--font-color', 'rgb(255, 255, 255)')
            document.documentElement.style
                .setProperty('--card-color', 'rgb(23, 23, 23)')
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.style
                .setProperty('--bg-color', 'rgb(240, 240, 240)')
            document.documentElement.style
                .setProperty('--bg-navbar-color', 'rgba(240, 240, 240, 0.6)')
            document.documentElement.style
                .setProperty('--font-color', 'rgb(20, 20, 20)')
            document.documentElement.style
                .setProperty('--card-color', 'rgb(234, 234, 234)')
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <button
            title="Toggle Theme"
            onClick={toggleDarkMode}
            className={`
            w-10
            h-5
            rounded-full 
            dark:bg-white
            bg-[rgb(25,25,25)]
            relative 
            transition-colors 
            duration-500 
            ease-in
            outline-none 
            border-transparent`}
        >
            <div className='flex relative top-0 justify-between mx-1'>
                <MoonIcon className="w-4" fill="#000" />
                <SunIcon className="w-4" fill="#fff" />
            </div>
            <div id="toggle"
                className={`
            absolute
            rounded-full
            w-[1.125rem]
            h-[1.125rem]
            top-[0.0625rem]
            ml-[0.0625rem]
            bg-white
            dark:bg-[rgb(25,25,25)]
            dark:ml-[1.3125rem]
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        `}>
            </div>
        </button>

    )
}

export default ToggleButton