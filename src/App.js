import React from "react";
import { DatePicker, Button } from "antd";
import Slider from "./components/Slider";
import { DayPlanHeader } from "./components/DayPlan";
import "./styles/style.css";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "./utils/const/colors";

export default () => {
  return (
    <div>
      <div style={{ float: "left", display: "inline-block" }}>
        <Slider />
      </div>
      <div
        className="blue-gradient-color"
        style={{
          width: 350,
          height: 500,
          display: "inline-block"
        }}
      >
        <DayPlanHeader />
        <div className="diag">
          <h2>azjef</h2>
        </div>
      </div>
    </div>
  );
};
