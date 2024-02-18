import React from "react";
import temperatureMeter from "../Assets/hot.png";
import smartPhone from "../Assets/smartphone.png";
import kettle from "../Assets/electric-kettle.png";
import database from "../Assets/cloud-computing.png";
import app from "../Assets/app.png";

const Work = () => {
  const workInfoData = [
    {
      image: temperatureMeter,
      title: "Precision Temperature Control",
      text: "Tailor your brewing experience to perfection with precise temperature control via our mobile app.",
    },
    {
      image: smartPhone,
      title: "Intuitive Interface",
      text: "Experience effortless brewing with our user-friendly mobile app interface, designed for simplicity and convenience.",
    },
    {
      image: kettle,
      title: "Seamless Automation",
      text: "Enjoy hassle-free brewing with automatic on/off functionality, ensuring your beverage is ready when you are.",
    },
    {
      image: database,
      title: "Secure Real-time Data",
      text: "Rest easy knowing your data is safe with our real-time database and stringent privacy policies.",
    },
    
  ];
  return (
    <div className="work-section-wrapper">
      <img 
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    margin: 'auto',
    paddingBottom: 100,
  }} 
  src={app} 
  alt=""
/>

      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Master the Art of Brewing, Effortlessly.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
