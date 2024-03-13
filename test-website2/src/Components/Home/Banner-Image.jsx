

import React from "react";
import "./Banner-Image.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import bannerTextImage from '../../assets/Home/banner-text-text.jpeg';

function BannerImage() {
  return (
    <div className="banner-container1">
      <div className="banner-image1">
        <div className="banner-overlay1"></div>
        <div className="banner-text1">
        
            <div className="text-content">
              <h1>
                <span>SPEND LESS</span> TIME MANAGING <span>YOUR </span> EVENT
              </h1>

              <p>
                Millions of fans are searching for events like yours on our platform. We'll help them find you.
              </p>
              <button>CHOOSE AN EVENT</button>
            </div>
            <div className="image-content">
              <img src={bannerTextImage} alt="Banner Image" />
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default BannerImage;
