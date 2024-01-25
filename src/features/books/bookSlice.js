import { createSlice } from "@reduxjs/toolkit";
import { libraryApi } from "../../api/libraryApi";

const bookSlice = createSlice({
    name:"book",
    initialState:[],
    extraReducers: (builder) => { 
        builder.addMatcher(libraryApi.endpoints.getBooks.matchFulfilled, (state, { payload }) => {
            return payload.books
        })
    }
})

export default bookSlice.reducer;