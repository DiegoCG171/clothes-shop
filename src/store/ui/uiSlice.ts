import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductFilters {
  categories: string[];
  color: string | null;
  size: string | null;
  price: [number, number];
}

export type Tag = {
  name: string;
  value: string;
};


interface IntialState {
  productFilters: ProductFilters;
  sortBy: string;
}

const initialState: IntialState = {
  productFilters: {
    categories: [],
    color: '',
    size: '',
    price: [0, 1000],
  },
  sortBy: 'Relevance'
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onSetFilters: (state, action) => {
      state.productFilters = action.payload;
    },
    onClearAllFilters: (state) => {
      state.productFilters = {
        categories: [],
        color: '',
        size: '',
        price: [0, 1000],
      };
    },
    onRemoveFilter: (state, action: PayloadAction<Tag>) => {
      const { name, value } = action.payload;
  
      switch (name) {
        case "Category":
          state.productFilters.categories = state.productFilters.categories.filter((cat) => cat !== value);
          break;
        case "Color":
          if (state.productFilters.color === value) state.productFilters.color = null;
          break;
        case "Size":
          if (state.productFilters.size === value) state.productFilters.size = null;
          break;
        case "Price":
          state.productFilters.price = [0, 1000];
          break;
      }
    },
    onSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    }
  },
});

export const { onSetFilters, onClearAllFilters, onRemoveFilter, onSortBy } = uiSlice.actions;
