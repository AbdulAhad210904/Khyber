import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Super Duper Burgers
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping<br></br>
            & marinating, so you can cook a fresh food.
          </p>
          <div>
          <button className="secondary-button">
            Order Online <FiArrowRight />{" "}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
