import React from "react";
import FooterContact from "./FooterContact";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="footerH4">
        Neem gerust contact met ons op om de mogelijkheden te bespreken
      </h4>
      <FooterContact />
    </div>
  );
};

export default Footer;
