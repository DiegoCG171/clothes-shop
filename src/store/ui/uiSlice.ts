import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "../../pages";

interface IntialState {
    filters: Filter[];
}

const initialState: IntialState = {
    filters: []
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onSetFilters: (state, action) => {
            state.filters = action.payload;
        }
    }
});

export const { onSetFilters } = uiSlice.actions