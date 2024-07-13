import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//   {
//     id: 1,
//     name: "Bella",
//     gender: "Female",
//     price: 350000,
//     age: 6,
//     image: "./images/products/PuppyImage-1.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],

//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 2,
//     name: "Max",
//     gender: "Male",
//     price: 400000,
//     age: 8,
//     image: "/images/products/PuppyImage-2.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 3,
//     name: "Luna",
//     gender: "Female",
//     price: 280000,
//     age: 5,
//     image: "/images/products/PuppyImage-3.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 4,
//     name: "Charlie",
//     gender: "Male",
//     price: 320000,
//     age: 7,
//     image: "/images/products/PuppyImage-4.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 5,
//     name: "Lucy",
//     gender: "Female",
//     price: 450000,
//     age: 9,
//     image: "/images/products/PuppyImage15.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 6,
//     name: "Rocky",
//     gender: "Male",
//     price: 300000,
//     age: 6,
//     image: "/images/products/PuppyImage14.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 7,
//     name: "Daisy",
//     gender: "Female",
//     price: 420000,
//     age: 8,
//     image: "/images/products/PuppyImage6.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 8,
//     name: "Cooper",
//     gender: "Male",
//     price: 295800,
//     age: 5,
//     image: "/images/products/PuppyImage4.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
//   {
//     id: 9,
//     name: "Molly",
//     gender: "Female",
//     price: 330000,
//     age: 7,
//     image: "/images/products/PuppyImage5.svg",
//     thumbnails: [
//       "/images/SinglePageThumbnails/Thumbnail-1.png",
//       "/images/SinglePageThumbnails/Thumbnail-2.png",
//       "/images/SinglePageThumbnails/Thumbnail-3.png",
//       "/images/SinglePageThumbnails/Thumbnail-4.png",
//     ],
//     info: {
//       sku: "#00178",
//       gender: "Female",
//       age: 6,
//       size: "Small",
//       color: "Apricot & Tan",
//       vaccinated: true,
//       dewormed: true,
//       certified: true,
//       certification: "MKA",
//       microchip: true,
//       location: "Vietnam",
//       publishedDate: "12-Oct-2022",
//       extra:
//         ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
//     },
//   },
// ];

const organization_id = "3b523079443545d5872b9824d56f2749";
const APP_ID = "2SD5SGHMXRQL9HX";
const API_KEY = "c9207e066fde4243a9cfe11a4c856c0f20240712210311470927";
const PRODUCTS_URL = `/api/products?organization_id=${organization_id}&Appid=${APP_ID}&Apikey=${API_KEY}`;

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios(PRODUCTS_URL, {
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    });

    const data = await response.data.items;
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      console.log(state.products);
      return state.products;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "successful";
        const products = action.payload;
        productsAdapter.upsertMany(state, products);
        console.log(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectAllProducts, selectById: selectProductsById } =
  productsAdapter.getSelectors((state) => state.products);

export const { getProducts } = productsSlice.actions;
export const productsStatus = (state) => state.products.status;
export const productsError = (state) => state.products.error;
export default productsSlice.reducer;
