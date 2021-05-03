import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import welcome from "../assets/img/welcome.png";

import "./FirstScreen.scss";

export default function FirstScreen() {
  return (
    <div className="first-screen">
      <div className="first-screen__header">
        <div className="first-screen__header__content container">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="first-screen__main">
          <img src={welcome} alt="" />

          <Link to="/select-theme" className="first-screen__main--button">
            Customize
          </Link>
        </div>
      </div>
    </div>
  );
}
