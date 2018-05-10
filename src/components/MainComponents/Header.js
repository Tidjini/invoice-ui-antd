import React from "react";
import { Input, Badge, Icon } from "antd";
import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../../utils/const/colors";

import { profile } from "../../utils/const/images";
const Search = Input.Search;

export default ({ headerWidth }) => {
  return (
    <div
      style={{
        width: headerWidth,
        height: 60,
        position: "relative",
        transitionTimingFunction: "ease-in-out",
        transition: "all 1s"
      }}
    >
      <div
        style={{
          height: 60,
          display: "table-cell",
          verticalAlign: "middle"
        }}
      >
        <Search
          placeholder="Recherche"
          style={{ width: 350, float: "left", display: "inline" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,

          width: 100
        }}
      >
        <div
          style={{
            marginRight: 25,
            float: "left",
            marginTop: 22
          }}
        >
          <Badge count={2}>
            <a
              href="#"
              style={{
                width: 28,
                height: 28,
                display: "inline-block",
                margin: -5,
                height: 60
              }}
            >
              <Icon
                type="bell"
                style={{ fontSize: 28, color: typo_bg_colors.LIGHT_TYPE }}
              />
            </a>
          </Badge>
        </div>
        <div
          style={{
            height: 60,
            display: "table-cell",
            verticalAlign: "middle"
          }}
        >
          <a
            href="#"
            style={{
              backgroundColor: "#CCC",
              width: 46,
              height: 46,
              float: "right",
              display: "block",
              borderRadius: 38,
              border: "1px solid #CFCFCF"
            }}
          >
            <img
              src={profile}
              style={{
                width: 46,
                height: 46,
                borderRadius: 38,
                resize: "center"
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
