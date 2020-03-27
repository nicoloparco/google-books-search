import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex">
        <a className="navbar-brand" href="/">
          Google Books Library
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarNav">
          <ul className="navbar-nav ml-auto text-light">
            <li className="nav-item">
              <Link className="navLink" to="/" style={{textDecoration: "none"}}>Search</Link>
            </li>
            <li className="nav-item ml-3">
              <Link className="navLink" to="/saved" style={{textDecoration: "none"}}>Saved</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
