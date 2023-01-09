import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Count/CountSlice'

const store = configureStore({
    devTools: process.env.NODE_ENV  !== 'production',
    reducer: {
        counterReducer
    }
})

export default store