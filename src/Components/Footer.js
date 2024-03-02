import React from "react";
import Logo from "../Assets/iPourLogo.png";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import termsConditions from "../Assets/termsConditions.pdf";
import privacyPolicy from "../Assets/PrivacyPolicy.pdf";

const Footer = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: 100,
      borderRadius: 20,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      border: '1px solid #ddd',
      transition: 'box-shadow 0.3s ease'
    }}
     className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
  <a href="https://www.linkedin.com/company/ipour4321company/?lipi=urn%3Ali%3Apage%3Acompanies_company_posts_index%3B53e121e6-7356-463e-ae52-39cd60d57f27" target="_blank" rel="noopener noreferrer">
    <SiLinkedin />
  </a>
  <a href="https://www.facebook.com/profile.php?id=61556396081171" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
</div>

      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Home</span>
          <span>About</span>
          <span>Work</span>
          <span>Team</span>
          <span>Contact</span>
          
        </div>
        <div className="footer-section-columns">
          <span>+94 77 674 0067</span>
          <span>ipour4321@gmail.com</span>
          <span>Faculty of Science</span>
          <span>University of Colombo </span>
          <span>Sri Lanka</span>
        </div>
        <div className="footer-section-columns">
          <span>
          <a href={termsConditions} target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:'none', color:'#484848'}}>Terms & Conditions
                </a>
                </span>
                 
                 <span>
                <a href={privacyPolicy} target="_blank"
                    rel="noreferrer"
                    style={{textDecoration:'none', color:'#484848', padding:0, margin:0}}>
                    Privacy Policy
                </a>
                </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
