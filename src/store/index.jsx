import { configureStore } from "@reduxjs/toolkit";
import movieR from './modules/movieSlice'
import stateR from './modules/stateSlice'
import paginationR from './modules/paginationSlice'
export const store = configureStore({
    reducer: {
        movieR,
        stateR,
        paginationR
    }
})