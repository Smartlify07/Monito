import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const organization_id = "3b523079443545d5872b9824d56f2749";
const APP_ID = "2SD5SGHMXRQL9HX";
const API_KEY = "c9207e066fde4243a9cfe11a4c856c0f20240712210311470927";
const PRODUCTS_URL = ` https://timbu-get-all-products.reavdev.workers.dev/`;

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios(PRODUCTS_URL, {
      params: {
        organization_id: organization_id,
        reverse_sort: false,
        size: 5,
        Appid: APP_ID,
        Apikey: API_KEY,
      },
      // headers: {
      //   Authorization: API_KEY,
      //   "Content-Type": "application/json",
      // },
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
        products.map((product) => {
          product.info = {
            sku: "#00178",
            gender: "Female",
            age: 6,
            size: "Small",
            color: "Apricot & Tan",
            vaccinated: true,
            dewormed: true,
            certified: true,
            certification: "MKA",
            microchip: true,
            location: "Vietnam",
            publishedDate: "12-Oct-2022",
            extra:
              ": Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.",
          };
        });
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
