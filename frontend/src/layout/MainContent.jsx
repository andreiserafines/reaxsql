import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../routes/AppRoutes";

export function MainContent() {
  return (
    <Routes>
      {AppRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
