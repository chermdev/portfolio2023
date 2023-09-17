import React, { createContext, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState()
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, setDarkMode }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeProvider }