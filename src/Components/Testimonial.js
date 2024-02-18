import React from "react";
import ProfilePic1 from "../Assets/john-doe-image.png";
import ProfilePic2 from "../Assets/hasitha.png";
import ProfilePic3 from "../Assets/tharani.png";
import ProfilePic4 from "../Assets/sasa.png";


const Testimonial = () => {
  const styles = {
    testimonialSectionWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px 0',
    },
    
    testimonialCardsContainer: {
      display: 'flex',
      flexWrap: 'wrap', // Allow the cards to wrap to the next line
      justifyContent: 'center',
      gap: '20px', // Adjust the gap between cards as needed
    },
    
    testimonialCard: {
      width: '200px', // Adjust the width of each card
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    
    testimonialCardImg: {
      width: '100%',
      borderRadius: '50%', // Make the profile picture round
    },
    
    testimonialCardText: {
      marginTop: '10px',
    },
    
    testimonialCardHeading: {
      marginTop: '20px',
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.testimonialSectionWrapper}>
      <div className="work-section-top">
        <p className="primary-subheading">Team</p>
        <h1 className="primary-heading">Meet Our Team</h1>
      </div>

      <div style={styles.testimonialCardsContainer}>
        {/* Repeat this card structure for each testimonial */}


        <div style={styles.testimonialCard}>
          <img style={styles.testimonialCardImg} src={ProfilePic4} alt="" />
          <p style={styles.testimonialCardText}>
          UI/UX Designer
          </p>
          <h2 style={styles.testimonialCardHeading}>Sasanika Jayarathne</h2>
        </div>

        <div style={styles.testimonialCard}>
          <img style={styles.testimonialCardImg} src={ProfilePic1} alt="" />
          <p style={styles.testimonialCardText}>
          Connectivity Engineer
          </p>
          <h2 style={styles.testimonialCardHeading}>Nipun Dinushanka</h2>
        </div>

        <div style={styles.testimonialCard}>
          <img style={styles.testimonialCardImg} src={ProfilePic1} alt="" />
          <p style={styles.testimonialCardText}>
          Analytics Specialist
          </p>
          <h2 style={styles.testimonialCardHeading}>Lakshan Dayawansha</h2>
        </div>

        <div style={styles.testimonialCard}>
          <img style={styles.testimonialCardImg} src={ProfilePic2} alt="" />
          <p style={styles.testimonialCardText}>
          Hardware Engineer
          </p>
          <h2 style={styles.testimonialCardHeading}>Hasitha Hirushan</h2>
        </div>

        <div style={styles.testimonialCard}>
          <img style={styles.testimonialCardImg} src={ProfilePic3} alt="" />
          <p style={styles.testimonialCardText}>
          Hardware Engineer
                    </p>
          <h2 style={styles.testimonialCardHeading}>Tharani Jayawardena</h2>
        </div>
        
      </div>

      
    </div>
  );
};

export default Testimonial;
