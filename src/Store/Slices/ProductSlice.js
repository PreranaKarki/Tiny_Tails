import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Statuses = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: Statuses.IDLE, //default state
    featuredProducts: [],
    categoryDogs: [],
    categoryCats: [],
    categoryHamsters: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //all pets
      .addCase(getProducts.pending, (state, action) => {
        state.status = Statuses.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = Statuses.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = Statuses.ERROR;
      })
      //feaured pets
      .addCase(getFeaturedProducts.pending, (state, action) => {
        state.status = Statuses.LOADING;
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.featuredProducts = action.payload;
        state.status = Statuses.IDLE;
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        state.status = Statuses.ERROR;
      })
      //category dog
      .addCase(getDogs.pending, (state, action) => {
        state.status = Statuses.LOADING;
      })
      .addCase(getDogs.fulfilled, (state, action) => {
        state.categoryDogs = action.payload;
        state.status = Statuses.IDLE;
      })
      .addCase(getDogs.rejected, (state, action) => {
        state.status = Statuses.ERROR;
      })
      //category cat
      .addCase(getCats.pending, (state, action) => {
        state.status = Statuses.LOADING;
      })
      .addCase(getCats.fulfilled, (state, action) => {
        state.categoryCats = action.payload;
        state.status = Statuses.IDLE;
      })
      .addCase(getCats.rejected, (state, action) => {
        state.status = Statuses.ERROR;
      })
      //category hamster
      .addCase(getHamster.pending, (state, action) => {
        state.status = Statuses.LOADING;
      })
      .addCase(getHamster.fulfilled, (state, action) => {
        state.categoryHamsters = action.payload;
        state.status = Statuses.IDLE;
      })
      .addCase(getHamster.rejected, (state, action) => {
        state.status = Statuses.ERROR;
      });
  },
});
// export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await axios.get(
    "https://651f823144a3a8aa4769be14.mockapi.io/Data"
  );
  const data = response.data;
  return data;
});

export const getFeaturedProducts = createAsyncThunk(
  "products/getFeatured",
  async (params) => {
    const response = await axios.get(
      "https://651f823144a3a8aa4769be14.mockapi.io/Data",
      { params: { featured: true } }
    );
    const data = response.data;
    return data;
  }
);

export const getDogs = createAsyncThunk("products/getDogs", async (params) => {
  const response = await axios.get(
    "https://651f823144a3a8aa4769be14.mockapi.io/Data",
    { params: { category: "dog" } }
  );
  const data = response.data;
  return data;
});

export const getCats = createAsyncThunk("products/getCats", async (params) => {
  const response = await axios.get(
    " https://651f823144a3a8aa4769be14.mockapi.io/Data",
    { params: { category: "Cat" } }
  );
  const data = response.data;
  return data;
});

export const getHamster = createAsyncThunk(
  "products/getHamsters",
  async (params) => {
    const response = await axios.get(
      " https://651f823144a3a8aa4769be14.mockapi.io/Data",
      { params: { category: "Hamster" } }
    );
    const data = response.data;
    return data;
  }
);
