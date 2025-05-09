import { Home } from "../pages/Home";
import { Create } from "../pages/Create";
import { Read } from "../pages/Read";
import { Edit } from "../pages/Edit";
import { IdCard, Plus, UserRoundPen, Notebook, LayoutDashboard } from "lucide-react";
import React from "react";

export const AppRoutes = [
  {
    path: "/home",
    element: <Home />,
    label: "Dashboard",
    icon: LayoutDashboard,
    showInSidebar: true,
  },
  {
    path: "/create",
    element: <Create />,
    label: "Create",
    icon: Plus,
    showInSidebar: true,
  },
  {
    path: "/read/:id",
    element: <Read />,
    label: "Read",
    icon: Notebook,
    showInSidebar: true,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
    label: "Edit",
    icon: UserRoundPen,
    showInSidebar: true,
  },
];
