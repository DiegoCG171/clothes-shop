import { List, Pagination } from "antd";
import { BestSellingProductItem } from "../../products/BestSellingProductItem";
import { Product } from "./ProductListData";
import { useState } from "react";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <List
        grid={{
          gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3, }} //responsivaaa
        dataSource={currentProducts}
        renderItem={(item) => (
          <List.Item>
            <BestSellingProductItem {...item} />
          </List.Item>
        )}
      />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <Pagination
          current={currentPage}
          total={products.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};