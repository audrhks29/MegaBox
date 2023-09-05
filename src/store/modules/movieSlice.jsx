import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    movieData: [], //영화 전체 데이터
    loading: true,
    filteredData: [], // 전체, 상영중, 상영종료
    pagingData: [] // 실제로 보여줄 데이터 (itemPerPage만큼 잘라서 보여줌)
}
export const getMovieData = createAsyncThunk(
    'movie/getMovieData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/4d151f01eb80528030a419ef7db92693/raw/55bdbba28bc05ff0feed602a00d458865542d892/movie.json')
        return res.data
    }
)
export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {
        showAllMovie(state, action) {
            state.filteredData = [...action.payload];
        },
        showFilmOnScreen(state, action) {
            state.filteredData = [...action.payload];
        },
        showEndOnScreen(state, action) {
            state.filteredData = [...action.payload];
        },
        showSearchedResults(state, action) {
            state.filteredData = action.payload;
        },
        setPagingData(state, action) {
            state.pagingData = action.payload;
        },
        toggleLike: (state, action) => {
            const { index } = action.payload;
            const movie = state.pagingData[index];
            movie.isLike = !movie.isLike;
            movie.audiCnt = movie.isLike ? movie.audiCnt + 1 : movie.audiCnt - 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getMovieData.fulfilled, (state, action) => {
                state.loading = false
                state.movieData = action.payload
            })
            .addCase(getMovieData.rejected, (state, action) => {
                state.loading = true
            })
    }
})

export const { showAllMovie, showFilmOnScreen, showEndOnScreen, showSearchedResults, setPagingData, toggleLike } = movieSlice.actions
export default movieSlice.reducer