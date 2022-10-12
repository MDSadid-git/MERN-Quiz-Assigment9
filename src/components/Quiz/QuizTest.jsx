import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizBox from "./QuizBox/QuizBox";

const QuizTest = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-center text-4xl font-bold m-3">{name}</h1>
        {questions.map((qus) => (
          <QuizBox key={qus.id} qus={qus}></QuizBox>
        ))}
      </div>
    </div>
  );
};

export default QuizTest;
