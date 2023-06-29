import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "usuario",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.error = false;
        }
    },
});


export const { loginStart, loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;