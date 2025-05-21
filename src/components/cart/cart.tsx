import { Row, Col, Card, Button, Divider, Typography} from 'antd';
import {CartItem} from "./CartItem"
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const { Title, Text } = Typography;

export const CartPage = () => {

  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <div className="cart-container">
      <Row>
        <Col>
          <Title level={4} className="cart-title">Your cart</Title>
          <Divider />

          {items.map(item => (<CartItem {...item} />))}
          
        </Col>

        <Col>
          <Card className="order-summary">
            <Title level={5}>Order Summary</Title>
            <Divider />
            
            <div className="summary-row">
              <Text type="secondary" >Subtotal</Text>
              <Text strong>$ 90.00</Text>
            </div>
            
            <div className="summary-row">
              <Text type="secondary">Shipping:</Text>
              <Text strong>Free</Text>
            </div>
            
            <div className="summary-row">
              <Text type="secondary">Tax:</Text>
              <Text strong>$ 3.00</Text>
            </div>
            
            <Divider />
            
            <div className="summary-row total">
              <Text strong>Total</Text>
              <Text strong>$ 100.00</Text>
            </div>
            
            <Button type="primary" block className="checkout-button">
              Checkout
            </Button>
            
            <Button type="link" block className="continue-shopping">
              Continue Shopping
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
    
  );
};

