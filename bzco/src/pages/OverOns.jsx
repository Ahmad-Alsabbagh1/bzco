import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import About from "../components/About/About.jsx";
import "../components/About/about.css";
const OverOns = () => {
  return (
    <div className="about-page">
      <Header />
      <About />

      <Footer />
    </div>
  );
};

export default OverOns;
