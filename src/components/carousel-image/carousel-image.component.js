import React from "react";
import styles from "./carousel-image.module.scss";

export default function CarouselImage({ imageUrl, altDescription }) {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={imageUrl} alt={altDescription} />
    </div>
  );
}
