

import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import "./Home.css";
import CircleCard from "./CircleCard";


function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Banner />
      </div>
      <div className="divWithBackground">
        <div style={{marginTop:'10px'}}>
          <h2>
            <span>REACH</span> MORE FANS <span> & SELL </span>MORE{" "}
          </h2>
          <h2>
            <span>TICKETS WITH</span> PASSAGE
          </h2>
        </div>
        <div className="circle-cards-container">
            <CircleCard marginTop={0} marginBottom={80} subheadingColor="red"  text="5+" subheading="Million Users" bottomBorderColor="red"/> 
            <CircleCard marginTop={10} marginBottom={0} subheadingColor='green'  text="5000+" subheading="Events" bottomBorderColor="green"/> 
            <CircleCard marginTop={0} marginBottom={80} subheadingColor='blue'  text="14.8%" subheading="More Users" bottomBorderColor="blue" /> 
          
          </div>
      </div>
    </div>
  );
}

export default Home;
