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

                // <div className="card" style={{ width: "18rem" }}>
                //   <span>{animes.rank}</span>
                //   <img
                //     src={animes.image_url}
                //     className="card-img-top"
                //     alt="..."
                //   />
                //   <div className="card-body">
                //     <h5 className="card-title">{animes.title}</h5>
                //     <span>
                //       Type: <span className="description">{animes.type}</span>
                //     </span>
                //     <span>
                //       Episodes:{" "}
                //       <span className="description">{animes.episodes}</span>
                //     </span>
                //     <span>
                //       Start date:{" "}
                //       <span className="description">{animes.start_date}</span>{" "}
                //     </span>
                //     <span>
                //       End date:{" "}
                //       <span className="description">{animes.end_date}</span>
                //     </span>
                //     <span>
                //       Members:{" "}
                //       <span className="description">{animes.members}</span>
                //     </span>
                //     <a href="#" className="btn btn-primary">
                //       Go somewhere
                //     </a>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
