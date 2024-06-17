import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptSearchResult: null,
        gptSuggestedMovies: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        updateGptSearchResult: (state, action) => {
            state.gptSearchResult = action.payload.gptSearchResult;
            state.gptSuggestedMovies = action.payload.gptSuggestedMovies;
        }
    }
});

export const { toggleGptSearchView, updateGptSearchResult } = gptSlice.actions;

export default gptSlice.reducer;