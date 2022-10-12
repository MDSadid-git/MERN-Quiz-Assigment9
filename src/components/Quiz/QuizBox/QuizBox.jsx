import React, { useState } from "react";
import { toast } from "react-toastify";
import QuizOptions from "./QuizOptions/QuizOptions";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizBox = ({ qus: { question, correctAnswer, options, id } }) => {
  const [opne, setOpen] = useState(false);
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
        <p className="text-lg font-semibold">Q: {question}</p>
        {options.map((myOption, myId) => (
          <QuizOptions
            key={myId}
            myOption={myOption}
            handleQuiz={handleQuiz}
            id={id}
          ></QuizOptions>
        ))}
      </div>
      <p className="flex">
        Show Answer:
        <span className="flex ml-2">
          <EyeIcon
            onClick={() => setOpen(!opne)}
            className="h-6 w-6 text-gray-800 mr-1"
          />
          {opne ? correctAnswer : undefined}
          {/* {correctAnswer} */}
        </span>
      </p>
    </div>
  );
};

export default QuizBox;
