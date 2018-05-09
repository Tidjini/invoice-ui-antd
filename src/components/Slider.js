import React, { Component } from "react";
import { Menu, Icon, Switch } from "antd";
import SliderHeader from "./SliderHeader";
import "../styles/style.css";
import { main_colors, typo_bg_colors } from "../utils/const/colors";

const { SubMenu } = Menu;

export default class Slider extends Component {
  state = {
    mode: "inline",
    theme: "light"
  };
  changeMode = value => {
    this.setState({
      mode: value ? "vertical" : "inline"
    });
  };
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  render() {
    return (
      <div>
        <div style={{ width: 200, display: "none" }}>
          <Switch onChange={this.changeMode} /> Change Mode
          <span className="ant-divider" style={{ margin: "0 1em" }} />
          <Switch onChange={this.changeTheme} /> Change Theme
        </div>
        <SliderHeader />

        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1">
            <Icon
              type="home"
              style={{ fontSize: 16, color: typo_bg_colors.LIGHT_TYPE }}
            />
            <span style={{ fontWeight: 700 }}>Home</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon
              type="appstore"
              style={{ fontSize: 16, color: typo_bg_colors.LIGHT_TYPE }}
            />
            <span style={{ fontWeight: 700 }}>Stocks</span>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon
                  type="credit-card"
                  style={{ fontSize: 16, color: typo_bg_colors.LIGHT_TYPE }}
                />
                <span style={{ fontWeight: 700 }}>Facture</span>
              </span>
            }
          >
            <Menu.Item key="4">Option 3</Menu.Item>
            <Menu.Item key="5">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="6">Option 5</Menu.Item>
              <Menu.Item key="7">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="3">
            <Icon
              type="setting"
              style={{ fontSize: 16, color: typo_bg_colors.LIGHT_TYPE }}
            />
            <span style={{ fontWeight: 700 }}>Configuration</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
