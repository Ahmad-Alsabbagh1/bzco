import React from "react";
import FooterContact from "./FooterContact";
import "./footer.css";
import logo from "../../assets/logo/bzcoLogo.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="footerH4">
        Neem gerust contact met ons op om de mogelijkheden te bespreken
      </h4>

      <div className="footerInfo">
        <img src={logo} alt="bzco logo" className="bzco_logo" />
        <FooterContact />
      </div>
    </div>
  );
};

export default Footer;
