import React, { useState } from "react";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { Read } from "./pages/Read";
import { Edit } from "./pages/Edit";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { PanelRightOpen } from 'lucide-react'
// import { AppRoutes } from "./AppRoutes";

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className="h-screen flex">
        {/* Sidebar */}
        <div
          className={`w-60 h-full border-r border-neutral-700 absolute bg-neutral-900 transition-transform duration-300 transform ${isCollapsed ? "-translate-x-full" : "translate-x-0"}`}>

          <div className="p-4">
            <div className="text-2xl text-white mb-4">Sidebar ko</div>
            <nav className="flex flex-col space-y-2 text-white">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className={`w-full transition-all duration-300 ${isCollapsed ? "ml-0" : "ml-60"}`}>
          <div className="bg-black p-2 flex items-center">
            <button onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-neutral-400 mx-2 p-2 rounded hover:bg-neutral-800 cursor-pointer duration-300">
              <PanelRightOpen size={20} strokeWidth={2.5} />
            </button>
          </div>

<div className="p-4">
<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
</div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}
