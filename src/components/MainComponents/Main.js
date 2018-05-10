import React, { Component } from "react";
import Header from "./Header";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../../utils/const/colors";
import HelloComponent from "./HelloComponent";
import TotalSales from "./TotalSalesComponent";
import RecentActivity from "./RecentActivityComponent";
import InvoiceTable from "./InvoiceTable";

const WIDTH_FIX = 60;
export default class Main extends Component {
  render() {
    const mainWidth = window.innerWidth - this.props.left - WIDTH_FIX;
    return (
      <div
        style={{
          position: "absolute",
          display: "inline-block",
          left: this.props.left,
          backgroundColor: typo_bg_colors.BACKGROUND,
          transitionTimingFunction: "ease-in-out",
          transition: "all 0.8s",
          width: mainWidth,
          padding: 20
        }}
      >
        <Header headerWidth={mainWidth} />
        <HelloComponent marginTop={50} />

        <TotalSales width={mainWidth / 2 - 50} marginTop={50} />
        <RecentActivity marginTop={50} width={mainWidth / 2 - 50} />
        <InvoiceTable marginTop={50} width={mainWidth - 70} />
      </div>
    );
  }
}
