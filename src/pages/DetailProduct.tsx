import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductDetail from "../components/ProductDetail";

const DetailProduct = () => {
  return (
    <div className="">
      <div>
        <BreadCrumb></BreadCrumb>
      </div>
      <div>
        <ProductDetail></ProductDetail>
      </div>
    </div>
  );
};

export default DetailProduct;
