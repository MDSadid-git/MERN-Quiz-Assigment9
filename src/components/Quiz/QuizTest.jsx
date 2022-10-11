import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizBox from "./QuizBox/QuizBox";

const QuizTest = () => {
  const quizData = useLoaderData();
  const { logo, name, questions } = quizData.data;
  console.log(questions);
  return (
    <div className="flex justify-center">
      <div>
        <h1>{name}</h1>
        <img src={logo} alt="" />
        {questions.map((qus) => (
          <QuizBox key={qus.id} qus={qus}></QuizBox>
        ))}
      </div>
    </div>
  );
};

export default QuizTest;
