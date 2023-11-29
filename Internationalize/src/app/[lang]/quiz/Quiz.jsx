"use client";
import { useState } from "react";
import { quiz } from "../../../data/data";
import Title from "../../../components/Title";
import "@/src/styles/quiz.css";
import Loading from "./loading";
import { Result, Button, Answers } from "../../../components";
const Quiz = ({ dict, lang }) => {
  // moshakhas kon kodum soal namayesh bdi v soal active ro bekesh biron
  const [activeQuestion, setActiveQuestion] = useState(0);

  // store active answer
  const [selectAnswer, setSelectAnswer] = useState();

  // vaqti false btn badi or payan disable v dar sorat true shodan btn active mishe
  const [checked, setChecked] = useState(false);

  // selected answer Index
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);

  // zamani k true shod bia div result neshon bde dar ghyr in sorat div soalat
  const [showResult, setShowResult] = useState(false);

  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { Faquestions, Enquestions } = quiz;
  const { answers, correctAnswer, question } =
    lang === "fa-ir" || lang === "fa"
      ? Faquestions[activeQuestion]
      : Enquestions[activeQuestion];

  // ba in Fanction javab select shode save mishe v style migire
  const selectedClickHandler = (answer, index) => {
    setChecked(true);
    setSelectAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectAnswer(true);
    } else {
      setSelectAnswer(false);
    }
  };

  // namayesh soal badi va zakhire kon javab ro
  const resultHandler = () => {
    setSelectAnswerIndex(null);
    if (activeQuestion !== Faquestions.length - 1) {
      setChecked(false);
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setResult((prev) =>
      selectAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
  };

  return (
    <>
      <section className="quiz-container text-white  flex flex-col justify-between  ">
        <div style={{ margin: "0 1rem 0 1rem" }}>
          <Title title={dict["quiz"].title} />
          {!showResult && (
            <div className="text-xl mx-2 mt-[42px] mb-[20px]">
              {dict["quiz"].quizNum1}: {activeQuestion + 1}{" "}
              {dict["quiz"].quizNum2} {Faquestions.length}
            </div>
          )}
        </div>
        {!showResult ? (
          <>
            <div className="main-wrapper">
              <div className="q-wrapper">
                <h3>
                  {/* <Suspense fallback={<Loading width={"93%"} />}>
                    <span>{timeDelay().then(() => currentQuestion)}</span>
                  </Suspense> */}
                  {question ? question : <Loading width={"93%"} />}
                </h3>
              </div>

              <Answers
                answers={answers}
                selectedClickHandler={selectedClickHandler}
                selectAnswerIndex={selectAnswerIndex}
              />
            </div>
            <Button
              checked={checked}
              resultHandler={resultHandler}
              activeQuestion={activeQuestion}
              questions={Faquestions}
              dict={dict}
            />
          </>
        ) : (
          // Show Result
          <Result questions={Faquestions} result={result} dict={dict}/>
        )}
      </section>
    </>
  );
};

export default Quiz;
