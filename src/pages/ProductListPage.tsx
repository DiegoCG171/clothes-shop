import { ProductList } from "../components/listing/productlist/ProductList"; // Ajusta la ruta si es diferente
import { products } from "../components/listing/productlist/ProductListData";
import { useEffect, useState } from "react";
import { FilterHeader } from "../components/filters/FilterHeader";
import { Col, Row } from "antd";
import { ProductFilter } from "../components/filters/ProductFilter";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export type Filter = {
  name: string;
  value: string;
};

export const ProductListPage = () => {
  const {filters: productFilters } = useSelector((state: RootState) => state.ui)
  const [filters, setFilters] = useState<Filter[]>([]);

  const handleRemoveFilter = (filterToRemove: Filter) => {
    setFilters((prev) =>
      prev.filter(
        (filter) =>
          !(
            filter.name === filterToRemove.name &&
            filter.value === filterToRemove.value
          )
      )
    );
  };


  useEffect(() => {
    setFilters(productFilters)
  }, [productFilters]);

  return (
    <Row style={{ paddingInline: 110, margin: 0, maxWidth: "100vw" }}>
      <Col span={4} style={{ padding: 0 }}>
        <ProductFilter />
      </Col>
      <Col offset={2} span={18}>
        <FilterHeader
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          sortBy="Relevance"
          onSortChange={(sort) => console.log("Sorted by:", sort)}
          totalResults={36}
          currentPage={1}
          pageSize={9}
        />
        <ProductList products={products} />
      </Col>
    </Row>
  );
};
