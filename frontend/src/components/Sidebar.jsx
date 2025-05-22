import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export function AppSidebar({ isCollapsed }) {
  const location = useLocation();

  return (
    <div
      className={`border-r w-70 sm:relative h-full z-50 bg-white border-gray-200 text-white flex flex-col overflow-hidden expanded transition-transform duration-300 dark:border-gray-700 ${
        isCollapsed ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="p-4">
        <nav className="flex flex-col space-y-2 text-slate-900 dark:text-white">
          {AppRoutes.filter((route) => route.showInSidebar).map(
            ({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded hover:bg-slate-700 hover transition ${
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
