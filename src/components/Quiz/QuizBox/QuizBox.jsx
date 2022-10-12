import React from "react";
import { toast } from "react-toastify";
import QuizOptions from "./QuizOptions/QuizOptions";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizBox = ({ qus: { question, correctAnswer, options, id } }) => {
  const handleQuiz = (id) => {
    console.log(correctAnswer);
    if (correctAnswer === id) {
      toast.success("CorrectAnswer !!!", { autoClose: 500 });
    } else {
      toast.warning("Wrong Answer !!!", { autoClose: 500 });
    }
  };
  return (
    <div className="bg-slate-300 p-5 m-5 rounded md:w-8/12 w-11/12 mx-auto">
      <div>
        <p>Q: {question}</p>
        {options.map((myOption, myId) => (
          <QuizOptions
            key={myId}
            myOption={myOption}
            handleQuiz={handleQuiz}
            id={id}
          ></QuizOptions>
        ))}
      </div>
      <EyeIcon className="h-6 w-6 text-blue-500" />
      <p>{correctAnswer}</p>
    </div>
  );
};

export default QuizBox;
