import React, { Component } from "react";
import { FaCaretLeft, FaCaretRight, IconContext } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselImage from "../carousel-image/carousel-image.component";
import Slider from "react-slick";

import styles from "./carousel.module.scss";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);

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

  componentDidMount() {
    // set keypress event handlers
    document.addEventListener("keydown", this.handleKeyPress);
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

  handleKeyPress(event) {
    if (event.keyCode === 39) {
      this.next();
      this.incrementCount();
    } else if (event.keyCode === 37 && this.state.clickCount > 0) {
      this.previous();
      this.decrementCount();
    }
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
      <div
        className={`${styles.carouselContainer} ${
          !isMenuActive ? styles.carouselActive : ""
        }`}
      >
        <button
          className={`${styles.buttonPrevious} ${
            !isMenuActive ? styles.buttonActive : ""
          }`}
          onClick={() => {
            this.previous();
            this.decrementCount();
          }}
        >
          <div className={styles.arrowIcon}>
            <FaCaretLeft />
          </div>
        </button>
        <button
          className={styles.buttonNext}
          onClick={() => {
            this.next();
            this.incrementCount();
          }}
        >
          <div className={styles.arrowIcon}>
            <FaCaretRight />
          </div>
        </button>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {images}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
