import React from "react";
import { Button, Checkbox, Calendar, Icon } from "antd";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../utils/const/colors";

const DayPlanHeader = () => {
  return (
    <div>
      <div style={{ height: 30 }}>
        <Button
          icon="left"
          ghost
          style={{
            border: 0,
            float: "right"
          }}
        />
      </div>
      <div style={{ marginTop: 50, marginLeft: 30 }}>
        <h2
          style={{
            fontSize: 36,
            color: typo_bg_colors.BACKGROUND,
            fontWeight: 200,
            padding: 0,
            margin: 0
          }}
        >
          Your day
        </h2>
        <p
          style={{
            fontSize: 12,
            color: typo_bg_colors.BACKGROUND,
            fontWeight: 600,
            marginTop: -10
          }}
        >
          09/05/2018
        </p>
      </div>
      <div style={{ marginTop: 50, marginLeft: 30, marginRight: 30 }}>
        <h2
          style={{
            fontSize: 18,
            color: typo_bg_colors.BACKGROUND,
            fontWeight: 500,
            padding: 0,
            margin: 0
          }}
        >
          Kate, this item needs attention!
        </h2>
        <p
          style={{
            fontSize: 12,
            color: typo_bg_colors.BACKGROUND_88,
            fontWeight: 600
          }}
        >
          git remote add origin https://github.com/Tidjini/ git push -u origin
          master git remote add origin
          https://github.com/Tidjini/invoice-ui-antd.git git push -u origin
          master
        </p>
      </div>
      <div style={{ marginTop: 50, marginLeft: 30, marginRight: 30 }}>
        <Button
          type="primary"
          style={{
            borderColor: main_colors.ACCENT_COLOR,
            backgroundColor: main_colors.ACCENT_COLOR,
            color: typo_bg_colors.BACKGROUND,
            fontSize: 12,
            fontWeight: 700
          }}
        >
          Review
        </Button>
        <Button
          type="primary"
          ghost
          style={{
            marginLeft: 16,
            color: typo_bg_colors.BACKGROUND,
            borderColor: typo_bg_colors.LIGHT_TYPE,
            fontSize: 12,
            fontWeight: 700
          }}
        >
          Dismiss
        </Button>
      </div>
      <div
        style={{
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30,
          height: 0.5,
          backgroundColor: typo_bg_colors.LIGHT_TYPE
        }}
      />
    </div>
  );
};

export { DayPlanHeader };
