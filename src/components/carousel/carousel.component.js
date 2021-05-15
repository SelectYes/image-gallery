import React, { Component } from "react";

import CarouselImage from "../carousel-image/carousel-image.component";

import "./carousel.styles.scss";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const { topicDataArray } = this.props;
    const images = topicDataArray.map((image) => {
      return <CarouselImage key={image.id} imageUrl={image.urls.small} />;
    });
    return <div className="carousel-container">{images}</div>;
  }
}

export default Carousel;
