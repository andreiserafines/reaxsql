import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppSidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className=''>
      <BrowserRouter>
        <div className='flex min-h-screen'>
          <AppSidebar isCollapsed={isCollapsed} />
          <MainContent isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}