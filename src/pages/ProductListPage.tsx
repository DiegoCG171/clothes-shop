<<<<<<< HEAD
import { ProductList } from "../components/listing/productlist/ProductList"; // Ajusta la ruta si es diferente
import { products } from "../components/listing/productlist/ProductListData";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProductFilter } from "../components/Filters/ProductFilter";
import { FilterHeader } from "../components/Filters/FilterHeader";

export type Filter = {
  name: string;
  value: string;
};
=======
import { ProductList } from "../components/listing/productlist/ProductList";
import { FilterHeader } from "../components/filters/FilterHeader";
import { Col, Row } from "antd";
import { ProductFilter } from "../components/filters/ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProducts } from "../store/products/productSlice";
import { RootState } from "../store/store";
import { formatFiltersForTags } from "../helpers/formatFiltersForTags";
import { onRemoveFilter, onSortBy, Tag } from "../store/ui/uiSlice";
>>>>>>> 199db46ea3f128ede938e99e2d57d5a8e9162423

export const ProductListPage = () => {
  const dispatch = useDispatch()
  const filteredProducts = useSelector(selectFilteredProducts)
  const {productFilters, sortBy} = useSelector((state: RootState) => state.ui);
  const tags = formatFiltersForTags(productFilters)

  const handleRemoveFilter = (tag: Tag) => {
    dispatch(onRemoveFilter(tag))
  }

  const handleSortBy = (value: string) => {
    dispatch(onSortBy(value))
  }

  return (
    <Row style={{ paddingInline: 110, margin: 0, maxWidth: "100vw" }}>
      <Col sm={{span: 6}} xxl={{span: 4}} style={{ padding: 0 }}>
        <ProductFilter />
      </Col>
      <Col sm={{span: 16, offset: 2}} xxl={{span: 18, offset: 1}}>
        <FilterHeader
          filters={tags}
          onRemoveFilter={handleRemoveFilter}
          sortBy={sortBy}
          onSortChange={handleSortBy}
          totalResults={filteredProducts.length}
          currentPage={1}
          pageSize={9}
        />
        <ProductList products={filteredProducts} />
      </Col>
    </Row>
  );
};
