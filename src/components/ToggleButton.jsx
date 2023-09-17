import { useState, useEffect, useContext } from 'react'
import { ReactComponent as SunIcon } from './../assets/icons/sun.svg'
import { ReactComponent as MoonIcon } from './../assets/icons/moon.svg'
import { ReactComponent as DesktopIcon } from './../assets/icons/desktop.svg'
import { useTheme, useDarkMode } from '../context/ThemeContext'

function ToggleButton() {

    const { darkMode, setDarkMode } = useDarkMode()
    const { theme, toggleTheme } = useTheme()

    // Use an effect to monitor changes in the user's preferred color scheme
    useEffect(() => {
        localStorage.theme = theme

        // Create a MediaQueryList object to track changes in color scheme preference.
        const mq = window.matchMedia("(prefers-color-scheme: dark)");

        if (theme === 'dark') {
            setDarkMode(true)
        } else if (theme === 'light') {
            setDarkMode(false)
        } else if (theme === 'system') {
            // Check if the system's preference matches '(prefers-color-scheme: dark)'
            if (mq.matches) {
                setDarkMode(true)
            } else {
                setDarkMode(false)
            }
        }

        // Handle dark mode changes when darkMode is system.
        const handleDarkModeChange = (evt) => {
            if (theme === 'system') {
                // Update the component's dark mode state based on the system's preference.
                setDarkMode(evt.matches);
            }
        };

        mq.addEventListener("change", handleDarkModeChange);

        // Clean up the event listener when the component unmounts to prevent memory leaks.
        return () => {
            mq.removeEventListener("change", handleDarkModeChange);
        };
    }, [theme]);


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <button
            title="Toggle Theme"
            onClick={toggleTheme}
            className={`w-[3.75rem] h-5 rounded-full dark:bg-white bg-[rgb(25,25,25)] relative transition-colors duration-500 ease-in outline-none border-transparent`}>
            <div className='flex relative top-0 justify-between mx-1 gap-1'>
                <MoonIcon className="w-4" fill={`${darkMode ? "#000" : "#fff"}`} />
                <SunIcon className="w-4" fill={`${darkMode ? "#000" : "#fff"}`} />
                <DesktopIcon className="w-4" fill={`${darkMode ? "#000" : "#fff"}`} />
            </div>
            <div id="toggle"
                className={` absolute rounded-full w-[1.125rem] h-[1.125rem] top-[0.0625rem] bg-white dark:bg-[rgb(25,25,25)] pointer-events-none transition-all duration-300 ease-out ${theme === 'light' ? 'ml-[0.0625rem]' : (theme === 'dark') ? 'ml-[1.3125rem]' : (theme === 'system') && 'ml-[2.5626rem]'}
            `}>
            </div>
        </button >

    )
}

export default ToggleButton