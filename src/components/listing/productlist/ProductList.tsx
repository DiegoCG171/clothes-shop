import { useState } from "react";
import { Pagination } from "antd";
import { ProductListItem } from "./ProductListItem";
import { products } from "./ProductListData";
import "./ProductList.css";

export const ProductList = () => {
  const pageSize = 6; // productos por página
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className="product-grid">
        {currentProducts.map((product, index) => (
          <ProductListItem key={index} {...product} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};