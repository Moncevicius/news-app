import { configureStore } from "@reduxjs/toolkit";
import searchByTitleSliceReducer from "./slices/searchByTitleSlice";
import newsArticlesSliceReducer from "./slices/newsArticlesSlice";
import selectNewsSourceSliceReducer from "./slices/selectNewsSourceSlice";
import {newsApi} from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        searchByTitle: searchByTitleSliceReducer,
        [newsApi.reducerPath]: newsApi.reducer,
        newsArticles: newsArticlesSliceReducer,
        selectNewsSource: selectNewsSourceSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware)
})