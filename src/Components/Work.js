import React from "react";
import page1 from "../Assets/page1.png";
import page2 from "../Assets/page2.png";
import page3 from "../Assets/page3.png";
import page4 from "../Assets/page4.png";
import { DeviceThermostat, PhoneAndroid, DeveloperBoard, CloudDone } from '@mui/icons-material';

const Work = () => {
  const workInfoData = [
    {
      icon: <DeviceThermostat style={{ fontSize: 100 }} />,
      title: "Temperature Control",
      text: "Tailor your brewing experience to perfection with precise temperature control via our mobile app.",
    },
    {
      icon: <PhoneAndroid style={{ fontSize: 100 }}/>,
      title: "User-Friendly Design",
      text: "Experience effortless brewing with our user-friendly mobile app interface, designed for simplicity and convenience.",
    },
    {
      icon: <DeveloperBoard style={{ fontSize: 100 }}/>,
      title: "Seamless Automation",
      text: "Enjoy hassle-free brewing with automatic on/off functionality, ensuring your beverage is ready when you are.",
    },
    {
      icon: <CloudDone style={{ fontSize: 100 }}/>,
      title: "Secure Real-time Data",
      text: "Rest easy knowing your data is safe with our real-time database and stringent privacy policies.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Master the Art of Brewing, Effortlessly.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:50 }} className="work-images">
    <img style={{ width: '20%', position:'relative', top:50 }} src={page1} alt="" />
    <img style={{ width: '20%', position:'relative', bottom:50 }} src={page2} alt="" />
    <img style={{ width: '20%', position:'relative', top:50 }} src={page3} alt="" />
    <img style={{ width: '20%', position:'relative', bottom:50 }} src={page4} alt="" />
</div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              {data.icon}
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
