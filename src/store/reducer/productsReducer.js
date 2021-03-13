import { createAction, createReducer } from "@reduxjs/toolkit";

export const addProduct = createAction("products/addProduct");
export const editProduct = createAction("products/editProduct");
export const removeProduct = createAction("products/removeProduct");

const initialState = {
  products: [],
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      const isProductInState = state.products.find((product) => {
        return product.id === action.payload.id;
      });

      if (isProductInState) {
        throw new Error("Product already exists");
      }
      state.products.push(action.payload);
    })
    .addCase(editProduct, (state, action) => {
      const i = state.products.findIndex((product) => product.id === action.id);
      state.products.splice(i, 1, action.payload);
    })
    .addCase(removeProduct, (state, action) => {
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload.id,
      );
      state.products = filteredProducts;
    });
});
