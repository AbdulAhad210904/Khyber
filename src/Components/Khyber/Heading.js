import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Khyber
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping<br></br>
            & marinating, so you can cook a fresh food.
          </p>
          <div>
          <button className="secondary-button" >
            Order Online
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
