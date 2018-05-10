import React, { Component } from "react";
import Header from "./Header";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../utils/const/colors";

const WIDTH_FIX = 60;
export default class Main extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          display: "inline-block",
          left: this.props.left,
          backgroundColor: typo_bg_colors.BACKGROUND,
          transitionTimingFunction: "ease-in-out",
          transition: "all 0.8s",
          width: window.innerWidth - this.props.left - WIDTH_FIX
        }}
      >
        <Header headerWidth={window.innerWidth - this.props.left - WIDTH_FIX} />
      </div>
    );
  }
}
