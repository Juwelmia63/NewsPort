import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoriNews from "../components/CategoriNews";
import Home from "../components/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Resister from "../pages/Resister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "categorinews/:id",
        element: <CategoriNews></CategoriNews>,
        loader: () => fetch("/public/news.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,

    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/resister",
        element: <Resister></Resister>,
      },
    ],
  },
]);
