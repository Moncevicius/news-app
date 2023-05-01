import { createSlice} from "@reduxjs/toolkit";

export const selectNewsSource = createSlice({
    name: 'selectNewsSource',
    initialState: {
        option: 'ALL'
    },
    reducers: {
        selectSource: (state, action) => {
            state.option = action.payload
        }
    }
})
// this is for dispatch
export const { selectSource } = selectNewsSource.actions
// this is for store
export default selectNewsSource.reducer