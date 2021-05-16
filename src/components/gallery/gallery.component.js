import React, { Component } from "react";
import axios from "axios";

import Navbar from "../navbar/navbar.component";
import Carousel from "../carousel/carousel.component";

import "./gallery.styles.scss";

const ACCESS_KEY = "4Fdn_ljDLhbFXnrTgLIYrJhY4svUR-Zq4Gu9gvIXav4";
// const BASE_URL = `https://api.unsplash.com/topics/<<topic>>/photos?client_id=${ACCESS_KEY}`;
const TOPICS_URL = `https://api.unsplash.com/topics?client_id=${ACCESS_KEY}`;

export class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicData: [],
      topicArray: [],
      currentTopic: "",
    };
    this.selectTopic = this.selectTopic.bind(this);
  }

  async componentDidMount() {
    //get list of topics from API and save to state
    let topicRes = await axios.get(TOPICS_URL);
    const topicData = topicRes.data;
    const topicList = topicData.map((topic) => {
      return topic.slug;
    });
    this.setState({ topicArray: topicList });

    //displays images from first topic in navbar
    this.selectTopic(this.state.topicArray[0]);
  }

  async selectTopic(topic) {
    // get array of URLs for images related to topic and set currentTopic
    let response = await axios.get(
      `https://api.unsplash.com/topics/${topic}/photos?client_id=${ACCESS_KEY}`
    );

    const responseData = response.data;
    this.setState({ topicData: responseData, currentTopic: topic });
  }

  render() {
    const { topicArray, topicData, currentTopic } = this.state;
    return (
      <div className="gallery-container">
        <Navbar
          handleClick={this.selectTopic}
          topicArray={topicArray}
          currentTopic={currentTopic}
        />
        <Carousel topicDataArray={topicData} />
      </div>
    );
  }
}

export default Gallery;
