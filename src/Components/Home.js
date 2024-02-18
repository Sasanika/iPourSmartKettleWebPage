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
  href="mailto:ipour4321@gmail.com?subject=Order%20iPour%20Smart%20Kettle&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20place%20an%20order%20for%20the%20iPour%20Smart%20Kettle.%0D%0A%0D%0AThank%20you!"
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
