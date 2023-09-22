import React from "react";
import mop from "../../assets/pictures/mop.png";
import house from "../../assets/pictures/house.png";
import company from "../../assets/pictures/company.png";
import carpet from "../../assets/pictures/carpet.png";
import window from "../../assets/pictures/window.png";

const services = [
  {
    pic: house,
    service: "Residentiële Schoonmaak",
    bio: "Onze residentiële schoonmaakdiensten zijn ontworpen om uw huis schoon en georganiseerd te houden. Wij bieden algemene huishoudelijke schoonmaak, dieptereiniging, ramen wassen, tapijtreiniging en meer. Of het nu gaat om wekelijkse onderhoudstaken of een grondige voorjaarsschoonmaak, ons team staat klaar om uw huis fris en gastvrij te maken.",
  },
  {
    pic: company,
    service: "Commerciële Schoonmaak",
    bio: "Wilt u een grondige en diepgaande reiniging voor uw ruimtes? Onze dieptereinigingsservices bieden een totale opfrisbeurt voor zelfs de meest vervuilde oppervlakken. We behandelen keukens, badkamers, vloeren en meer, met gespecialiseerde technieken en hoogwaardige reinigingsmiddelen. Kies voor dieptereiniging om uw omgeving weer schoon, veilig en gezond te maken.",
  },
  {
    pic: mop,
    service: "Dieptereiniging",
    bio: "Onze dieptereinigingsservices zijn bedoeld voor een grondige reiniging en desinfectie van alle soorten ruimtes. Dit omvat keuken- en apparatuurreiniging, badkamerreiniging, vloerreiniging en polijsten, schimmelverwijdering en meer. Met behulp van gespecialiseerde technieken en hoogwaardige reinigingsmiddelen zorgen we ervoor dat zelfs moeilijk bereikbare of sterk vervuilde oppervlakken weer in optimale staat verkeren. Kies voor onze dieptereiniging om een frisse en gezonde omgeving te garanderen.",
  },
  {
    pic: carpet,
    service: "Tapijtreiniging",
    bio: "Laat uw tapijten herleven met onze tapijtreinigingsservices. We verwijderen vuil, vlekken en allergenen diep vanuit de vezels, waardoor uw tapijten weer fris en als nieuw aanvoelen. Of het nu om huishoudelijke of zakelijke tapijten gaat, onze professionele aanpak zorgt voor een langdurige schoonheid en hygiëne. Kies voor tapijtreiniging die resultaten oplevert.",
  },
  {
    pic: window,
    service: "Glasreiniging",
    bio: "Vertrouw op onze expertise in glasreiniging om al uw glasoppervlakken te laten stralen. Of het nu gaat om ramen in woningen, bedrijven of andere glazen oppervlakken, wij zorgen voor een vlekkeloze en streepvrije reiniging. Met gebruik van hoogwaardige methoden en reinigingsmiddelen, zorgen wij ervoor dat uw glas altijd helder en transparant is. Kies voor glasreiniging die indruk maakt.",
  },
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service) => {
        return (
          <div className="service">
            <h5 className="serviceName">{service.service}</h5>
            <img
              className="serviceImg"
              src={service.pic}
              alt={service.service}
            />
            <p className="serviceBio">{service.bio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
