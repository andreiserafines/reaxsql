import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from './layout/MainContent';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <div className='bg-gray-100'>
        <BrowserRouter>
          <div className='text-[13.5px]'>
            <MainContent isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}