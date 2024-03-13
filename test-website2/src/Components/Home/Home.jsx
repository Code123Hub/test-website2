
import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import "./Home.css";
import CircleCard from "./CircleCard";
import Footer from "../Footer/Footer";
import Testimonials from "./Testimonials";
import BannerImage from "./Banner-Image";
import SponsorHome from "./SponsorHome";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Banner />
      </div>
      <div className="divWithBackground">
        <div style={{ marginTop: "10px" }}>
          <h2>
            <span>REACH</span> MORE FANS <span> & SELL </span>MORE{" "}
          </h2>
          <h2>
            <span>TICKETS WITH</span> PASSAGE
          </h2>
        </div>
        <div className="circle-cards-container">
          <CircleCard
            marginTop={0}
            marginBottom={80}
            subheadingColor="red"
            text="5+"
            subheading="Million Users"
            bottomBorderColor="red"
          />
          <CircleCard
            marginTop={10}
            marginBottom={0}
            subheadingColor="green"
            text="5000+"
            subheading="Events"
            bottomBorderColor="green"
          />
          <CircleCard
            marginTop={0}
            marginBottom={80}
            subheadingColor="blue"
            text="14.8%"
            subheading="More Users"
            bottomBorderColor="blue"
          />
        </div>
      </div>
      <div className="div-banner1">
      <div className="div-banner1-overlay"></div>
      <div className="div-banner1-text">
          <h2 className="text-in-div-banner1">
            SELECT  YOUR  INDUSTRY</h2>
          <select className="dropdown-in-div-banner1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          </div>
        </div>
        <div className="testimonial-div">
          <h2>WHAT<span> OUR CLIENTS </span>SAY</h2>
        </div>
        <div>
          <Testimonials/>
        </div>
        <div>
          <BannerImage/>
        </div>
        <div>
          <SponsorHome/>
        </div>

        {/* <div>
          <Footer/>
        </div> */}
    </div>
  );
}

export default Home;
