import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const countThunk = createAsyncThunk("countThunk", async (payload, {dispatch}) => {

})

const slice = createSlice({
    name: "counterReducer",
    initialState: {
        count: 0
    },
    reducers: {
        increaseCount: (state, action) => {
            state.count = state.count+1

            return state
        }
    }
})

export const increaseCount = slice.actions.increaseCount

export default slice.reducer