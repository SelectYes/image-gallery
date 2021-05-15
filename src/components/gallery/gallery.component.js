import React, { Component } from "react";
import axios from "axios";

import Navbar from "../navbar/navbar.component";

import "./gallery.styles.scss";

const ACCESS_KEY = "4Fdn_ljDLhbFXnrTgLIYrJhY4svUR-Zq4Gu9gvIXav4";
const BASE_URL = `https://api.unsplash.com/topics/wallpapers/photos?client_id=${ACCESS_KEY}`;
const TOPICS_URL = `https://api.unsplash.com/topics?client_id=${ACCESS_KEY}`;

export class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      topicArray: [],
    };
  }

  async componentDidMount() {
    let response = await axios.get(BASE_URL);
    const imageData = response.data;
    this.setState({ data: imageData });

    //get list of topics from API and save to state
    let topicRes = await axios.get(TOPICS_URL);
    const topicData = topicRes.data;
    const topicList = topicData.map((topic) => {
      return topic.slug;
    });

    this.setState({ topicArray: topicList });
  }

  render() {
    const { topicArray } = this.state;
    return (
      <div>
        <Navbar topicArray={topicArray} />
        {/* <img alt="plant" src={data?.length > 0 ? data[0].urls.regular : ""} /> */}
      </div>
    );
  }
}

export default Gallery;
