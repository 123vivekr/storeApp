import React from "react";
import {NavLink} from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  return (
    <div id="nav">
      <nav className="navbar navbar-light navbar-expand-md text-dark fixed-top py-2">
        <div className="container">
          <NavLink exact to="/" className="navbar-brand">
            <h3 className="display-1">Nice Restaurant</h3>
          </NavLink>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-3">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink exact to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink exact to="/admin" className="nav-link">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
