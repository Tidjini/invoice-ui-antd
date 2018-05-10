import React from "react";
import { Icon } from "antd";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../../utils/const/colors";

export default ({ notificationOpenState, onCloseNotification }) => {
  const width = notificationOpenState ? 400 : 0;
  const display = notificationOpenState ? "inline-block" : "none";

  return (
    <div
      style={{
        width,
        height: 1250,
        backgroundColor: typo_bg_colors.DARK_TYPE,
        transitionTimingFunction: "ease-in-out",
        transition: "all 0.7s",
        position: "absolute",
        top: 0,
        right: 0
      }}
    >
      <div style={{ display, marginTop: 25, marginLeft: 25, marginRight: 25 }}>
        <a href="#" onClick={onCloseNotification}>
          <Icon
            type="close"
            style={{ fontSize: 18, color: typo_bg_colors.LIGHT_TYPE }}
          />
        </a>
      </div>

      <div
        style={{
          display,
          height: 1200,
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: typo_bg_colors.BACKGROUND
          }}
        >
          Notifications
        </h2>
      </div>
    </div>
  );
};
