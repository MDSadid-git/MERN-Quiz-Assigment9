import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import QuizTest from "../components/Quiz/QuizTest";
import Root from "../components/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      { path: "/about", element: <About></About> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/quiztest/:id",
        element: <QuizTest></QuizTest>,
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
  },
]);
