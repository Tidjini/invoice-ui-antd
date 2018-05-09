import React from "react";
import { Icon } from "antd";
import { main_colors, typo_bg_colors } from "../utils/const/colors";

export default () => {
  return (
    <div
      style={{
        height: 80,
        width: 250,
        backgroundColor: typo_bg_colors.BACKGROUND,
        paddingLeft: 16
      }}
    >
      <div
        style={{
          height: 80,
          display: "table-cell",
          verticalAlign: "middle"
        }}
      >
        <Icon
          type="gitlab"
          style={{
            fontSize: 24,
            backgroundColor: main_colors.ACCENT_COLOR,
            borderRadius: 50,
            width: 38,
            height: 38,
            paddingTop: 7,
            display: "table-cell",
            verticalAlign: "middle",
            float: "left",
            color: typo_bg_colors.BACKGROUND
          }}
        />
        <div
          style={{
            float: "left",
            marginLeft: 16
          }}
        >
          <h4
            style={{
              fontWeight: "bold",
              margin: 0,
              padding: 0,
              color: typo_bg_colors.DARK_TYPE
            }}
          >
            EL Stormae BEN-HMIDA
          </h4>
          <h6
            style={{
              fontWeight: "bold",
              margin: 0,
              padding: 0,
              color: typo_bg_colors.LIGHT_TYPE
            }}
          >
            Stromae@BEN-HMIDA.com
          </h6>
        </div>
      </div>
    </div>
  );
};
