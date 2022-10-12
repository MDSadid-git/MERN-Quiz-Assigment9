import React from "react";
import QuizOptions from "./QuizOptions/QuizOptions";

const QuizBox = ({ qus: { question, correctAnswer, options }, handleQuiz }) => {
  return (
    <div className="bg-slate-300 p-5 m-5 rounded">
      <div>
        <p>Q: {question}</p>
        {options.map((myOption, myId) => (
          <QuizOptions
            key={myId}
            myOption={myOption}
            handleQuiz={handleQuiz}
          ></QuizOptions>
        ))}
      </div>
      <p>me</p>
      <p>{correctAnswer}</p>
    </div>
  );
};

export default QuizBox;
