import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Bella",
    gender: "Female",
    price: 350000,
    age: 6,
    image: "./images/products/PuppyImage-1.svg",
  },
  {
    id: 2,
    name: "Max",
    gender: "Male",
    price: 400000,
    age: 8,
    image: "./images/products/PuppyImage-2.svg",
  },
  {
    id: 3,
    name: "Luna",
    gender: "Female",
    price: 280000,
    age: 5,
    image: "./images/products/PuppyImage-3.svg",
  },
  {
    id: 4,
    name: "Charlie",
    gender: "Male",
    price: 320000,
    age: 7,
    image: "./images/products/PuppyImage-4.svg",
  },
  {
    id: 5,
    name: "Lucy",
    gender: "Female",
    price: 450000,
    age: 9,
    image: "./images/products/PuppyImage15.svg",
  },
  {
    id: 6,
    name: "Rocky",
    gender: "Male",
    price: 300000,
    age: 6,
    image: "./images/products/PuppyImage14.svg",
  },
  {
    id: 7,
    name: "Daisy",
    gender: "Female",
    price: 420000,
    age: 8,
    image: "./images/products/PuppyImage6.svg",
  },
  {
    id: 8,
    name: "Cooper",
    gender: "Male",
    price: 295800,
    age: 5,
    image: "./images/products/PuppyImage4.svg",
  },
  {
    id: 9,
    name: "Molly",
    gender: "Female",
    price: 330000,
    age: 7,
    image: "./images/products/PuppyImage5.svg",
  },
  {
    id: 10,
    name: "Buddy",
    gender: "Male",
    price: 480000,
    age: 9,
    image: "./images/products/PuppyImage-1.svg",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      console.log(state.products);
      return state.products;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export const selectAllProducts = (state) => state.products;
export default productsSlice.reducer;
