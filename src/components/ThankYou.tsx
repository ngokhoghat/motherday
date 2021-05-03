import React, { useEffect, useMemo } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import logo from "../assets/img/logo.jpg";

import "./ThankYou.scss";

export default function ThankYou() {
  let history = useHistory();

  useEffect(() => {
    const { state }: any = history.location;
    if (!state.img) {
      history.goBack();
    }
  }, [history]);

  const handleDowload = () => {
    const { state }: any = history.location;

    const a = document.createElement("a");
    a.href = state.img;
    a.download = "tes.png";
    a.click();
  };
  return (
    <div className="thankout">
      <div className="thankout__header">
        <div className="thankout__header__content container">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="thankout__main">
          <h1 style={{ marginTop: 50 }}>Thank You!</h1>

          <div className="card-content">
            <div className="download" onClick={handleDowload}>
              <BsDownload size={40} color="#e72573" />
            </div>

            <Link to="/" className="come-home">
              <AiFillHome size={40} color="#e72573" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
