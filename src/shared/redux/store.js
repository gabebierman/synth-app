import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { hatReducer } from "./slices/hatFavoriteSlice";
import { kickReducer } from "./slices/kickFavoriteSlice";
import { octaveReducer } from "./slices/octaveSlice";
import { scaleReducer } from "./slices/scaleSlice";
import { snareReducer } from "./slices/snareFavoriteSlice";
import { synthReducer } from "./slices/synthFavoriteSlice";

export default configureStore({
    reducer: {
        scale: scaleReducer,
        octave: octaveReducer,
        hat: hatReducer,
        kick: kickReducer,
        snare: snareReducer,
        synth: synthReducer,
    },
    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat([]),
});
