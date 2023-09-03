import { configureStore } from "@reduxjs/toolkit";
import movieR from './modules/movieSlice'
import stateR from './modules/stateSlice'
import paginationR from './modules/paginationSlice'
import searchR from './modules/searchSlice'
export const store = configureStore({
    reducer: {
        movieR,
        stateR,
        paginationR,
        searchR
    }
})