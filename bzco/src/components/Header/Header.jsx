import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="name">BZ CO</h1>
      <div className="contact">
        <h4 className="number">+ 31 6 23 21 35 66</h4>
        <h4 className="email">info@bzco.nl</h4>
      </div>
    </div>
  );
};

export default Header;
