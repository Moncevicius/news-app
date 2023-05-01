import { createSlice} from "@reduxjs/toolkit";

export const newsArticles = createSlice({
    name: 'newsArticles',
    initialState: {
        articles: []
    },
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload
        }
    }
})
// this is for dispatch
export const { setArticles } = newsArticles.actions
// this is for store
export default newsArticles.reducer