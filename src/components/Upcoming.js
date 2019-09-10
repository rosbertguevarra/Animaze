import React, { Component } from "react";
import jikan from "../api/jikan";
import "../style/style.css";

export default class Upcoming extends Component {
  state = {
    shows: []
  };
  componentDidMount = async () => {
    const response = await jikan.get("/top/anime/1/upcoming");
    this.setState({ shows: response.data.top });
    console.log("mounted");
  };

  render() {
    return (
      <div className="upcoming-shows">
        <h2>Top 10 Upcoming Shows</h2>
        <div className="container">
          <div className="row">
            {this.state.shows.splice(0, 10).map(animes => {
              return (
                <div className="col-md-3" key={animes.mal_id}>
                  <span>{animes.rank}</span>
                  <img src={animes.image_url} />
                  <span>{animes.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
