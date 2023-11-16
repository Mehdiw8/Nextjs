import React, { Suspense } from 'react';
import Loading from '../app/[lang]/loading';

const Answers = ({answers ,selectedClickHandler ,selectAnswerIndex}) => {
    return (
        <div className="a-wrapper">
                <ul>
                  {answers.map((a, index) => (
                    <li
                      key={index}
                      onClick={() => selectedClickHandler(a, index)}
                      className={
                        index !== selectAnswerIndex ? "notPicked" : "picked"
                      }
                    >
                      <Suspense fallback={<Loading width={"93%"} />}>
                        <span className='mx-2'>{a}</span>
                      </Suspense>
                    </li>
                  ))}
                </ul>
              </div>
    );
};

export default Answers;