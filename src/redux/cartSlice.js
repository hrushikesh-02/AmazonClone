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
    incrementQuantity(state, action) {
      const productToIncrement = state.products.find(
        (item) => item.id === action.payload
      );
      if (productToIncrement.quantity >= 1) {
        productToIncrement.quantity = productToIncrement.quantity + 1;
        state.productsNumber = state.productsNumber + 1;
      }
    },
    decrementQuantity(state, action) {
      const productToDecrement = state.products.find(
        (item) => item.id === action.payload
      );
      if (productToDecrement.quantity === 1) {
        const index = state.products.findIndex(
          (product) => product.id === action.payload
        );
        state.products.splice(index, 1);
      }
      if (productToDecrement.quantity > 1) {
        productToDecrement.quantity = productToDecrement.quantity - 1;
      }
      state.productsNumber = state.productsNumber - 1;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
