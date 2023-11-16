import React from "react";
import Title from "./Title";

const Result = ({ questions, result ,dict}) => {
  return (
    <div className="resultContainer">
      <div className="full-w text-center ">
        <Title title={dict["quiz"].result} />
      </div>

      <div className="flex flex-wrap justify-around my-12 leading-8">
        <p>
          {dict["quiz"].quizCount} : {questions.length}
        </p>
        <p>
          {dict["quiz"].quizScore} : {result.score}
        </p>
        <p>
          {dict["quiz"].quizCorrect} : {result.correctAnswers}
        </p>
        <p>
          {dict["quiz"].quizWrong} : {result.wrongAnswers}
        </p>
      </div>
      <div className="btn-wrapper w-full">
        <button onClick={() => window.location.reload()}>
          {dict["quiz"].quizRestart}
        </button>
      </div>
    </div>
  );
};

export default Result;
