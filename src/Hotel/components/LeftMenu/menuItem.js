import React from "react";
import { Icon } from "antd";
import { main_colors, typo_bg_colors } from "../../../utils/const/colors";

export default ({ icon, itemTitle }) => {
  return (
    <div>
      <Icon
        type={icon}
        style={{ fontSize: 12, color: typo_bg_colors.LIGHT_TYPE }}
      />
      <span style={{ fontWeight: 700, fontSize: 12 }}>{itemTitle}</span>
    </div>
  );
};
