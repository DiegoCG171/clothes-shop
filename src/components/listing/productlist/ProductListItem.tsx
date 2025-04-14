import { Image, Space, Typography } from "antd";
import "./ProductListItem.css";

interface Props {
  img: string;
  title: string;
  inStock: boolean;
  price: string;
}

export const ProductListItem = ({ img, inStock, price, title }: Props) => {
  return (
    <Space direction="vertical">
      <Image src={img} className="product-image" />
      <Typography className="product-title">{title}</Typography>
      <Space size={16}>
        {inStock && <Typography className="in-stock-tag">IN STOCK</Typography>}
        <Typography className="product-price">$ {price}</Typography>
      </Space>
    </Space>
  );
};