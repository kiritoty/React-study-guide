import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "count",
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