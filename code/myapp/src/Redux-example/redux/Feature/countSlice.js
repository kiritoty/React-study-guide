import { createSlice } from "@reduxjs/toolkit";

export const count = createSlice({
    name: 'countSlice',
    initialState: {
        countNum : 0
    },
    reducers: {
        increase: (state, action) => {
            state.countNum += 1
        },
        decrease: (state, action) => {
            state.countNum -= 1
        },
        increaseByAmount: (state, action) => {
            state.countNum += Number(action.payload)
        },
        decreaseByAmount: (state, action) => {
            state.countNum -= Number(action.payload)
        }
    }
})

export const {increase, increaseByAmount, decrease, decreaseByAmount} = count.actions;

export default count.reducer