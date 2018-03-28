"use strict";
import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
          <div>
            <nav className="navbar fixed-top navbar-expand-lg">
              <a className="navbar-brand" href="#">
                interplanetary academy
              </a>
              <div id="nav-links" className="container">
                <Link to="/" className="nav-item" >
                  HOME
                </Link>
                <Link to="/campuses" className="nav-item" >
                  CAMPUSES
                </Link>
                <Link to="/students" className="nav-item" >
                  STUDENTS
                </Link>
              </div>
            </nav>
          </div>
          )
}

export default Navbar;
