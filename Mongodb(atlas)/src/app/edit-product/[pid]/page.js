"use client";
import { useEffect, useState } from "react";

const EditContact = ({ params }) => {
  const [product, setProducts] = useState();
  useEffect(() => {
    const getProductByID = async () => {
      const product = await (await fetch(`/api/products/${params.pid}`)).json();
      setProducts(product);
    };
    getProductByID();
  }, []);
  return (
    <form className="flex flex-col justify-center items-center w-full mt-12">
      <label htmlFor="title">
        title: <input type="text" />
      </label>
      <br />

      <label htmlFor="title">
        price: <input type="text" />
      </label>
      <br />
    </form>
  );
};

export default EditContact;
