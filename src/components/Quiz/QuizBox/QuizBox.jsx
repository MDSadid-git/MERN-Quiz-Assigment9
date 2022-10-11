import React from "react";
import QuizOptions from "./QuizOptions/QuizOptions";

const QuizBox = ({ qus: { question, correctAnswer, options, id } }) => {
  return (
    <div>
      <div>
        {question}
        <p>{correctAnswer}</p>
        {options.map((myOption) => (
          <QuizOptions key={id} myOption={myOption}></QuizOptions>
        ))}
      </div>
    </div>
  );
};

export default QuizBox;
