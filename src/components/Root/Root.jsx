import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header";
export const QuizContext = createContext();

const Root = () => {
  const quizList = useLoaderData();
  return (
    <QuizContext.Provider value={quizList}>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </QuizContext.Provider>
  );
};

export default Root;
