import { createAction, createReducer } from "@reduxjs/toolkit";

const addProduct = createAction("products/addProduct");
const editProduct = createAction("products/editProduct");
const removeProduct = createAction("products/removeProduct");

const initialState = { products: [] };

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
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