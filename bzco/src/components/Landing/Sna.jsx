import React from "react";
import snaLogo from "../../assets/Certificaat/sna-logo.jpg.jpg";

const Sna = () => {
  return (
    <div className="sna">
      <h1 className="snaH1">SNA-gecertificeerd</h1>

      <img src={snaLogo} alt="sna logo" className="snaLogo" />
      <p className="snaP">
        Ons schoonmaakbedrijf is trots om SNA-gecertificeerd te zijn. Dit
        betekent dat we voldoen aan strenge normen en eisen op het gebied van
        betrouwbaarheid, financiële stabiliteit, en naleving van wet- en
        regelgeving. Als SNA-gecertificeerd bedrijf kunt u erop vertrouwen dat
        we ons inzetten voor transparantie en kwaliteit in al onze diensten.
      </p>
    </div>
  );
};

export default Sna;
