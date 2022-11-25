import { createSlice } from "@reduxjs/toolkit";

export const octaveSlice = createSlice({
    name: "octave",
    initialState: "2",
    reducers: {
        setOctave: (state, action) => action.payload,
    },
});

export const { setOctave } = octaveSlice.actions;
export const octaveReducer = octaveSlice.reducer;
