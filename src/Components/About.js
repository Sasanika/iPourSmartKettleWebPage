// About.js

import React from "react";
import AboutBackground from "../Assets/Layer1.png";
import AboutBackgroundImage from "../Assets/MobileApp.png";
import AboutBackgroundlogo from "../Assets/iPourLogo.png";
import { BsFillPlayCircleFill, BsDownload } from "react-icons/bs";

const Card = ({ title,price, description }) => {
  return (
    <div style={styles.card}>
      <h3 style={{backgroundColor:'purple', padding:8, borderRadius:8, color:'white', textAlign:'center', margin:5}}>{title}</h3>
      <h4 style={{margin:15, color: 'purple', textAlign:'center'}}>{price}</h4>
      <p style={{textAlign:'center', color:'#585858'}}>{description}</p>

    </div>
  );
};

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img style={{ position: 'relative', left: -120 }} src={AboutBackgroundImage} alt="" />
        <img
          src={AboutBackgroundlogo}
          alt="Logo"
          style={{
            position: 'absolute',
            top: '35%',
            left: '25%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            width: 100,
          }}
        />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Download the iPour App Now!
        </h1>
        <p className="primary-text">
          Join the iPour community and discover a new world of brewing possibilities.
        </p>
        <p className="primary-text">
          With the iPour Mobile App, brewing the perfect cup of coffee or tea has never been easier or more enjoyable.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            <BsDownload style={{ marginRight: '10px' }} />
            Download Now
          </button>
          <button className="watch-video-button">
  <a 
    href="https://youtu.be/yygJWhXbMQE?si=F6ccWFg1qPx7pF1G" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      color: '#50B8E7',  // Set the color to blue
      textDecoration: 'none',
      
       // Remove text decoration
    }}
  >
    <BsFillPlayCircleFill style={{ position:'relative', top:12}}/>Watch Video
  </a>
</button>

        </div>
        <h1 style={{color:'purple', margin:25}}>Upgrade to Premium</h1>
        <p style={{ color: '#585858', margin: 15, fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
>Unlock the full potential of your iPour Smart Kettle with our premium subscription. Enjoy exclusive features and benefits designed to enhance your brewing experience.</p>

        <div style={styles.cardContainer}>
          <Card
            title="Free Trial"
            price="0 LKR"
            description="Not sure if the premium version is right for you? Sign up for our free trial and experience the benefits firsthand. No commitment required – cancel anytime before the trial period ends."
            text="Start a Free Trial"
          />
          <Card
            title="Monthly Plan"
            price="100 LKR"
            description="Enjoy all premium features for a low monthly fee. Cancel anytime."
            text="Activate"
          />
          <Card
            title="Annual Plan"
            price="1000 LKR"
            description="Get a discounted rate when you subscribe annually. Save even more on your brewing journey."
            text="Activate"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    zIndex: 5,
    width: '100%',
    padding: '0 20px', // Add padding to the container to space the cards from the edges
    boxSizing: 'border-box',
    
  },
  card: {
    width: 'calc(33.33% - 20px)', // Adjusted width to accommodate the padding
    backgroundColor:'#DCF0FA',
        border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  },
};

export default About;
