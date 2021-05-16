import React from "react";
import "./carousel-image.styles.scss";

export default function CarouselImage({ imageUrl, altDescription }) {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={altDescription} />
    </div>
  );
}
