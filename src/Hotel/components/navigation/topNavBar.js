import React from "react";
import { Icon } from "antd";
import Logo from "./logo";
import TopBarItem from "./topBarItem";
import TopBarUserInfo from "./topBarUserInfo";

export default () => {
  const today = new Date();

  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <TopBarItem
            color="#585d54"
            content={`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`}
            icon="calendar"
          />
        </li>
        <li>
          <TopBarItem
            color="#585d54"
            content={`${today.getHours()}:${today.getMinutes()}`}
            icon="clock-circle-o"
          />
        </li>
        <li>
          <TopBarUserInfo
            userFirstName="Habiba"
            userLastName="Mohamedi"
            userFunction="Manager"
          />
        </li>
      </ul>
    </nav>
  );
};
