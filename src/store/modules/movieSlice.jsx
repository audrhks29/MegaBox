import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    movieData: [],
    loading: true
}
export const getMovieData = createAsyncThunk(
    'movie/getMovieData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/4d151f01eb80528030a419ef7db92693/raw/a1ae6d550a05a2fd20fecf1bdf7e3e477bfe63dd/movie.json')
        return res.data
    }
)
export const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieData.pending, (state, action) => {
                state.state = '로딩'
                state.loading = true
            })
            .addCase(getMovieData.fulfilled, (state, action) => {
                state.state = "성공"
                state.loading = false
                state.movieData = action.payload
            })
            .addCase(getMovieData.rejected, (state, action) => {
                state.state = "rejected"
                state.loading = true
            })
    }
})

export const { } = movieSlice.actions
export default movieSlice.reducer