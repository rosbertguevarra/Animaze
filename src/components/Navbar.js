import React from "react";
import "../style/style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand">
          Animaze <span>The Anime and Manga Website</span>
        </a>

        <form className="form-inline">
          <span>Manga</span>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
