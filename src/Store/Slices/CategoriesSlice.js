import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  reducers: {
    setCategories: (state, action) => {
      let categoriesArray = [];

      if (Array.isArray(action.payload)) {
        categoriesArray = action.payload;
      } else {
        categoriesArray.push(action.payload);
      }
      // a unique list of categories by removing duplicates using the Set() and spread operators.
      const uniqueCategories = [
        ...new Set(categoriesArray.map((item) => item.category)),
      ];
      state.list = uniqueCategories;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
