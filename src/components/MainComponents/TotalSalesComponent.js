import React, { Component } from "react";
import { Chart, Axis, Geom, Tooltip, Legend } from "BizCharts";
import DataSet from "@antv/data-set";
import { data } from "../../utils/const/TotalSales";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../../utils/const/colors";

export default class TotalSales extends Component {
  render() {
    const width = this.props.width || 450;

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["In", "Out"], // 展开字段集
      key: "city", // key字段
      value: "temperature" // value字段
    });
    console.log(dv);
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    return (
      <div
        style={{
          width,
          marginTop: this.props.marginTop,
          float: "left"
        }}
      >
        <div
          style={{
            width: width - 30,
            float: "left",
            marginLeft: 30
          }}
        >
          <div
            style={{
              width: width - 30,
              float: "left"
            }}
          >
            <h3
              style={{
                color: typo_bg_colors.DARK_TYPE,
                fontSize: 18,
                fontWeight: 700,
                float: "left"
              }}
            >
              Your Total Sales
            </h3>
            <h3
              style={{
                color: typo_bg_colors.LIGHT_TYPE,
                fontSize: 14,
                fontWeight: 700,
                float: "right"
              }}
            >
              Last 6 months
            </h3>
          </div>
          <h1
            style={{
              color: typo_bg_colors.DARK_TYPE,
              fontSize: 36,
              fontWeight: 100,
              display: "inline-block",
              float: "left"
            }}
          >
            180 000,00 DA
          </h1>
        </div>
        <div
          style={{
            width: width,
            float: "left"
          }}
        >
          <Chart
            width={width}
            height={300}
            data={dv}
            scale={cols}
            forceFit={false}
          >
            <Legend />
            <Axis name="month" />
            <Axis
              name="temperature"
              label={{ formatter: val => `${val}K DA` }}
            />
            <Tooltip crosshairs={{ type: "y" }} />
            <Geom
              type="line"
              position="month*temperature"
              size={2}
              color={"city"}
            />
            <Geom
              type="point"
              position="month*temperature"
              size={4}
              shape={"circle"}
              color={"city"}
              style={{ stroke: "#fff", lineWidth: 1 }}
            />
          </Chart>
        </div>
      </div>
    );
  }
}
