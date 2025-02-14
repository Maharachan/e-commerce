import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/logo1.png"; // Replace with the correct path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo */}
        <div className="footer-column">
          <img src={logo} alt="Mildstone Kennels" className="footer-logo" />
        </div>

        {/* Column 2: Store Description */}
        <div className="footer-column">
          <p className="footer-description">
            Welcome to Mildstone Kennels, where we specialize in breeding and raising 
            healthy, well-socialized puppies. Explore our gallery and learn more about 
            our breeding practices.
          </p>
        </div>

        {/* Column 3: Navigation Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/breeding-details">Breeding Details</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@mildstonekennels.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Kennel Street, Pet City</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
