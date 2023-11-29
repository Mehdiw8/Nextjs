"use client";
import { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
  });
  const changeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setProduct({
      title: "",
      price: "",
    });
    console.log(response);
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="m-5">
          <label htmlFor="title">
            <input
              onChange={changeHandler}
              value={product.title}
              name="title"
              className="rounded-lg p-2 border-none"
              type="text"
              placeholder="title"
            />
          </label>
        </div>
        <div className="m-5">
          <label htmlFor="title">
            <input
              onChange={changeHandler}
              value={product.price}
              name="price"
              className="rounded-lg p-2 border-none"
              type="number"
              placeholder="price"
            />
          </label>
        </div>
        <button className="border-none bg-slate-200 rounded-lg  p-2 mx-5">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
