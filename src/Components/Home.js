import React from "react";
import BannerBackground from "../Assets/Layer2.png";
import BannerImage from "../Assets/SmartKettle.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Redefining Beverage Brewing Excellence
                    </h1>
          <p className="primary-text">
          Unrivaled brewing precision iPour Smart Kettle. Cutting-edge tech meets elegant design for the ultimate beverage experience.          </p>
          <button className="secondary-button">
          <a style={{padding:0, textDecoration: 'none'}}
  className="secondary-button"
  href="https://forms.gle/HyFp6o37E9A6CqBX7"
>
  Buy Now <FiArrowRight />
</a>

            
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
