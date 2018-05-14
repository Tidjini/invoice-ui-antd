import React from "react";
import { Icon } from "antd";

import "../css/style.css";

export default ({
  companyLogo,
  companyName,
  logoColor,
  nameColor,
  titleCorrection
}) => {
  return (
    <div className="logo">
      <a href="#">
        <Icon
          type={companyLogo || "api"}
          style={{
            float: "left",
            fontSize: "32px",
            color: logoColor || "#008dd5",
            marginRight: "10px"
          }}
        />
        <h1
          style={{
            color: nameColor || "#585d54",
            marginTop: titleCorrection || 2
          }}
        >
          {companyName || "Atlas hotel"}
        </h1>
      </a>
    </div>
  );
};
