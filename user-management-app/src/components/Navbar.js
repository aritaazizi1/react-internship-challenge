import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  const items = [
    {
      label: <NavLink to="/home">Home</NavLink>,
      key: "/home",
      icon: <HomeOutlined />,
    },
  ];
  return (
    <div>
      <Menu
        theme="dark"
        style={{
          width: 250,
          height: "100vh",
          paddingTop: 20,
        }}
        mode="inline"
        items={items}
      />
    </div>
  );
}

export default Navbar;
