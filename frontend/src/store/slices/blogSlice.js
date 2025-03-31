import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        fetchArticlesStart: (state) => {
        state.loading = true;
        },
        fetchArticlesSuccess: (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        },
        fetchArticlesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    },
});

export const { fetchArticlesStart, fetchArticlesSuccess, fetchArticlesFailure } = blogSlice.actions;

export default blogSlice.reducer;
