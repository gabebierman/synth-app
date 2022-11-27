import { createSlice } from "@reduxjs/toolkit";

export const snareFavoriteSlice = createSlice({
    name: "snareFavorite",
    initialState: [],
    reducers: {
        addSnareFavorite: (state, action) => [...state, action.payload],
        removeSnareFavorite: (state, action) =>
            state.filter((val) => val.favorite_snare_id !== action.payload),
        clearSnareFavorites: () => [],
    },
});

export const { addSnareFavorite, removeSnareFavorite, clearSnareFavorites } =
    snareFavoriteSlice.actions;

export const snareReducer = snareFavoriteSlice.reducer;
