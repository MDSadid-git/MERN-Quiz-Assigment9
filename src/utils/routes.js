import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
