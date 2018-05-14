import React from "react";
import { Menu, Button } from "antd";
import MenuItem from "./MenuItem";

const { SubMenu } = Menu;
export default () => {
  return (
    <div
      style={{ float: "left", display: "block", position: "absolute", left: 0 }}
    >
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="1">
          <MenuItem icon="home" itemTitle="Home" />
        </Menu.Item>
        <Menu.Item key="2">
          <MenuItem icon="dashboard" itemTitle="Dashboard" />
        </Menu.Item>

        <SubMenu
          key="sub1"
          title={<MenuItem icon="solution" itemTitle="Booking" />}
        >
          <Menu.Item key="3">Reservation</Menu.Item>
          <Menu.Item key="4">Arrivals</Menu.Item>
          <SubMenu key="sub1-2" title="Autre">
            <Menu.Item key="5">Departure</Menu.Item>
            <Menu.Item key="6">Out</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" title={<MenuItem icon="key" itemTitle="Rooms" />}>
          <Menu.Item key="9">Reservation</Menu.Item>
          <Menu.Item key="10">Outline</Menu.Item>
        </SubMenu>
        <Menu.Item key="7">
          <MenuItem icon="appstore" itemTitle="Stocks" />
        </Menu.Item>
        <Menu.Item key="8">
          <MenuItem icon="tool" itemTitle="Service" />
        </Menu.Item>
        <Menu.Item key="20">
          <MenuItem icon="setting" itemTitle="Configuration" />
        </Menu.Item>
      </Menu>
    </div>
  );
};
