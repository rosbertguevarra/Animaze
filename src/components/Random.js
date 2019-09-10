import React, { Component } from "react";
import jikan from "../api/jikan";
import "../style/style.css";
import { Link } from "react-router-dom";

export default class Featured extends Component {
  state = {
    shows: [],
    randomAnime: []
  };

  componentDidMount = async () => {
    const response = await jikan.get("/top/anime/1/airing");
    this.setState({
      shows: response.data.top
    });
    this.setState({
      randomAnime: this.state.shows[
        Math.floor(Math.random() * this.state.shows.length)
      ]
    });
    console.log("mounted featured");
    console.log(this.state.randomAnime);
  };

  renderAnime = () => {
    const {
      image_url,
      mal_id,
      title,
      start_date,
      end_date,
      type,
      episodes,
      members,
      rank,
      url
    } = this.state.randomAnime;
    return (
      <React.Fragment>
        <div className="col-md-6">
          <img src={image_url} style={{ width: "80%" }} />
        </div>
        <div className="col-md-6">
          <h3>
            <span>{title}</span>
          </h3>
          <span className="classification">
            Rank: <span>{rank}</span>
          </span>
          <span className="classification">
            Id: <span>{mal_id}</span>
          </span>
          <span className="classification">
            Start Date:<span>{start_date}</span>
          </span>
          <span className="classification">
            End Date: <span>{end_date}</span>
          </span>
          <span className="classification">
            Type: <span>{type}</span>
          </span>
          <span className="classification">
            Episodes:<span>{episodes}</span>
          </span>
          <span className="classification">
            Members:<span>{members}</span>
          </span>
          <span href={url} target="_blank" className="classification">
            MyAnimeList:
            <a href={url} target="_blank">
              More Info
            </a>
          </span>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="random-anime">
        <h2>Random anime</h2>
        <div className="container">
          <div className="row">{this.renderAnime()}</div>
        </div>
      </div>
    );
  }
}
