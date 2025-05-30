import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../routes/AppRoutes";
import { Navbar } from "../components/Navbar";

export function MainContent({ isCollapsed, setIsCollapsed }) {
  return (
    <div
      className={
        "flex flex-col w-full mx-auto transition-all duration-300 bg-slate-50 dark:bg-slate-900 min-h-screen"
      }
    >
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="flex-1 px-2 sm:px-4 md:px-8 lg:px-12 py-4 w-full">
        <div className="w-full max-w-6xl mx-auto sm:overflow-visible">
          <Routes>
            {AppRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
