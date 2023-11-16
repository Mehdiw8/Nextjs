"use client";

import { useEffect, useState } from "react";
import Title from "../../components/Title";
import { getLangs } from "./lang";
import { useParams } from "next/navigation";
export default function Error({ error, reset }) {
  const [dict, setDict] = useState("");
  const params = useParams();
  useEffect(() => {
    const getLangsHelper = async () => {
      const data = await getLangs(params.lang);
      setDict(data);
    };
    getLangsHelper();
    console.log(error);
  }, [params]);
  return (
    <section className="quiz-container text-white  flex flex-col justify-between items-center leading-8">
      <Title title={dict["error"]?.message} />
      <button
        className=" my-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={() => reset()}
      >
        {/* {dict ? dict["error"].tryAgain : "loading ..."} */}
        {dict["error"]?.tryAgain}
      </button>
    </section>
  );
}
