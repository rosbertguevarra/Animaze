import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Upcoming from "./Upcoming";
import Random from "./Random.js";
import Quotes from "../components/Quotes";
import SeasonAnime from "./SeasonAnime";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Upcoming />
        <Random />
        <Quotes />
        <SeasonAnime />
      </div>
    );
  }
}
