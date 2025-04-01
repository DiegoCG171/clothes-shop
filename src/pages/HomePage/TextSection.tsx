import { Button, Col, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { titleStyle, subtitleStyle, buttonStyle, textColumnStyle } from "./styles";

const { Title, Text } = Typography;

export const TextSection = () => {
  const navigate = useNavigate();

  return (
    <Col span={12} style={textColumnStyle}>
      <Flex vertical style={{ maxWidth: "500px" }}>
        <Title level={1} style={titleStyle}>
          Fresh Arrivals Online
        </Title>
        
        <Text style={subtitleStyle}>
          Discover Our Newest Collection Today.
        </Text>
        
        <Button 
          size="large"
          onClick={() => navigate("/collection")}
          style={buttonStyle}
        >
          View Collection <span style={{ fontSize: "18px" }}>→</span>
        </Button>
      </Flex>
    </Col>
  );
};