import { Button, Col, Flex, Typography } from "antd";
import "./TextSection.css";

const { Title, Text } = Typography;

export const TextSection = () => {

  return (
    <Col span={12} className="text-column-style">
      <Flex vertical className="text-container">
        <Title  className="title-style">
          Fresh Arrivals Online
        </Title>
        
        <Text className="subtitle-style">
          Discover Our Newest Collection Today.
        </Text>
        
        <Button 
          size="large"
          className="button-style"
        >
          View Collection  <span className="button-arrow"> → </span>
        </Button>
      </Flex>
    </Col>
  );
};