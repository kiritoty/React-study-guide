import { configureStore } from "@reduxjs/toolkit";
import countReducer from './Feature/countSlice';

export const store = configureStore({
    devTools: process.env.NOD_ENV !== 'production',
    reducer: { 
        testRed: countReducer
    }
})