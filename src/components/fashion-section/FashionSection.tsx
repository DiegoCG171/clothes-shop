import { Typography, Row, Col } from "antd";
import MiladaImage from "../../assets/milada.png";
import { CallToActionButton } from "../common/CallToActionButton";

const { Title, Paragraph } = Typography;

export const FashionSection = () => {
  return (
    <div className="fashion-section">
      <Row align="middle" justify="space-between">
        <Col xs={24} md={12} style={{paddingLeft: 110}}>
          <Title level={3} className="fashion-section-title">
            Browse Our Fashion Paradise!
          </Title>
          <Paragraph className="fashion-section-text">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </Paragraph>
          <CallToActionButton text="Start Browsing" />
        </Col>
        <Col xs={24} md={12} className="fashion-section-image-container">
          <img
            className="fashion-section-image-container-img"
            src={MiladaImage}
            alt="Fashion Item"
          />
        </Col>
      </Row>
    </div>
  );
};
