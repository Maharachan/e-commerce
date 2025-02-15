import React from "react";
import "./Section1.css";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/5.png"; // Replace with actual image paths
import img2 from "../assets/6.png";
import img3 from "../assets/7.png";
import img4 from "../assets/8.png";
import img5 from "../assets/9.png";
import img6 from "../assets/10.png";
import img7 from "../assets/11.png";
import img8 from "../assets/12.png";

function Section1() {
  const navigate = useNavigate(); // Hook for navigation
  
  return (
    <section className="section1-container">
      <div className="gallery-columns">
        <div className="column">
          <img src={img1} alt="Gallery  1" className="img-small" />
          <img src={img2} alt="Gallery  2" className="img-small" />
        </div>
        <div className="column">
          <img src={img3} alt="Gallery  3" className="img-large" />
          <img src={img4} alt="Gallery  4" className="img-large" />
        </div>
        <div className="column">
          <img src={img5} alt="Gallery  5" className="img-small" />
          <img src={img6} alt="Gallery  6" className="img-small" />
        </div>
        <div className="column">
          <img src={img7} alt="Gallery 7" className="img-large" />
          <img src={img8} alt="Gallery  8" className="img-large" />
        </div>
      </div>

      {/* View Gallery Button */}
      <div className="button-container">
      <button className="view-gallery-btn" onClick={() => navigate("/gallery")}>
        View Gallery
      </button>
      </div>
    </section>
  );
}

export default Section1;
