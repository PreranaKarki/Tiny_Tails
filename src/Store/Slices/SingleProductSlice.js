import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { Statuses } from "./ProductSlice";

const singleProductSlice = createSlice({
    name: 'singleproductpage',
    initialState: {
        data: null,
        status: Statuses.IDLE, //default state
    },
    reducers:{},
     // handle fetching a single product
    extraReducers: (builder) =>{
        builder
        .addCase(getSingleProduct.pending, (state, action) =>{
            state.status= Statuses.LOADING;
        })
        .addCase(getSingleProduct.fulfilled, (state, action) =>{
            state.data = action.payload
            state.status = Statuses.IDLE;
        })
        .addCase(getSingleProduct.rejected, (state, action) =>{
            state.status = Statuses.ERROR;
        });
    },
});
export default singleProductSlice.reducer;

// Creating an async thunk to make the API call
export const getSingleProduct = createAsyncThunk('singleproductpage/getSingleProduct', async(id) =>{
    const response = await axios.get(`https://651f823144a3a8aa4769be14.mockapi.io/Data/${id}`);
    const data = response.data;
    return data;
})