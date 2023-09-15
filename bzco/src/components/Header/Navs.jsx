import React from "react";
import { Link } from "react-router-dom";

const Navs = () => {
  return (
    <div className="navContainer">
      <nav className="navs">
        <Link to="/">Home</Link>
        <Link to="/diensten">Diensten</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">Over Ons</Link>
      </nav>
    </div>
  );
};

export default Navs;
