import React from "react";
import "./Header.css";
import Navs from "./Navs";
import bzco_logo from "../../assets/logo/bzcoLogo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={bzco_logo} alt="bzco logo" className="bzco_logo" />
      <Navs />
    </div>
  );
};

export default Header;
