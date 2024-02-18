import React from 'react';
import kettleLogo from '../Assets/iPourLogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <nav style={navbarStyle}>
      <div style={navbarLeftStyle}>
        <img src={kettleLogo} alt="Logo" style={logoStyle} />
      </div>
      <div style={navbarRightStyle}>
        <ul style={navLinksStyle}>
          <li style={listItemStyle}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50} // Adjust offset if needed
              duration={500}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50} // Adjust offset if needed
              duration={500}
              onSetActive={handleSetActive}
            >
              About
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-50} // Adjust offset if needed
              duration={500}
              onSetActive={handleSetActive}
            >
              Team
            </Link>
          </li>
          <li style={listItemStyle}>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50} // Adjust offset if needed
              duration={500}
              onSetActive={handleSetActive}
            >
              Contact
            </Link>
          </li>
          <li style={listItemStyle}>
            <a href="mailto:ipour4321@gmail.com" style={buyNowStyle}>
              Buy Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const navbarStyle = {
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
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

const buyNowStyle = {
  textDecoration: 'none',
  backgroundColor: '#fff', // White background color
  color: '#000', // Black font color
  padding: '10px 20px', // Adjust padding as needed
  borderRadius: '5px', // Rounded corners
};

export default Navbar;
