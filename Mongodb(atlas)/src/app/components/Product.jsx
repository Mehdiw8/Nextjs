"use client";
import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";

const Product = ({ id, product, index }) => {
  const deleteProduct = async (id) => {
    const { status } = await fetch(`/api/products?id=${id}`, {
      method: "DELETE",
    });
    if (status === 200) {
      console.log("deleted");
    }
  };



  return (
    <>
      <li className="flex justify-between px-8 py-2 " key={index}>
        <div className="flex">
          <h3>{product.title}</h3> :<h3>{product.price}</h3>
        </div>
        <div>
          <MdDelete
            color="red"
            cursor="pointer"
            onClick={() => deleteProduct(id)}
          />
          <span className="my-5"></span>
          <Link href={{ pathname: `/edit-product/${id}` }}>
            <MdEdit color="blue" cursor="pointer" />
          </Link>
        </div>
      </li>
    </>
  );
};

export default Product;
