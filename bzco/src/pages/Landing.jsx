import React from "react";
import "./../components/Landing/Landing.css";
import Header from "../components/Header/Header";
import Slogan from "../components/Landing/Slogan";
import Gallery from "../components/Landing/Gallery";
import Sna from "../components/Landing/Sna";

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <Slogan />
      <Gallery />
      <Sna />
    </div>
  );
};

export default Landing;
