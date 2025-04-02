import { Button, Col, Row, Space, Typography } from "antd";

import { BestSellingProductItem } from "./BestSellingProductItem";
import { useEffect, useState } from "react";
import { Product, products } from "./bestSellingData";
const { Title } = Typography;

interface Props {
  type?: "best-selling" | "showcase";
}

export const BestSellingProductList = ({ type = "best-selling" }: Props) => {
  const [filter, setFilter] = useState("feature");
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    if (type === "best-selling") {
      setProductList(products.filter((product) => product.isBestSelling));
      return;
    }

    setProductList(products.slice(0, 4));
  }, [type]);

  const handleFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <Space direction="vertical" style={{ width: "100%", marginTop: 160 }}>
      {type === "best-selling" ? (
        <Title
          level={3}
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            color: "#0E1422",
            marginBottom: 80,
          }}
        >
          Best Selling
        </Title>
      ) : (
        <Space
          style={{ width: "100%", justifyContent: "center", marginBottom: 48 }}
        >
          <Button
            type={filter === "feature" ? "default" : "text"}
            style={{ borderRadius: 50 }}
            onClick={() => handleFilter("feature")}
          >
            Featured
          </Button>
          <Button
            type={filter !== "feature" ? "default" : "text"}
            style={{ borderRadius: 50 }}
            onClick={() => handleFilter("latest")}
          >
            Latest
          </Button>
        </Space>
      )}
      <Row
        justify="center"
        align="middle"
        gutter={28}
        style={{ minHeight: 400 }}
      >
        {productList.map((product) => (
          <Col key={product.title}>
            <BestSellingProductItem {...product} />
          </Col>
        ))}
      </Row>
    </Space>
  );
};
