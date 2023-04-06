import React from "react";
import { useState, useEffect } from "react";
import { getAll } from "../api/product";
import Banner from "../components/Banner";
import Product from "../components/Products";
import { IProduct } from "../models";

const Homepage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    try {
      const { data } = await getAll();
      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
      </div>
      <div>
        <h1 className="text-2xl mb-5 font-medium leading-10 text-[#444444]">
          ĐIỆN THOẠI NỔI BẬT NHẤT
        </h1>
        <div className="grid grid-cols-6 gap-4 mb-32">
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
