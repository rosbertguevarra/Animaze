import React from "react";
import DemonSlayer from "../img/DemonSlayer.jpg";
import DrStone from "../img/Dr.Stone.jpg";
import OnePiece from "../img/OnePiece.jpg";
import VinlandSaga from "../img/VinlandSaga.jpg";
import "../style/carousel.css";

const Carousel = () => {
  return (
    <div>
      <div className="bd-example" style={{ height: "50%" }}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={DemonSlayer}
                className="d-block w-100"
                alt="Demon Slayer"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Demon Slayer</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={OnePiece} className="d-block w-100" alt="One Piece" />
              <div className="carousel-caption d-none d-md-block">
                <h5>One Piece</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={DrStone} className="d-block w-100" alt="Dr. Stone" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Dr. Stone</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={VinlandSaga}
                className="d-block w-100"
                alt="Vinland Saga"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Vinland Saga</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
