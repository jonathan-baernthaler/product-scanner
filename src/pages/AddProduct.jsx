import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarcodeScanner } from "../components/BarcodeScanner";
import { EditProductForm } from "../components/EditProductForm";
import { ProductForm } from "../components/ProductForm";
import { addProduct, editProduct } from "../store/reducer/productsReducer";
import { getProductById } from "../store/selector/productsSelector";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [productId, setProductId] = useState("");
  const productInfo = useSelector(getProductById(productId));

  const onDetect = (productId) => setProductId(productId);

  const onAddProduct = (product) => {
    dispatch(addProduct(product));
    setProductId("");
  };
  const onEditProduct = (product) => {
    dispatch(editProduct(product));
    setProductId("");
  };

  if (!productId) {
    return <BarcodeScanner onDetect={onDetect} />;
  }

  return (
    <>
      {productInfo ? (
        <EditProductForm productInfo={productInfo} onSubmit={onEditProduct} />
      ) : (
        <ProductForm productId={productId} onSubmit={onAddProduct} />
      )}
    </>
  );
};
