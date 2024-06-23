import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "./ProductSlice";

const initialState = ({
    user: null,
    status: Statuses.IDLE,
    message: ""
})

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        login: (state, action) =>{
            state.user = action.payload;
        },
        logout: (state) =>{
            state.user = null;
        }
    }
})

export const {login, logout} = registerSlice.actions;

export default userSlice.reducer;

// export const selectUser = (state) => state.user.user;