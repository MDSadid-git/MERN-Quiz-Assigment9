import React from "react";

const QuizOptions = ({ myOption, handleQuiz, id }) => {
  console.log(myOption);
  return (
    <div>
      <p
        onClick={() => handleQuiz(myOption)}
        className={`border p-5 m-2 rounded-3xl `}
      >
        <input type="radio" className="mt-1 mr-2" name={id} htmlId="ans" />
        <label htmlFor="ans">{myOption}</label>
      </p>
    </div>
  );
};

export default QuizOptions;
