

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type SortOption = 'Relevance' | 'Price: Low to High' | 'Price: High to Low' | 'Newest';


interface SortState {
  sortBy: SortOption;
}

const initialState: SortState = {
  sortBy: 'Relevance',
};


export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortOption>) => {
      state.sortBy = action.payload;
    },
  },
});


export const { setSortBy } = sortSlice.actions;

