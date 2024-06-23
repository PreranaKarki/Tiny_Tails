// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import { Statuses } from "./ProductSlice";

// const reusable = async (api, body, token = "") => {
//   const res = await fetch(api, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// };

// export const registerUser = createAsyncThunk("registerUser", async (body) => {
//   const result = await reusable("/register", body);
//   return result;
// });

// const accountSlice = createSlice({
//   name: "account",
//   initialState: {
//     status: Statuses.IDLE, //default state
//     message: "",
//     user: "",
//     token: "",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state, action) => {
//         state.status = Statuses.LOADING;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.status = Statuses.IDLE;
//         if(action.payload.error){
//           state.error = action.payload.error
//         }
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.status = Statuses.ERROR;
//       });
//   },
// });

// export default accountSlice.reducer;
