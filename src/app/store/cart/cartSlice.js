import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state) => {
      return state.cart;
    },
    addToCart: {
      reducer: (state, action) => {
        const product = action.payload;
        const exisitingProduct = state.find((item) => item.id === product.id);
        if (exisitingProduct) {
          exisitingProduct.count += 1;
        } else {
          state.push({ ...product, count: 1 });
        }

        action.payload.count += 1;
      },
      prepare(image, name, price, gender, age, id) {
        const count = 0;
        return { payload: { image, name, price, gender, age, id, count } };
      },
    },

    increaseCount: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.count += 1;
      }
    },

    decreaseCount: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);

      if (product.count !== 0 && product) product.count -= 1;
      console.log("decrease", product);
    },

    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      const emptyCart = [];
      state = emptyCart;
      return state;
    },
  },
});

export const selectAllCartItems = (state) => state.cart;
export const selectAllPrices = (state) =>
  state.cart.reduce(
    (total, item) => Number(total) + Number(item.price) * Number(item.count),
    0
  );

export const {
  getCartItems,
  addToCart,
  increaseCount,
  decreaseCount,
  clearCart,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
