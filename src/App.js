import React from "react";
import { DatePicker, Button } from "antd";
import Slider from "./components/Slider";
import "./styles/style.css";

export default () => {
  return (
    <div>
      <div style={{ float: "left", display: "inline-block" }}>
        <Slider />
      </div>
      <div
        style={{
          backgroundColor: "#CCC",
          width: 350,
          height: 100,
          display: "inline-block"
        }}
      />
    </div>
  );
};
