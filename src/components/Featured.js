import React, { Component } from "react";
import "../style/style.css";

export default class Featured extends Component {
  render() {
    return (
      <div className="featured-anime">
        <h2>featured anime</h2>
        {console.log(this.props)}
      </div>
    );
  }
}
