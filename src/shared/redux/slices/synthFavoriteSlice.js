import { createSlice } from "@reduxjs/toolkit";

export const synthFavoriteSlice = createSlice({
    name: "synthFavorite",
    initialState: [],
    reducers: {
        addSynthFavorite: (state, action) => [...state, action.payload],
        removeSynthFavorite: (state, action) =>
            state.filter((val) => val.favorite_synth_id !== action.payload),
        setSynthFavorite: (state) => [...state, action.payload],
        clearSynthFavorites: () => [],
    },
});

export const { addSynthFavorite, removeSynthFavorite, clearSynthFavorites } =
    synthFavoriteSlice.actions;

export const synthReducer = synthFavoriteSlice.reducer;
