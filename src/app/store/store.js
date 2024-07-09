import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import reviewsReducer from "./reviews/reviewsSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
  },
});
