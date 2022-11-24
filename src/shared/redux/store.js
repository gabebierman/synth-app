import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { scaleReducer } from "./slices/scaleSlice";

export default configureStore({
    reducer: {
        scale: scaleReducer,
    },
    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat([]),
});
