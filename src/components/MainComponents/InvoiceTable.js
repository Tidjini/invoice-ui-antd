import React from "react";
import { Table, Icon, Divider } from "antd";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "../../utils/const/colors";

const ColumnHeder = ({ title }) => {
  return (
    <h3 style={{ color: typo_bg_colors.DARK_TYPE, fontWeight: 700 }}>
      {title}
    </h3>
  );
};

const columns = [
  {
    title: <ColumnHeder title="Invoice Name" />,

    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: <ColumnHeder title="Client" />,
    dataIndex: "client",
    key: "client"
  },

  {
    title: <ColumnHeder title="Statue" />,
    dataIndex: "statue",
    key: "statue",
    render: sts => {
      let color = main_colors.MAIN_COLOR;
      let statue = "block";

      switch (sts) {
        case "blk":
          color = main_colors.THIRD_COLOR;
          statue = "block";
          break;
        case "crs":
          color = main_colors.MAIN_COLOR;
          statue = "en cours";
          break;
        case "cls":
          color = main_colors.ACCENT_COLOR;
          statue = "close";
          break;
        default:
          break;
      }
      return <h3 style={{ fontSize: 14, color }}>{statue}</h3>;
    }
  },
  {
    title: <ColumnHeder title="Montant" />,
    dataIndex: "montant",
    key: "montant"
  },
  {
    title: <ColumnHeder title="Date" />,
    dataIndex: "date",
    key: "date"
  }
];

const data = [
  {
    key: "1",
    name: "Invoice name",
    client: "Client name",
    date: "18/05/2018",
    statue: "blk",
    montant: "18 000 DA"
  },
  {
    key: "2",
    name: "Invoice name",
    client: "Client name",
    date: "18/05/2018",
    statue: "crs",
    montant: "18 000 DA"
  },
  {
    key: "3",
    name: "Invoice name",
    client: "Client name",
    date: "18/05/2018",
    statue: "cls",
    montant: "18 000 DA"
  },
  {
    key: "4",
    name: "Invoice name",
    client: "Client name",
    date: "18/05/2018",
    statue: "cls",
    montant: "18 000 DA"
  }
];

export default ({ marginTop, width }) => {
  return (
    <div
      style={{
        width,
        marginTop,
        float: "right",

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
            Your invoice statue
          </h3>
          <h3
            style={{
              color: typo_bg_colors.LIGHT_TYPE,
              fontSize: 14,
              fontWeight: 700,
              float: "right"
            }}
          >
            Current month
          </h3>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
