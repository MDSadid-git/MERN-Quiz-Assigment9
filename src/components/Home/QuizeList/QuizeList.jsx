import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizeSite from "./QuizeSite/QuizeSite";
const QuizeList = () => {
  const mernQuizeOption = useLoaderData();
  const quizeContainer = mernQuizeOption.data;
  return (
    <div className="container mx-auto  flex justify-center">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quizeContainer.map((quizeArea) => (
          <QuizeSite quizeArea={quizeArea} key={quizeArea.id}></QuizeSite>
        ))}
      </div>
    </div>
  );
};

export default QuizeList;
