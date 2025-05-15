import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Navbar } from "./Navbar";

export function MainContent({ isCollapsed, setIsCollapsed }) {
    return (
        <div className={`bg-gray-200 fixed h-full w-full transition-transform duration-300 transform ${isCollapsed ? "" : "translate-x-70"}`}>
            <Navbar isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed} />

            <div className="p-4">
                <Routes>
                    {AppRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}
