import { useState } from 'react';
import { FilterHeader } from "../components/filters/FilterHeader";

type Filter = {
  name: string;
  value: string;
};

export const ProductListPage = () => {
  const [filters, setFilters] = useState<Filter[]>([
    { name: 'Category', value: 'Perfume' },
    { name: 'Size', value: 'M' },
  ]);

  const handleRemoveFilter = (filterToRemove: Filter) => {
    setFilters((prev) =>
      prev.filter(
        (filter) =>
          !(filter.name === (filterToRemove as any).name && filter.value === (filterToRemove as any).value)
      )
    );
  };

  return (
    <>
      <FilterHeader
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        sortBy="Relevance"
        onSortChange={(sort) => console.log('Sorted by:', sort)}
        totalResults={36}
        currentPage={1}
        pageSize={9}
      />
    </>
  );
};
