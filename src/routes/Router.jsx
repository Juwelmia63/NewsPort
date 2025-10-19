import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoriNews from "../components/CategoriNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "categorinews/:id",
        element: <CategoriNews></CategoriNews>,
        loader: () => fetch("/public/news.json"),
      },
    ],
  },
]);
