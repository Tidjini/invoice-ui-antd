import React from "react";
import { clapicon } from "../../utils/const/images";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../../utils/const/colors";

export default ({ marginTop }) => {
  return (
    <div style={{ marginTop }}>
      <div>
        <img src={clapicon} style={{ width: 56, height: 56, float: "left" }} />
        <h1
          style={{
            height: 56,
            display: "table-cell",
            verticalAlign: "middle",
            fontSize: 42,
            fontWeight: 400,
            color: typo_bg_colors.DARK_TYPE,
            paddingLeft: 10
          }}
        >
          Hello Kate !
        </h1>
      </div>

      <p
        style={{
          color: typo_bg_colors.LIGHT_TYPE,
          fontSize: 16,

          fontWeight: 700,
          paddingLeft: 10
        }}
      >
        You have completed{" "}
        <span
          style={{
            color: main_colors.MAIN_COLOR_LIGHT_SHADE,
            fontWeight: 900
          }}
        >
          80%
        </span>{" "}
        of your profile. keep up the good work
      </p>
    </div>
  );
};
