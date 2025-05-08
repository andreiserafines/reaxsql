import React, { useState } from 'react';



export function AppSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);


  return (
   {/* Sidebar */}
   <div
   className={`fixed top-0 left-0 h-full w-60 bg-gray-800 transition-transform duration-500 transform z-40 ${
     isCollapsed ? "-translate-x-full" : "translate-x-0"
   }`}>

   <div className="p-4">
     <div className="text-2xl text-white mb-4">Sidebar ko</div>
     <nav className="flex flex-col space-y-2 text-white">
       <Link to="/" className="hover:underline">Home</Link>
       <Link to="/about" className="hover:underline">About</Link>
     </nav>
   </div>
 </div>

 {/* Main content */}
 <div className={`transition-all duration-500 flex-1 p-2 ${isCollapsed ? "ml-0" : "ml-64"}`}>
   <button onClick={() => setIsCollapsed(!isCollapsed)}
     className="p-2 bg-gray-500 text-white rounded mb-4">
     Pindutin ito
   </button>
 </div>
 )
}
