import {
  AppstoreOutlined,
  CarFilled,
  BookOutlined,
  UserOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu" style={{ height: `calc(100vh - 60px)` }}>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Parkings",
            key: "/parkings",
            icon: <CarFilled />,
          },
          {
            label: "Tickets",
            key: "/orders",
            icon: <BookOutlined />,
          },
          {
            label: "Users",
            key: "/users",
            icon: <UserOutlined />,
          },
          {
            label: "Đăng Ký Bãi Xe",
            key: "/formregister",
            icon: <FormOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
