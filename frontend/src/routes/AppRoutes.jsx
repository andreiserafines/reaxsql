import { Home } from "../pages/Home";
import { Create } from "../pages/Create";
import { Read } from "../pages/Read";
import { Edit } from "../pages/Edit";

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/create", element: <Create /> },
  { path: "/read/:id", element: <Read /> },
  { path: "/edit/:id", element: <Edit /> },
]