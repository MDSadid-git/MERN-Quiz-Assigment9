import React from "react";
import { toast } from "react-toastify";
import QuizOptions from "./QuizOptions/QuizOptions";

const QuizBox = ({ qus: { question, correctAnswer, options } }) => {
  const handleQuiz = (id) => {
    console.log(correctAnswer);
    if (correctAnswer === id) {
      toast.success("Right Ans!!", { autoClose: 500 });
    } else {
      toast.warning("Round Ans!!!", { autoClose: 500 });
    }
  };
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
