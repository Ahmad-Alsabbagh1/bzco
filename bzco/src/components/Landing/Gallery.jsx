import React from "react";
import glass from "../../assets/pictures/glass.jpg";
import broom from "../../assets/pictures/broom.jpg";
import mirror from "../../assets/pictures/mirror.jpg";

const images = [
  { src: broom, alt: "Broom cleaning", className: "broomCleaning" },
  { src: glass, alt: "Glass cleaning", className: "glassCleaning" },
  { src: mirror, alt: "Mirror cleaning", className: "mirrorCleaning" },
];
const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image) => {
        return (
          <img src={image.src} alt={image.alt} className={image.className} />
        );
      })}
    </div>
  );
};

export default Gallery;
