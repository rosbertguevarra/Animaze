import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Upcoming from "./Upcoming";
import Featured from "./Featured";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Upcoming />
      </div>
    );
  }
}
