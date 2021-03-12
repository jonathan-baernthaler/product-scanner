import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BarcodeScanner } from "../components/BarcodeScanner";
import { ProductForm } from "../components/ProductForm";
import { addProduct } from "../store/reducer/productsReducer";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [productId, setProductId] = useState("");

  const onDetect = (productId) => setProductId(productId);

  console.log(productId, "here");

  return (
    <div>
      {productId ? (
        <ProductForm
          productId={productId}
          onSubmit={(product) => dispatch(addProduct(product))}
        />
      ) : (
        <BarcodeScanner onDetect={onDetect} />
      )}
    </div>
  );
};
