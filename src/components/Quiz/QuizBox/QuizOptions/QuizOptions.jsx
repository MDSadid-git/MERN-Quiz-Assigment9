import React from "react";

const QuizOptions = ({ myOption, handleQuiz }) => {
  const me = () => {
    return true;
  };
  return (
    <div>
      <p
        onClick={() => handleQuiz(myOption)}
        className={`border p-5 m-2 ${me === true ? "bg-red-400" : undefined}`}
      >
        {myOption}
      </p>
    </div>
  );
};

export default QuizOptions;
