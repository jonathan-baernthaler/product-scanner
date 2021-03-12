export const selectProducts = (state) => state.products;
export const getProductById = (productId) => (state) =>
  state.products.find((product) => product.id === productId);
