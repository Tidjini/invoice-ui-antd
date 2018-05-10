import React, { Component } from "react";
import { DatePicker, Button } from "antd";
import Slider from "./components/Slider";
import DayPlan from "./components/DayPlan";
import Main from "./components/MainComponents/Main";
import Notification from "./components/Notification/Notification";

import "./styles/style.css";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "./utils/const/colors";

export default class App extends Component {
  state = {
    dayPlanVisible: false,
    mainLeft: 256,
    notificationOpenState: false
  };

  setTodayPlanVisibility() {
    this.setState({
      dayPlanVisible: !this.state.dayPlanVisible,
      mainLeft: !this.state.dayPlanVisible ? 256 + 350 : 256
    });
  }

  displayNotification() {
    this.setState({
      notificationOpenState: !this.state.notificationOpenState
    });
  }

  render() {
    return (
      <div>
        <div style={{ float: "left", display: "inline-block" }}>
          <Slider onPlanDayClicked={this.setTodayPlanVisibility.bind(this)} />
        </div>
        <DayPlan
          visible={this.state.dayPlanVisible}
          onReturnClicked={this.setTodayPlanVisibility.bind(this)}
        />
        <Main
          left={this.state.mainLeft}
          displayNotification={this.displayNotification.bind(this)}
        />
        <Notification
          notificationOpenState={this.state.notificationOpenState}
          onCloseNotification={this.displayNotification.bind(this)}
        />
      </div>
    );
  }
}
