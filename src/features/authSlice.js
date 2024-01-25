import { createSlice } from "@reduxjs/toolkit";
import { libraryApi } from "../api/libraryApi"

const initialState = { 
    message: "",
    token: "", 
    user: { id: "", firstname: "", lastname: "", email: "", books: [] },
}

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    extraReducers: (builder) => { 
        builder.addMatcher(libraryApi.endpoints.register.matchFulfilled, (state, { payload }) => {
            // state = { ...state, token: payload.token, user: { ...payload.user, books: [] }, message: payload.message }
            state.token = payload.token
            state.user = { ...payload.user, books: [] }
            state.message = payload.message 
        })
        // I think I need one of these for login and getProfile
        builder.addMatcher(libraryApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.token = payload.token
            state.message = payload.message 
        })
        // builder.addMatcher(libraryApi.endpoints.getProfile.matchFulfilled, (state, { payload }) => {
        //     state.user = { ...payload.user }
        // })
    }
});
export default authSlice.reducer;