import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizBox from "./QuizBox/QuizBox";

const QuizTest = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;
  const handleQuiz = (id) => {
    console.log(id);
  };
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-center">{name}</h1>
        {questions.map((qus) => (
          <QuizBox key={qus.id} qus={qus} handleQuiz={handleQuiz}></QuizBox>
        ))}
      </div>
    </div>
  );
};

export default QuizTest;
