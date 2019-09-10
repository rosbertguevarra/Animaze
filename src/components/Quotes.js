import React, { Component } from "react";
import quote from "../api/quote";
import "../style/style.css";

export default class Quotes extends Component {
  state = {
    quote: [quote]
  };

  componentDidMount() {
    console.log(this.state.quote);
  }

  render() {
    return (
      <div className="quotes">
        <h2>Anime quote</h2>
        {this.state.quote.map(quote => {
          return (
            <div className="anime" key={quote.id}>
              <p>"{quote.quote}"</p>
              <span className="character">
                {"- "}
                {quote.name}
              </span>
              <span className="what-anime">{quote.anime}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
