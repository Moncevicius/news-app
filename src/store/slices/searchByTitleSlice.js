import { createSlice} from "@reduxjs/toolkit";

export const searchByTitle = createSlice({
    name: 'searchByTitle',
    initialState: {
        filter: ''
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})
// this is for dispatch
export const { setFilter } = searchByTitle.actions
// this is for store
export default searchByTitle.reducer