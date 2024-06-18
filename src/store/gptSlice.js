import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptSearchQuery: null,
        gptSearchResult: null,
        gptSuggestedMovies: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        updateGptSearchQuery: (state, action) => {
            state.gptSearchQuery = action.payload;
        },
        updateGptSearchResult: (state, action) => {
            state.gptSearchResult = action.payload.gptSearchResult;
            state.gptSuggestedMovies = action.payload.gptSuggestedMovies;
        }
    }
});

export const { toggleGptSearchView, updateGptSearchQuery, updateGptSearchResult } = gptSlice.actions;

export default gptSlice.reducer;