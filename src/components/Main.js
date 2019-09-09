import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
      </div>
    );
  }
}
