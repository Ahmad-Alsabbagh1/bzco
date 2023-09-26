import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../components/Contact/contact.css";
import ContactInfo from "../components/Contact/ContactInfo.jsx";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact;
