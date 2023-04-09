import instance from ".";
import { IProduct } from "../interfaces/product";

const token = JSON.parse(localStorage.getItem("user")!)?.accessToken;

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};

export const getById = (id: string | number) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};

export const addProduct = (product: IProduct) => {
  return instance.post("/products", product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateProduct = (product: IProduct) => {
  return instance.patch(`/products/${product._id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteProducts = (id: number | string) => {
  return instance.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
