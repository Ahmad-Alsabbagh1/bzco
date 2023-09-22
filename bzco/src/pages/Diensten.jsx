import React from "react";
import Header from "../components/Header/Header.jsx";
import Services from "../components/Diensten/Services.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Location from "../components/Diensten/Location.jsx";
import "../components/Diensten/services.css";

const Diensten = () => {
  return (
    <div className="diensten">
      <Header />
      <h1 className="onzeDiensten">Onze Diensten</h1>
      <Location />
      <Services />

      <Footer />
    </div>
  );
};

export default Diensten;
