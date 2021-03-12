import React from "react";
import { useParams } from "react-router";

export const EditProduct = () => {
  const { productId } = useParams();
  return <div>Edit the product with the id {productId}</div>;
};
