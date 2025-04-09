import { Row, Col, Button } from 'antd';
import MiladaImage from "../assets/milada.png";
import './FashionSection.css'; 
import { ArrowRightOutlined } from '@ant-design/icons';


export const FashionSection = () => {
  return (
    <div className="fashion-section">
      <Row align="middle" justify="space-between">
        <Col xs={24} md={12}>
          <h2>Browse Our Fashion Paradise!</h2>
          <p>Step into a world of style and explore our diverse collection of clothing categories.</p>
          <Button style={{ background: "#0E1422", color: "#fff" }}>
                 Start Browsing <ArrowRightOutlined />
           </Button>
        </Col>
        <Col xs={24} md={12} className="image-container">
          <img src={MiladaImage} alt="Fashion Item" />
        </Col>
      </Row>
    </div>
  );
};
