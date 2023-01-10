import { createAsyncThunk } from "@reduxjs/toolkit";
import { increaseByAmount } from "../Feature/countSlice";

export const countThunk = createAsyncThunk("countThunk", async(payload, {dispatch}) => {
    await setTimeout(() => {
        console.log(payload)
        dispatch(increaseByAmount(payload))
    }, 3000);
})