import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppSidebar } from './components/Sidebar';
import { AppRoutes } from './components/AppRoutes';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
      <BrowserRouter>
        <div className='bg-gray-100 flex h-screen'>
          <div>
            <AppSidebar isCollapsed={isCollapsed} />
          </div>

          <div className={`transition-transform w-full duration-300 transform ${isCollapsed ? "-translate-x-40" : ""}`}>
            <div className=''>
              <h1 className='font-semibold'>
                <button onClick={() => setIsCollapsed(!isCollapsed)}
                  className='p-2 bg-gray-500'>
                  Collapse
                </button>
              </h1>
            </div>

            
          </div>
        </div>
      </BrowserRouter > 
  )
}