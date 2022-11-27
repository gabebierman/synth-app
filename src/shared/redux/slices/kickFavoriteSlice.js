import { createSlice } from "@reduxjs/toolkit";

export const kickFavoriteSlice = createSlice({
    name: "kickFavorite",
    initialState: [],
    reducers: {
        addKickFavorite: (state, action) => [...state, action.payload],
        removeKickFavorite: (state, action) =>
            state.filter((val) => val.favorite_kick_id !== action.payload),
        clearKickFavorites: () => [],
    },
});

export const { addKickFavorite, removeKickFavorite, clearKickFavorites } =
    kickFavoriteSlice.actions;

export const kickReducer = kickFavoriteSlice.reducer;
