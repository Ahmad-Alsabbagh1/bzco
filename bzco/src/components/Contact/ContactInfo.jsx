import React from "react";
import contactPic from "../../assets/pictures/5124556.jpg";

const ContactInfo = () => {
  return (
    <div className="info">
      <img src={contactPic} alt="Contact" className="customerSupport" />
      <h2 className="contacteerOns">Contacteer ons</h2>
      <p className="contacteerOns">
        Heeft u vragen, wilt u meer informatie over onze diensten of een
        afspraak maken? Wij zijn beschikbaar om u te helpen. Neem gerust contact
        met ons op via telefoon of e-mail.
      </p>

      <p className="contacteerOns">Telefoon: +31 6 23 21 35 66</p>
      <p className="contacteerOns">E-mail: info@bzco.nl</p>
      <p className="contacteerOns">
        Onze vriendelijke en deskundige medewerkers staan klaar om u te
        assisteren en eventuele vragen te beantwoorden. Wij zijn toegewijd aan
        het bieden van uitstekende klantenservice en zullen snel reageren op uw
        verzoeken
      </p>
    </div>
  );
};

export default ContactInfo;
