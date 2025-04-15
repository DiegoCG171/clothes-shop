import { Col, Flex, Input, Menu, Row, Space } from "antd";
import { TbSearch } from "react-icons/tb";

import { useNavigate } from "react-router-dom";
import { menuItems } from "./";
import { Logo } from "../layout";
import { userOptions } from "./data/UserOptions";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <Flex justify="center" style={{ marginBottom: 48 }}>
      <Row className="header" align="middle">
        <Col span={8}>
          <Logo />
        </Col>
        <Col span={8}>
          <Menu
            mode="horizontal"
            style={{ width: 320 }}
            items={menuItems}
            onClick={(item) => handleNavigate(item.key)}
          />
        </Col>
        <Col span={8} className="header_menu_container header_justify-end">
          <Space size={32}>
            <Input
              addonBefore={<TbSearch />}
              style={{ width: 300 }}
              placeholder="Search products"
            />
            {userOptions.map(({ icon, name }) => (
              <div key={name}>{icon}</div>
            ))}
          </Space>
        </Col>
      </Row>
    </Flex>
  );
};
