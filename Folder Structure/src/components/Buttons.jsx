import React from 'react';

const Button = ({checked ,resultHandler ,activeQuestion ,questions}) => {
    return (
        <div className="btn-wrapper w-full">
        {checked ? (
          <button onClick={resultHandler}>
            {activeQuestion !== questions.length - 1 ? "بعدی" : "پایان"}
          </button>
        ) : (
          <button className="btn-disabled  " disabled>
            {activeQuestion !== questions.length - 1 ? "بعدی" : "پایان"}
          </button>
        )}
      </div>
    );
};

export default Button;