// it is used to check weather a user is authenticated or not and to track the authencicated 

import { createSlice } from "@reduxjs/toolkit"

const initialState = { // making the initial State
    status : false, 
    userData : null
}

const authSlice = createSlice({
    name : "auth",  // giving name 
    initialState,
    reducers: { 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;