import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Diensten", to: "/diensten" },
  { name: "Contact", to: "/contact" },
  { name: "Over Ons", to: "/about" },
];
const Navs = () => {
  return (
    <div className="navContainer">
      <nav className="navs">
        {navigation.map((nav) => {
          return (
            <NavLink
              to={nav.to}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              {nav.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navs;
