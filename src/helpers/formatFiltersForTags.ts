import { ProductFilters } from "../store/ui/uiSlice";

export const formatFiltersForTags = (filters: ProductFilters): { name: string; value: string }[] => {
    const tags: { name: string; value: string }[] = [];
  
    if (filters.categories.length) {
      tags.push(...filters.categories.map(category => ({ name: 'Category', value: category })));
    }
  
    if (filters.color) {
      tags.push({ name: 'Color', value: filters.color });
    }
  
    if (filters.size) {
      tags.push({ name: 'Size', value: filters.size });
    }
  
    if (
      Array.isArray(filters.price) &&
      (filters.price[0] !== 0 || filters.price[1] !== 1000)
    ) {
      tags.push({
        name: 'Price',
        value: `$${filters.price[0]} - $${filters.price[1]}`
      });
    }
  
    return tags;
  }
  