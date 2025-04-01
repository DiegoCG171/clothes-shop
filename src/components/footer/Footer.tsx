import { Button, Col, Flex, Input, Row, Space } from "antd";
import LogoGithub from "../../assets/Github.svg";
import LogoInstagram from "../../assets/Instagram.svg";
import LogoYouTube from "../../assets/Youtube.svg";
import LogoAmex from "../../assets/Amex.svg";
import LogoMasterCard from "../../assets/Mastercard.svg";
import LogoVisa from "../../assets/Visa.svg";
import { Logo } from "../layout";

interface Props {
  type?: "default" | "without-newsletter";
}

export const Footer = ({ type = "default" }: Props) => {
  return (
    <Flex align="center" vertical style={{marginTop: 160}}>
      {type === "default" && (
        <Row
          style={{
            width: "100vw",
            paddingBlock: 60,
            paddingInline: 190,
            background: "#F6F6F6",
          }}
        >
          <Col span={12}>
            <Space size={24} direction="vertical">
              <p
                style={{
                  color: "#0E1422",
                  fontWeight: "bold",
                  fontSize: 24,
                }}
              >
                Join Our Newsletter
              </p>
              <p
                style={{
                  color: "#5C5F6A",
                }}
              >
                We love to surprise our subscribers with occasional gifts.
              </p>
            </Space>
          </Col>
          <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
            <Space>
              <Input placeholder="Your email address" style={{ width: 300 }} />
              <Button style={{ background: "#0E1422", color: "#fff" }}>
                Subscribe
              </Button>
            </Space>
          </Col>
        </Row>
      )}
      <Row style={{ width: "80vw", paddingBlock: 80 }}>
        <Col span={8}>
          <Logo type="footer" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 12,
              marginBottom: 32,
              width: 200,
              lineHeight: 2,
              color: "#5C5F6A",
            }}
          >
            <p>
              DevCut is a YouTube channel for practical project-based learning.
            </p>
          </div>
          <Space size={24}>
            <img src={LogoGithub} alt="Logo Github" />
            <img src={LogoInstagram} alt="Logo Instagram" />
            <img src={LogoYouTube} alt="Logo YouTube" />
          </Space>
        </Col>
        <Col span={8}>
          <Row gutter={40} justify="center">
            <Col>
              <p
                style={{ color: "#878A92", fontWeight: 500, marginBottom: 40 }}
              >
                SUPPORT
              </p>
              <Space
                size={16}
                direction="vertical"
                style={{ color: "#5C5F6A", fontWeight: 500 }}
              >
                <p>FAQ</p>
                <p>Terms of use</p>
                <p>Privacy Policy</p>
              </Space>
            </Col>
            <Col>
              <p
                style={{ color: "#878A92", fontWeight: 500, marginBottom: 40 }}
              >
                COMPANY
              </p>
              <Space
                size={16}
                direction="vertical"
                style={{ color: "#5C5F6A", fontWeight: 500 }}
              >
                <p>About ous</p>
                <p>Contact</p>
                <p>Carrers</p>
              </Space>
            </Col>
            <Col>
              <p
                style={{ color: "#878A92", fontWeight: 500, marginBottom: 40 }}
              >
                SHOP
              </p>
              <Space
                size={16}
                direction="vertical"
                style={{ color: "#5C5F6A", fontWeight: 500 }}
              >
                <p>My Account</p>
                <p>Checkout</p>
                <p>Cart</p>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          span={8}
        >
          <p style={{ marginBottom: 40, color: "#878A92", fontWeight: 500 }}>
            ACCEPTED PAYMENTS
          </p>
          <Space size={24}>
            <img src={LogoMasterCard} alt="Logo Github" />
            <img src={LogoAmex} alt="Logo Instagram" />
            <img src={LogoVisa} alt="Logo YouTube" />
          </Space>
        </Col>
      </Row>
    </Flex>
  );
};
