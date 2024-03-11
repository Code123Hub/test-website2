

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUserAlt } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-left">THE IPR GORILLA</h2>
      <div className="navbar-div-a">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/agenda">AGENDA</Link>
        <Link to="#testimonials">TESTIMONIALS</Link>
        <Link to="#sponsors">SPONSORS</Link>
        <Link to="#events">EVENTS</Link>
        
      </div>

      <div className="nav-div">
        <div className="nav-div-register">
          <FontAwesomeIcon icon={faUserAlt}style={{marginRight:'12px'}}/>REGISTER</div>
        <button>
           SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
