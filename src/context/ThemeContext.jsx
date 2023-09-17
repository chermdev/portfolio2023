import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()
const DarkModeContext = createContext()

export function ThemeProvider(props) {
    const [theme, setTheme] = useState(localStorage.theme)
    const [darkMode, setDarkMode] = useState(false);

    const themes = ['light', 'dark', 'system']

    const toggleTheme = () => {
        let currentTheme = localStorage.theme
        let currentThemeIndex = themes.indexOf(currentTheme)
        let IndexThemeSelected = (currentThemeIndex + 1) % themes.length
        let themeSelected = themes[IndexThemeSelected]
        setTheme(themeSelected)
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {props.children}
            </ThemeContext.Provider>
        </DarkModeContext.Provider>
    )
}


export function useTheme() {
    return useContext(ThemeContext);
}

export function useDarkMode() {
    return useContext(DarkModeContext);
}