import React from "react";
import { Button, Checkbox, Calendar, Icon } from "antd";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../utils/const/colors";

const DayPlanHeader = ({ onReturn }) => {
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
          onClick={onReturn}
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

const DayTasks = () => {
  return (
    <div>
      <div style={{ marginTop: 50, marginLeft: 30, marginRight: 30 }}>
        <h2
          style={{
            fontSize: 28,
            color: typo_bg_colors.BACKGROUND,
            fontWeight: 200,
            padding: 0,
            margin: 0
          }}
        >
          Your tasks for today
        </h2>
      </div>
      <div style={{ marginTop: 20, marginLeft: 30 }}>
        <div
          style={{
            display: "table-cell",
            verticalAlign: "middle"
          }}
        >
          <Checkbox
            style={{
              marginTop: 7,
              marginRight: 10,
              borderColor: main_colors.ACCENT_COLOR,
              borderRadius: 15
            }}
          />
          <div style={{ float: "right" }}>
            <h4
              style={{
                padding: 0,
                margin: 0,
                color: typo_bg_colors.BACKGROUND
              }}
            >
              Meeting with Client
            </h4>
            <h6
              style={{
                padding: 0,
                margin: 0,
                color: typo_bg_colors.BACKGROUND_88
              }}
            >
              Today
            </h6>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20, marginLeft: 30 }}>
        <div
          style={{
            display: "table-cell",
            verticalAlign: "middle"
          }}
        >
          <Checkbox
            style={{
              marginTop: 7,
              marginRight: 10,
              borderColor: main_colors.ACCENT_COLOR,
              borderRadius: 15
            }}
            checked
          />
          <div style={{ float: "right" }}>
            <h4
              style={{
                padding: 0,
                margin: 0,
                color: typo_bg_colors.BACKGROUND,
                textDecoration: "line-through"
              }}
            >
              Pay all the taxes
            </h4>
            <h6
              style={{
                padding: 0,
                margin: 0,
                color: typo_bg_colors.BACKGROUND_88
              }}
            >
              Today
            </h6>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20, marginLeft: 30 }}>
        <div
          style={{
            display: "table-cell",
            verticalAlign: "middle"
          }}
        >
          <Checkbox
            style={{
              marginTop: 7,
              marginRight: 10,
              borderColor: main_colors.ACCENT_COLOR,
              borderRadius: 15
            }}
            checked
          />
          <div style={{ float: "right" }}>
            <h4
              style={{
                padding: 0,
                margin: 0,
                color: typo_bg_colors.BACKGROUND,
                textDecoration: "line-through"
              }}
            >
              Create the home screen for invoice
            </h4>
            <h6
              style={{
                padding: 0,
                margin: 0,
                color: typo_bg_colors.BACKGROUND_88
              }}
            >
              Today
            </h6>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20, marginLeft: 30 }}>
        <div
          style={{
            display: "table-cell",
            verticalAlign: "middle"
          }}
        >
          <Button
            icon="plus"
            type="primary"
            ghost
            style={{
              color: main_colors.ACCENT_COLOR,
              borderColor: "transparent",
              marginRight: 10,
              padding: 0,
              fontSize: 12,
              fontWeight: 700
            }}
          />

          <div style={{ float: "right" }}>
            <h4
              style={{
                padding: 0,
                margin: 0,
                color: typo_bg_colors.BACKGROUND,
                fontSize: 11,
                fontStyle: "italic"
              }}
            >
              Add new task
            </h4>
            <h6
              style={{
                padding: 0,
                margin: 0,
                color: main_colors.ACCENT_COLOR,
                fontStyle: "italic"
              }}
            >
              Today
            </h6>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          color="#CCC"
        >
          <polygon points="0 0 100 10 0 10" fill="#0092ff" />
        </svg>
        <div className="blue-gradient-color">
          <div style={{ marginLeft: 30, marginRight: 30 }}>
            <h2
              style={{
                fontSize: 18,
                color: typo_bg_colors.BACKGROUND,
                fontWeight: 200,
                padding: 0,
                margin: 0
              }}
            >
              Upcoming
            </h2>
          </div>

          <div style={{ marginTop: 20, marginLeft: 30 }}>
            <div
              style={{
                display: "table-cell",
                verticalAlign: "middle"
              }}
            >
              <Checkbox
                style={{
                  marginTop: 7,
                  marginRight: 10,
                  borderColor: main_colors.ACCENT_COLOR,
                  borderRadius: 15
                }}
              />
              <div style={{ float: "right" }}>
                <h4
                  style={{
                    padding: 0,
                    margin: 0,
                    color: typo_bg_colors.BACKGROUND
                  }}
                >
                  Meeting with Client
                </h4>
                <h6
                  style={{
                    padding: 0,
                    margin: 0,
                    color: typo_bg_colors.BACKGROUND_88
                  }}
                >
                  Today
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DayPlan = ({ visible, onReturnClicked }) => {
  const left = visible ? 256 : -360;
  const opacity = visible ? 1 : 0;
  return (
    <div
      className="blue-gradient-color shadow"
      style={{
        width: 350,
        left: left,
        opacity: opacity,
        display: "inline-block",
        height: 1200,
        backgroundColor: "#CCC"
      }}
    >
      <DayPlanHeader onReturn={onReturnClicked} />
      <DayTasks />
    </div>
  );
};

export default DayPlan;
