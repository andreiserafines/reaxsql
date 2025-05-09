import React from "react";
import { Menu } from "lucide-react";

export function Navbar({ isCollapsed, setIsCollapsed }) {
  return (
    <div className="py-3 flex items-center bg-white shadow">
      <div className="mx-4">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 text-neutral-700 rounded shadow-sm hover:bg-gray-100 duration-300 cursor-pointer"
        >
          <Menu size={24} />
        </button>
      </div>
    </div>
  );
}
