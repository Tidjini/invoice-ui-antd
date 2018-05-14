import React from "react";
import { Icon } from "antd";

import "../css/style.css";

export default ({ icon, content, color }) => {
  return (
    <div className="nav-item">
      <Icon
        className="nav-item-icon"
        type={icon || "calendar"}
        style={{
          color: color || "#585d54"
        }}
      />
      <h4 style={{ color: color || "#585d54" }}>{content}</h4>
    </div>
  );
};
