"use client";

import { useEffect } from "react";
import Title from "../components/Title";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <section className="quiz-container text-white  flex flex-col justify-between items-center leading-8">
      <Title title='مشکلی پیش اومده !!' />
      <button className=" my-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => reset()}>دوباره تلاش کن 🚀</button>
    </section>
  );
}
