import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { octaveReducer } from "./slices/octaveSlice";
import { scaleReducer } from "./slices/scaleSlice";

export default configureStore({
    reducer: {
        scale: scaleReducer,
        octave: octaveReducer,
    },
    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat([]),
});
