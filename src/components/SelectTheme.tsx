import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.jpg";
import Bg1 from "../assets/img/e-template07.png";
import Bg2 from "../assets/img/e-template16.png";
import Bg3 from "../assets/img/e-template08.png";

import "./SelectTheme.scss";

export default function SelectTheme() {
  return (
    <div className="select-theme">
      <div className="select-theme__header">
        <div className="select-theme__header__content container">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="select-theme__main">
          <h5>Step 1: Choose your template</h5>

          <div className="card-content">
            <Link to="/edit-screen?card=07" className="card-item">
              <img src={Bg1} alt="" />
            </Link>
            <Link to="/edit-screen?card=16" className="card-item">
              <img src={Bg2} alt="" />
            </Link>
            <Link to="/edit-screen?card=08" className="card-item">
              <img src={Bg3} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
