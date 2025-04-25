import { Image, Space, Typography } from "antd";

interface Props {
    img: string;
    title: string;
    inStock: boolean;
    price: string
}

export const BestSellingProductItem = ({img, inStock, price, title}: Props) => {
  return (
    <Space direction="vertical">
        <Image src={img} style={{backgroundColor: '#F6F6F6'}} />
        <Typography style={{fontSize: 14, fontWeight: 500, color: '#0E1422'}}>{title}</Typography>
        <Space size={16}>
            <Typography style={{fontSize: 12, fontWeight: 500, color: '#0E1422', padding: '4px 16px', borderRadius: 50, border: '1px solid #E6E7E8'}}>{inStock && 'IN STOCK'}</Typography>
            <Typography style={{fontSize: 12, fontWeight: 400, color: '#474B57'}}>$ {price}</Typography>
        </Space>
    </Space>
  )
}
