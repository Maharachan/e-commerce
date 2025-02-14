import React from "react";
import "./Hero.css";
import caneCorsoImage from "../assets/hero.png"; // Update path as needed

function HeroSection() {
  return (
    <div className="hero-container">
      {/* Left Column */}
      <div className="hero-text">
        <h3 className="first-text">Get Your</h3>
        <h1 className="second-text">CANE CORSO</h1>
        <button className="contact-btn1">CONTACT US</button>
      </div>

      {/* Right Column */}
      <div className="hero-image">
        <img src={caneCorsoImage} alt="Cane Corso Puppies" />
      </div>
    </div>
  );
}

export default HeroSection;
