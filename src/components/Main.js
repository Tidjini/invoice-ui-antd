import React, { Component } from "react";
import Header from "./Header";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../utils/const/colors";

export default class Main extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          height: 800,
          display: "inline-block",
          left: this.props.left,
          backgroundColor: typo_bg_colors.BACKGROUND,
          transitionTimingFunction: "ease-in-out",
          transition: "all 0.8s"
        }}
      >
        <Header />
      </div>
    );
  }
}
