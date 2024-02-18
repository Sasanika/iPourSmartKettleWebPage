import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
        
      <button style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px', // Adjust width as needed
  height: '50px', // Adjust height as needed
  margin: 'auto', // Center horizontally
}} className="secondary-button">
  <a 
    href="mailto:your.email@gmail.com?subject=Question%20About%20iPour%20Products" 
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    Email Us
  </a>
</button>


      
    </div>
  );
};

export default Contact;
