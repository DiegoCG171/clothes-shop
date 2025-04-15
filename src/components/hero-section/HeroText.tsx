import { Col, Flex, Typography } from "antd";
import { CallToActionButton } from "../common/CallToActionButton";

const { Title, Text } = Typography;

export const HeroText = () => {
  return (
    <Col span={12} className="hero-text-column">
      <Flex vertical className="hero-text-container">
        <Title className="hero-title">Fresh Arrivals Online</Title>
        <Text className="hero-subtitle">
          Discover Our Newest Collection Today.
        </Text>
        <CallToActionButton text="View Collection" />
      </Flex>
    </Col>
  );
};
