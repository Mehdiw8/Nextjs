import Link from "next/link";
import React from "react";

const Form = ({ details }) => {
  const { btnName, formHeader, login } = details;
  return (
    <>
      <form className="flex flex-col justify-start items-start mb-5">
        <h4 className=" text-lg text-teal-500	">{formHeader} </h4>
        {!login && (
          <section className="flex flex-col justify-evenly items-start h-52 ">
            <label className="" htmlFor="userName">
              <span>userName :</span>
              <input
                className="mt-2 p-1 rounded-lg"
                type="text"
                placeholder="userName"
              />
            </label>
            <label className="" htmlFor="password">
              <span>password :</span>
              <input
                className="mt-2 p-1 rounded-lg "
                type="password"
                placeholder="password"
              />
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded"
              type="submit"
            >
              {btnName}
            </button>
          </section>
        )}
        {login && (
          <Link href={"/auth/login"}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded"
              type="submit"
            >
              {btnName}
            </button>
          </Link>
        )}
      </form>
    </>
  );
};

export default Form;
