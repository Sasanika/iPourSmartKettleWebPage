import React from 'react';
import kettleLogo from '../Assets/iPourLogo.png';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const handleScrollToAbout = () => {
    scroll.scrollTo(document.getElementById('about').offsetTop); // Scroll to the top position of the "about" section
  };

  return (
    <nav style={navbarStyle}>
      <div style={navbarLeftStyle}>
        <img src={kettleLogo} alt="Logo" style={logoStyle} />
      </div>
      <div style={navbarRightStyle}>
        <ul style={navLinksStyle}>
          <li style={listItemStyle}>
            <a href="#" onClick={() => handleNavLinkClick('Home')} style={navLinkStyle}>Home</a>
          </li>
          <li style={listItemStyle}>
            <a href="#About" onClick={handleScrollToAbout} style={navLinkStyle}>About</a>
          </li>
          <li style={listItemStyle}>
            <a href="#Testimonial" onClick={() => handleNavLinkClick('Testimonial')} style={navLinkStyle}>Team</a>
          </li>
          <li style={listItemStyle}>
            <a href="#Contact" onClick={() => handleNavLinkClick('Contact')} style={navLinkStyle}>Contact</a>
          </li>
          <li style={listItemStyle}>
            <a href="https://forms.gle/HyFp6o37E9A6CqBX7" style={buyNowStyle}>
              Buy Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const handleNavLinkClick = (section) => {
  // Your custom logic to handle navigation
  console.log(`Navigating to ${section}`);
};

const navbarStyle = {
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px', // Add padding
  backgroundColor: 'transparent',
  color: '#fff',
  zIndex: 10,
};

const navbarLeftStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  width: '100px', // Adjust as needed
  height: 'auto', // Maintain aspect ratio
};

const navbarRightStyle = {};

const navLinksStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const listItemStyle = {
  marginRight: '20px', // Adjust spacing between list items
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#fff',
};

const buyNowStyle = {
  textDecoration: 'none',
  backgroundColor: '#fff', // White background color
  color: '#000', // Black font color
  padding: '10px 20px', // Adjust padding as needed
  borderRadius: 8, // Rounded corners
  whiteSpace: 'nowrap', // Prevent button text from wrapping
};

export default Navbar;
