import React, { useState } from "react";
import { BarcodeScanner } from "../components/BarcodeScanner";
import { ProductForm } from "../components/ProductForm";

export const AddProduct = () => {
  const [productId, setProductId] = useState("");

  const onDetect = (productId) => setProductId(productId);

  return (
    <div>
      {productId ? (
        <ProductForm
          productId={productId}
          onSubmit={(product) => console.log({ product })}
        />
      ) : (
        <BarcodeScanner onDetect={onDetect} />
      )}
    </div>
  );
};
