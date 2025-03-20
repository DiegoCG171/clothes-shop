import { Col, Flex, Input, Menu, MenuProps, Row, Space } from "antd";
import { TbSearch, TbShoppingCart, TbUserCircle } from "react-icons/tb";
import LogoMark from "../../assets/Logomark.svg";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Categories",
    key: "categories",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex justify="center">
      <Row style={{ width: "80vw", marginTop: 40 }}>
        <Col span={8}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={LogoMark} alt="Logo Mark" />
            <p style={{ marginLeft: 12, fontWeight: 700, fontSize: 20 }}>
              Ecommerce
            </p>
          </div>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Menu
            mode="horizontal"
            style={{ width: 320 }}
            items={items}
            onClick={(item) => navigate(`/${item.key}`)}
          />
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Space size={32}>
            <Input
              addonBefore={<TbSearch />}
              style={{ width: 300 }}
              placeholder="Search products"
            />
            <TbShoppingCart
              size={24}
              color="#5C5F6A"
              style={{ cursor: "pointer" }}
            />
            <TbUserCircle
              size={24}
              color="#5C5F6A"
              style={{ cursor: "pointer" }}
            />
          </Space>
        </Col>
      </Row>
    </Flex>
  );
};
