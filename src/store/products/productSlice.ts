import { createSelector, createSlice } from "@reduxjs/toolkit";
import { productsInitialState } from "./products.state";
import { RootState } from "../store";

export const selectFilteredProducts = createSelector(
  [
    (state: RootState) => state.products.products,
    (state: RootState) => state.ui.productFilters,
    (state: RootState) => state.ui.sortBy,
  ],
  (products, filters, sortBy) => {
    const filteredProducts = products.filter((product) => {
      const priceNumber = parseFloat(product.price);
      const matchCategory =
        !filters.categories.length ||
        filters.categories.includes(product.category);
      const matchColor = !filters.color || product.color === filters.color;
      const matchSize = !filters.size || product.size === filters.size;
      const matchPrice =
        priceNumber >= filters.price[0] && priceNumber <= filters.price[1];

      return matchCategory && matchColor && matchSize && matchPrice;
    });

    if (sortBy === "Relevance") {
      return filteredProducts;
    }

    if (sortBy === "Newest") {
      return filteredProducts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    if (sortBy === "Price: Low to High") {
      return filteredProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }

    if (sortBy === "Price: High to Low") {
      return filteredProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }

    return filteredProducts;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {},
});
