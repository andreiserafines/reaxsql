import React from 'react'
import { Moon, Sun } from "lucide-react"


export function ToggleTheme() {
    
    const [darkMode, setDarkMode] = React.useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode) 
        if (darkMode){
            document.documentElement.classList.add('dilim')
        } else {
            document.documentElement.classList.remove('dilim')
        }
    }

    return (
        <button onClick={handleClick}>
            {darkMode ? <Moon/> : <Sun />}
        </button>
    )
}