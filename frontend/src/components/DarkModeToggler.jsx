import React from "react";
import { useDarkMode } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const DarkModeToggler = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center text-xs rounded-full p-1 bg-gray-200 cursor-pointer dark:border-white dark:text-white">
          { darkMode ? <Sun className="text-yellow-500" /> :<Moon className="text-orange-500" /> }
        </button>
    );
}

{/* <Sun size={20} strokeWidth={1.5} />
<Moon size={20} strokeWidth={1.5} /> */}

export default DarkModeToggler;
