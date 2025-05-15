import React from "react";
import { Menu } from "lucide-react";

export function Navbar({ isCollapsed, setIsCollapsed }) {
  return (
    <div className="py-4 flex items-center bg-white shadow">
      <div className="mx-4">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 text-gray-600 cursor-pointer border border-gray-300 rounded"
        >
          <Menu size={20} strokeWidth={1} />
        </button>
        
        
      </div>
    </div>
  );
}
