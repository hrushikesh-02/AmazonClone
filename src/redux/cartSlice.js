import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productExist = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (productExist) {
        productExist.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);
    },
    removeFromCart(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      state.productsNumber = state.productsNumber - productToRemove.quantity;
      state.products.splice(index, 1);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
