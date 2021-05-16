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
      clickCount: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);

    // slick buttons
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  // slick buttons
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  incrementCount() {
    this.setState(
      (st) => ({ clickCount: st.clickCount + 1 }),
      () => {
        if (this.state.clickCount > 0 && this.props.isMenuActive) {
          this.props.toggleMenu();
        }
      }
    );
  }

  decrementCount() {
    this.setState(
      (st) => ({ clickCount: st.clickCount - 1 }),
      () => {
        if (this.state.clickCount === 0) {
          this.props.toggleMenu();
        }
      }
    );
  }

  render() {
    const settings = {
      rows: 2,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
    };

    const { topicDataArray, isMenuActive, toggleMenu } = this.props;

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
        <button
          className={`button-previous ${!isMenuActive ? "button-active" : ""}`}
          onClick={() => {
            this.previous();
            this.decrementCount();
          }}
        >
          {"<"}
        </button>
        <button
          className="button-next"
          onClick={() => {
            this.next();
            this.incrementCount();
          }}
        >
          {">"}
        </button>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {images}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
