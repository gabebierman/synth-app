import { createSlice } from "@reduxjs/toolkit";
import * as Scale from "tonal-scale";

export const scaleSlice = createSlice({
    name: "scale",
    initialState: Scale.notes("C major"),
    reducers: {
        setScale: (state, action) => action.payload,
    },
});

export const { setScale } = scaleSlice.actions;
export const scaleReducer = scaleSlice.reducer;
