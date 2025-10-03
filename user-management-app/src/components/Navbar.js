import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function Navbar() {
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
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <NavLink to="/home" />
          Home
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
