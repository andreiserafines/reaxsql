import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export function AppSidebar({ isCollapsed }) {
  const location = useLocation();

  return (
    <div
      className={`fixed h-full w-64 bg-gray-800 shadow transition-transform duration-300 transform z-40 ${
        isCollapsed ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="p-4">
        <nav className="flex flex-col space-y-2 text-white">
          {AppRoutes.filter((route) => route.showInSidebar).map(
            ({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded hover:bg-gray-700 transition ${
                  location.pathname.startsWith(path) ? "bg-gray-700" : ""
                }`}
              >
                {Icon && <Icon className="h-5 w-5 mr-2" />}
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
