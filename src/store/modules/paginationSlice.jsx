import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    currentPage: 1,
}
export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        goToPreviousPage(state, action) {
            if (state.currentPage === 1) return;
            setCurrentPage((prevPage) => prevPage - 1);
            state.currentPage = ((prevPage) => prevPage - 1);
        },
        goToPage(state, action) {

        }
    },
})

export const { goToPreviousPage, goToPage } = paginationSlice.actions
export default paginationSlice.reducer