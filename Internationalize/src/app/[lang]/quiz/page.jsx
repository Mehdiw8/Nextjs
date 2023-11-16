import React from "react";
import Quiz from "./Quiz";
import { getLangs } from "../lang";
const Questions = async ({ params: { lang } }) => {
  const dict = await getLangs(lang);

  return (
    <div>
      <Quiz dict={dict} lang={lang} />
    </div>
  );
};

export default Questions;
