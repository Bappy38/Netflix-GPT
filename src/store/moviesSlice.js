import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        topMovieTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopMovieTrailer: (state, action) => {
            state.topMovieTrailer = action.payload
        }
    }
});

export const { addNowPlayingMovies, addTopMovieTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;