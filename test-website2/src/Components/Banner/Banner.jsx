

import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faSearch, faUserAlt } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing content and services</p>
        </div>
        <div className="div-banner-chevron">
        <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <div className="banner-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;