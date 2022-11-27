import { createSlice } from "@reduxjs/toolkit";

export const hatFavoriteSlice = createSlice({
    name: "hatFavorite",
    initialState: [],
    reducers: {
        addHatFavorite: (state, action) => [...state, action.payload],
        removeHatFavorite: (state, action) =>
            state.filter((val) => val.favorite_hat_id !== action.payload),
        clearHatFavorites: () => [],
    },
});

export const { addHatFavorite, removeHatFavorite, clearHatFavorites } =
    hatFavoriteSlice.actions;

export const hatReducer = hatFavoriteSlice.reducer;
