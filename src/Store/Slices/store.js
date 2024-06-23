import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./CartSlice"
import productSlice from "./ProductSlice";
import singleProductSlice from "./SingleProductSlice";
import categoriesReducer from './CategoriesSlice'
import AccountSlice from "./AccountSlice";

const store = configureStore({
    reducer:{
        //cart name and the slice function name
        cart: cartReducer,
        products: productSlice,
        singleProductPage: singleProductSlice,
        categories: categoriesReducer,
        account: AccountSlice
    },
});
store.dispatch(getTotals());
export default store;