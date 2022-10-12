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
        <input type="radio" className="mt-1 mr-2" name="ans" />
        {myOption}
      </p>
    </div>
  );
};

export default QuizOptions;
