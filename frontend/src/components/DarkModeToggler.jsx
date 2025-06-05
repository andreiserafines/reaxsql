import React from "react";
import { useDarkMode } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const DarkModeToggler = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center text-xs rounded-full cursor-pointer dark:border-white dark:text-white absolute m-4 right-0">
          { darkMode ? <Sun className="text-green-500" /> :<Moon className="text-green-500" /> }
        </button>
    );
}

export default DarkModeToggler;
