import { Breadcrumb, Col, Flex, Input, Menu, Row, Space } from "antd";
import { TbChevronRight, TbSearch } from "react-icons/tb";

import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "./";
import { Logo } from "../layout";
import { userOptions } from "./data/UserOptions";
import { useEffect, useState } from "react";
import { capitalizeString } from "../../helpers/capitalizeString";
import { mainRoutes } from "../../router/routes";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ItemType } from "antd/es/menu/interface";

export const Header = () => {
  const {user} = useSelector( (state: RootState) => state.auth )
  const navigate = useNavigate();
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      title: "Ecommerce",
    },
  ]);
  const [menuListItems, setmenuListItems] = useState<ItemType[]>([]);

  const handleNavigate = (path: string) => {
    navigate(`${path}`);
  };

  useEffect(() => {
    const path = location.pathname.split('/')
    setBreadcrumbs([
      {
        title: "Ecommerce",
      },
      {
        title: capitalizeString(path[1]),
      },
    ])
  }, [location]);

  useEffect(() => {
    
    const filteredRoutes = mainRoutes.filter(  route => route.roles?.includes(user.role));

    const filteredMenuItems = menuItems.filter( items => {
      const route = filteredRoutes.find( route => route.path === items?.key )

      return route
    } )
    console.log(filteredMenuItems)
    setmenuListItems(filteredMenuItems)
    
  }, [user.role]);


  return (
    <Flex justify="center" vertical style={{ marginBottom: 48 }}>
      <Row className="header" align="middle" style={{ marginBottom: 48 }}>
        <Col span={8}>
          <Logo />
        </Col>
        <Col span={8}>
          <Menu
            mode="horizontal"
            style={{ width: 320 }}
            items={menuListItems}
            onClick={(item) => handleNavigate(item.key)}
          />
        </Col>
        <Col span={8} className="header_menu_container header_justify-end">
          <Space size={32} style={{ display: 'flex', justifyContent: 'end'}} >
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
      {location.pathname !== "/home" && (
        <Row
          style={{
            paddingInline: 110,
            paddingBlock: 24,
            background: "#F6F6F6",
          }}
        >
          <Breadcrumb
            separator={<TbChevronRight style={{ marginTop: 4 }} />}
            items={breadcrumbs}
          />
        </Row>
      )}
    </Flex>
  );
};
