import React, { Component } from "react";
import Slider from "./components/Slider";
import DayPlan from "./components/DayPlan";
import Main from "./components/MainComponents/Main";
import Notification from "./components/Notification/Notification";
import TopNavBar from "./Hotel/components/navigation/topNavBar";
import LeftMenu from "./Hotel/components/LeftMenu/menu";
import { Modal } from "antd";
import "./styles/style.css";

import {
  main_colors,
  typo_bg_colors,
  gradient_colors
} from "./utils/const/colors";

export default class App extends Component {
  state = {
    dayPlanVisible: false,
    mainLeft: 256,
    modalVisible: false
  };

  setTodayPlanVisibility() {
    this.setState({
      dayPlanVisible: !this.state.dayPlanVisible,
      mainLeft: !this.state.dayPlanVisible ? 256 + 350 : 256
    });
  }

  displayModal(modalVisible) {
    console.log("modal ci", modalVisible);
    this.setState({
      modalVisible: modalVisible
    });
  }
  displayNotification(value) {
    this.setState({
      notificationOpenState: !this.state.notificationOpenState
    });
  }

  ModalCompo = () => {
    return (
      <Modal
        title="Vertically centered modal dialog"
        wrapClassName="vertical-center-modal"
        visible={this.state.modalVisible}
        onOk={() => this.displayModal(false)}
        onCancel={() => this.displayModal(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    );
  };
  render() {
    return (
      <div>
        <TopNavBar />
        <LeftMenu />
      </div>
    );
  }
}

{
  /* <div style={{ float: "left", display: "inline-block" }}>
          <Slider onPlanDayClicked={this.setTodayPlanVisibility.bind(this)} />
        </div>
        <DayPlan
          visible={this.state.dayPlanVisible}
          onReturnClicked={this.setTodayPlanVisibility.bind(this)}
          displayModal={() => {
            this.displayModal(true);
          }}
        />
        <Main
          left={this.state.mainLeft}
          displayNotification={this.displayNotification.bind(this)}
        />
        <Notification
          notificationOpenState={this.state.notificationOpenState}
          onCloseNotification={this.displayNotification.bind(this)}
        />
        {this.ModalCompo()} */
}
