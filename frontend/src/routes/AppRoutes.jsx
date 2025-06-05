import { Home } from "../pages/User/Home";
import { Create } from "../pages/Create";
import { CreateCredentials } from "../pages/CreateCredentials";
import { Read } from "../pages/Read";
import { Edit } from "../pages/Edit";
import { Login } from "../auth/Login";
import { IdCard, Plus, UserRoundPen, Notebook, LayoutDashboard } from "lucide-react";
import React from "react";

export const AppRoutes = [
  // === USER- ROUTES === //
  {
    path: "/home",
    element: <Home />,
    label: "Home",
    icon: LayoutDashboard,
    showInSidebar: true,
  },


  // Create Credentials
  {
    path: "/createcredentials",
    element: <CreateCredentials />,
    label: "Create Credentials",
    icon: Plus,
    showInSidebar: false,
  },

  // Login
  {
    path: "/",
    element: <Login />,
    label: "Login",
    icon: IdCard,
    showInSidebar: false,
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
