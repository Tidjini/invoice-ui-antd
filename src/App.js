import React, { Component } from "react";
import { DatePicker, Button } from "antd";
import Slider from "./components/Slider";
import DayPlan from "./components/DayPlan";
import "./styles/style.css";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "./utils/const/colors";

export default class App extends Component {
  state = {
    dayPlanVisible: false
  };

  setTodayPlanVisibility(value) {
    this.setState({
      dayPlanVisible: value
    });
  }

  render() {
    return (
      <div>
        <div style={{ float: "left", display: "inline-block" }}>
          <Slider onPlanDayClicked={this.setTodayPlanVisibility.bind(this)} />
        </div>
        <DayPlan visible={this.state.dayPlanVisible} />
        <div
          style={{
            position: "absolute",
            width: 350,
            height: 800,
            display: "inline-block",
            left: 256 + 350,
            backgroundColor: "#CCC"
          }}
        />
      </div>
    );
  }
}
