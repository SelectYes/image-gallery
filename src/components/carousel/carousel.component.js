import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselImage from "../carousel-image/carousel-image.component";
import Slider from "react-slick";

import "./carousel.styles.scss";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const settings = {
      rows: 2,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    const { topicDataArray } = this.props;
    const images = topicDataArray.map((image) => {
      return (
        <CarouselImage
          key={image.id}
          imageUrl={image.urls.small}
          altDescription={image.alt_description}
        />
      );
    });
    console.log(topicDataArray);
    return (
      <div className="carousel-container">
        <Slider {...settings}>{images}</Slider>
        {/* {images} */}
      </div>
    );
  }
}

export default Carousel;
