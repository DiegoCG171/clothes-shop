import { Row, Col, Flex } from "antd";
import { TbTruck, TbShieldCheck, TbAward } from "react-icons/tb";

export const FeaturesSection = () => {
  return (
    <Flex vertical>
      <Row
        justify="space-between"
        style={{ width: "100%", paddingBlock: 80, paddingInline: 110 }}
      >
        <Col span={6}>
          <TbTruck size={24} className="features-section-icon" />
          <p
            style={{
              color: "#202533",
              marginTop: 12,
              marginBottom: 16,
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Free Shipping
          </p>
          <p style={{ color: "#5C5F6A", lineHeight: 1.75, fontSize: 14 }}>
            Upgrade your style today and get FREE <br />
            shipping on all orders! Don´t miss out.
          </p>
        </Col>
        <Col span={6}>
          <TbAward size={24} className="features-section-icon" />
          <p
            style={{
              color: "#202533",
              marginTop: 12,
              marginBottom: 16,
              lineHeight: 1,
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Satisfaction Award
          </p>
          <p style={{ color: "#5C5F6A", lineHeight: 1.75, fontSize: 14 }}>
            Shop confidently with our Satisfaction <br />
            guarantee: Love it or get a refound.
          </p>
        </Col>
        <Col span={6}>
          <TbShieldCheck size={24} className="features-section-icon" />
          <p
            style={{
              color: "#202533",
              marginTop: 12,
              marginBottom: 16,
              lineHeight: 1,
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Secure Payment
          </p>
          <p style={{ color: "#5C5F6A", lineHeight: 1.75, fontSize: 14 }}>
            Your security is our priority. Your <br />
            payments are secure with us
          </p>
        </Col>
      </Row>
    </Flex>
  );
};
