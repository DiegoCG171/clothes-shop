import { Col, Flex, Row } from "antd";

import LogoFooter from "../../assets/LogomarkFooter.svg";

export const Footer = () => {
  return (
    <Flex justify="center">
      <Row style={{ width: "90vw" }}>
        <Col span={8}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: 'center'
            }}
          >
            <img src={LogoFooter} alt="Logo Footer" />
            <p style={{ marginLeft: 12, fontWeight: 700, fontSize: 20 }}>
              Ecommerce
            </p>
          </div>
        </Col>
        <Col span={8}>
          <Row gutter={72} justify="center" >
            <Col>SUPPORT</Col>
            <Col>COMPANY</Col>
            <Col>SHOP</Col>
          </Row>
        </Col>
        <Col style={{display: 'flex', justifyContent: 'center'}} span={8}>ACCEPTED PAYMENTS</Col>
      </Row>
    </Flex>
  );
};
