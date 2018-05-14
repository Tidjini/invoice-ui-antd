import React from "react";
import { Icon } from "antd";
import { profile } from "../../../utils/const/images";
import "../css/style.css";

export default ({ userFirstName, userLastName, userFunction, userPicture }) => {
  return (
    <div className="nav-custom-item">
      <div className="user-info">
        <h4>{userLastName + " " + userFirstName} </h4>
        <h5>{userFunction}</h5>
      </div>
      <img src={userPicture || profile} />
      <a href="#">
        <Icon type="down" className="down" />
      </a>
    </div>
  );
};
