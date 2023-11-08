import React from "react";
import Title from "./Title";

const Result = ({ questions, result }) => {
  return (
    <div className="resultContainer">
      <div className="full-w text-center ">
        <Title title="نتایج " />
      </div>

      <div className="flex flex-wrap justify-around my-12 leading-8">
        <p>کل سوالات : {questions.length}</p>
        <p>کل امتیاز : {result.score}</p>
        <p>سوالات درست : {result.correctAnswers}</p>
        <p>سوالات غلط : {result.wrongAnswers}</p>
      </div>
      <div className="btn-wrapper w-full">
        <button onClick={() => window.location.reload()}>
          شروع مجدد آزمون
        </button>
      </div>
    </div>
  );
};

export default Result;
