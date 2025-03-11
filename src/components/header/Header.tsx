import { Flex, Menu, MenuProps } from "antd";

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
  return (
    <Flex justify="center">
      <Flex
        style={{
          marginTop: 40,
          marginBottom: 16,
          width: "90vw",
          height: 84,
          paddingInline: 24,
        }}
        align="center"
        // justify="space-between"
      >
        <Flex align="center">
          <div
            style={{
              width: 40,
              height: 40,
              background: "#0e1422",
              marginRight: 12,
              borderRadius: "50%",
            }}
          />
          <p style={{ fontWeight: 700, fontSize: 20 }}>Ecommerce</p>
        </Flex>
        <Menu mode="horizontal" items={items} />
        <p>Search..</p>
      </Flex>
    </Flex>
  );
};
