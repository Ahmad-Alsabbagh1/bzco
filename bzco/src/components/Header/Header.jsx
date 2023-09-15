import React from "react";
import "./Header.css";
import Navs from "./Navs";
import Name from "./Name";
import Contact from "./Contact";

const Header = () => {
  return (
    <div className="header">
      <Name />
      <Navs />
      <Contact />
    </div>
  );
};

export default Header;
