import React from 'react';
import '../index.css'; // Import index.css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import specific icons from Font Awesome

function Footer() {
  return (
    <footer className="animated-footer">
      <div className="footer-container">
        <div className="footer-contact">
            <h3>Connect Us</h3>
            <p>123 Flower Street, California</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: bootcamp@flowershop.com</p>
        </div>

        <div className="footer-logo animated-logo">
            <img src="/logo192.png" alt="Flower Shop Logo" />
          </div>

        <div className="footer-social animated-icons">
            <h3>Follow Us</h3>
            <ul>
              <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
            </ul>
          </div>

      </div>
    </footer>
  );
}

export default Footer;