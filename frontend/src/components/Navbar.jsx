import React from "react";
import { Menu } from "lucide-react";
import DarkModeToggler from "./DarkModeToggler";

export function Navbar({ isCollapsed, setIsCollapsed }) {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-black"
        >
        </button>

        <div className="">
          <DarkModeToggler />
        </div>

      </div>
    </div>
  );
}
