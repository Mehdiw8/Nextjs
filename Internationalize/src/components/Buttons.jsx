import React from "react";

const Button = ({
  checked,
  resultHandler,
  activeQuestion,
  questions,
  dict,
}) => {
  return (
    <div className="btn-wrapper w-full">
      {checked ? (
        <button onClick={resultHandler}>
          {activeQuestion !== questions.length - 1
            ? dict["quiz"].nextBtn
            : dict["quiz"].finishBtn}
        </button>
      ) : (
        <button className="btn-disabled  " disabled>
          {activeQuestion !== questions.length - 1
            ? dict["quiz"].nextBtn
            : dict["quiz"].finishBtn}
        </button>
      )}
    </div>
  );
};

export default Button;
