import { useState, useEffect, useContext } from 'react'
import { ReactComponent as SunIcon } from './../assets/icons/sun.svg'
import { ReactComponent as MoonIcon } from './../assets/icons/moon.svg'
import { ReactComponent as DesktopIcon } from './../assets/icons/desktop.svg'
import { DarkModeContext } from '../context/DarkModeContext'

function ToggleButton() {

    const { darkMode, setDarkMode, toggleDarkMode } = useContext(DarkModeContext)

    useEffect(() => {
        const mq = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        if (mq.matches) {
            setDarkMode(true);
        }

        // This callback will fire if the perferred color scheme changes without a reload
        mq.addEventListener("change", (evt) => setDarkMode(evt.matches));
    }, [])


    useEffect(() => {
        if (darkMode) {
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
        } else {
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
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