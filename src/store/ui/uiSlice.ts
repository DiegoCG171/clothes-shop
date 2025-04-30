
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter } from "../../pages";

export type SortOption = 'Relevance' | 'Price: Low to High' | 'Price: High to Low' | 'Newest';

interface UIState {
  filters: Filter[];
  sortBy: SortOption;
}

const initialState: UIState = {
  filters: [],
  sortBy: 'Relevance'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onSetFilters: (state, action: PayloadAction<Filter[]>) => {
      state.filters = action.payload;
    },
    onSetSortBy: (state, action: PayloadAction<SortOption>) => {
      state.sortBy = action.payload;
    }
  }
});

export const { onSetFilters, onSetSortBy } = uiSlice.actions;
