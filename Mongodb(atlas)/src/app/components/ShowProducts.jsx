"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import isEqual from "lodash/isEqual";
import Product from "./Product";

const ShowProducts = () => {
  // چون سمت سرور داریم کد میزنیم و دیتامون هم همینجاس میتونیم به این شکل دیتا رو بگیریم و استفاده کنیم
  // path
  //const filePath = path.join(process.cwd(), "src/data", "products.json");
  // read
  //const readData = fs.readFileSync(filePath);

  //const { main } = JSON.parse(readData);

  // other Option u can Use
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch("/api/products", { method: "GET" })
      ).json();
      setProducts(data);
    };

    getData();
  }, []);

  return (
    <ul>
      {products &&
        products.map((product, index) => {
          return (
            <ul key={index}>
              <Product id={product._id} product={product} index={index} />
            </ul>
          );
        })}
    </ul>
  );
};

export default ShowProducts;
