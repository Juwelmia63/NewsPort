import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoriNews from "../components/CategoriNews";
import Home from "../components/Home";

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
]);
