import {  Button, Typography, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Negra from "../../assets/PlayeraNegra.svg"
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart/cartSlice';

const { Text } = Typography;

interface Props{
    name:string,
    color:string,
    price:number,
    quantity:number,
    size:string
}

export const CartItem = ({name,color,price,quantity,size}: Props) => {

    const dispatch = useDispatch()

    const handlerRemove =() =>{ 
        dispatch(removeFromCart({name,color,size}))
    }

    return (
        <div>
            <div className="cart-item">
            <div className="cart-item-image">
              <img src={Negra} />
            </div>
            <div className="cart-item-details">
              <Text strong>{name}</Text>
              <Space>
                <Text type="secondary">Color:</Text>
                <div className={`color-circle`} style={{backgroundColor: color}}/>
                <Text type="secondary"> — Size: {size}</Text>
              </Space>
            </div>
            <div className="cart-item-price">
              <Text strong>${price}</Text>
            </div>
            <div className="cart-item-quantity">
              <div className="quantity-control">
                <Button className="quantity-button">−</Button>
                <div className="quantity-input">{quantity}</div>
                <Button className="quantity-button">+</Button>
              </div>
            </div>
            <div className="cart-item-remove">
              <Button icon={<CloseOutlined />} type="text" onClick={handlerRemove} />
            </div>
          </div>
        </div>
    );
}
