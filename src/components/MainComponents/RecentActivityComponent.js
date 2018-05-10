import React from "react";
import DataSet from "@antv/data-set";
import { Timeline, Icon } from "antd";

import { data } from "../../utils/const/RecentActivities";
import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../../utils/const/colors";

export default ({ width, marginTop }) => {
  return (
    <div
      style={{
        width,
        marginTop,
        float: "right",
        marginLeft: 30,
        transitionTimingFunction: "ease",
        transition: "all .8s"
      }}
    >
      <div
        style={{
          width: width - 30,
          float: "left"
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
            Recent Activity
          </h3>
          <h3
            style={{
              color: typo_bg_colors.LIGHT_TYPE,
              fontSize: 14,
              fontWeight: 700,
              float: "right"
            }}
          >
            Past 12 hours
          </h3>
        </div>
      </div>
      <div style={{ display: "inline-block", marginTop: 20 }}>
        <Timeline pending="In Progress...">
          <Timeline.Item color={main_colors.THIRD_COLOR}>
            <div>
              <h3
                style={{
                  color: typo_bg_colors.DARK_TYPE,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                You have changed Quote 001 status to Accepted
              </h3>
              <h6
                style={{
                  color: typo_bg_colors.LIGHT_TYPE,
                  fontSize: 14,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                1 min a go
              </h6>
            </div>
          </Timeline.Item>

          <Timeline.Item>
            <div>
              <h3
                style={{
                  color: typo_bg_colors.DARK_TYPE,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                You have changed Quote 001 status to Accepted
              </h3>
              <h6
                style={{
                  color: typo_bg_colors.LIGHT_TYPE,
                  fontSize: 14,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                1 min a go
              </h6>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>
              <h3
                style={{
                  color: typo_bg_colors.DARK_TYPE,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                You have changed Quote 001 status to Accepted
              </h3>
              <h6
                style={{
                  color: typo_bg_colors.LIGHT_TYPE,
                  fontSize: 14,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                1 min a go
              </h6>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>
              <h3
                style={{
                  color: typo_bg_colors.DARK_TYPE,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                You have changed Quote 001 status to Accepted
              </h3>
              <h6
                style={{
                  color: typo_bg_colors.LIGHT_TYPE,
                  fontSize: 14,
                  fontWeight: 700,
                  margin: 0,
                  padding: 0
                }}
              >
                1 min a go
              </h6>
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};
