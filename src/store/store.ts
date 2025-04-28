import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { uiSlice } from "./ui/uiSlice";
import { sortSlice } from "./sortSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        sort: sortSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
