import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemPerPage: 8,
    currentPage: 1,
    lastPage: 0,
    totalPage: [],
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        goToPreviousPage(state, action) {
            if (state.currentPage === 1) return;
            state.currentPage = state.currentPage - 1;
        },
        goToNextPage(state, action) {
            if (state.currentPage >= state.lastPage) return;
            state.currentPage = state.currentPage + 1;
        },
        goToPage(state, action) {
            state.currentPage = action.payload;
            console.log(action.payload);
        },
        setInitialState: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { goToPreviousPage, goToNextPage, goToPage, setInitialState } = paginationSlice.actions;
export default paginationSlice.reducer;