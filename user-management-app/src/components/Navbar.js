import { Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const items = [
    {
      label: "Home",
      key: "/home",
      icon: <HomeOutlined />,
    },
    {
      label: "User Details",
      key: "/users",
      icon: <UserOutlined />,
    },
  ];
  return (
    <div>
      <Menu
        theme="dark"
        style={{
          flex: 1,
          minWidth: 0,
          height: "70px",
          justifyContent: "right",
          alignItems: "center",
          paddingRight: "30px",
        }}
        mode="horizontal"
        selectedKeys={[location.pathname]}
      >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <NavLink to={item.key} />
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;
