import React from 'react';
import './Section3.css';
import { useNavigate } from "react-router-dom";
import exampleImage from '../assets/breed.png'; // Replace with your local image path

const Section3 = () => {
  const navigate = useNavigate(); // Hook for navigation
  return (
    <div className="section3">
      <div className="left-column">
        <p className="description">
        Breeding a Cane Corso requires careful planning to ensure the health and well-being of both the parents and the puppies. First, select healthy, high-quality dogs with good temperaments and test them for genetic health conditions. Monitor the female’s heat cycle and mate her at the right time. Natural mating or artificial insemination (AI) can be used. During pregnancy, provide proper nutrition and veterinary care, and prepare a whelping box for the mother. After birth, monitor the puppies for health, start socialization, and ensure they are placed in loving homes. Ethical and responsible breeding practices are essential for the betterment of the breed.
        </p>
        <button className="view-more-btn" onClick={() => navigate("/breeding-details")}>
        View More
      </button>
      </div>
      <div className="right-column">
        <img src={exampleImage} alt="Example" className="section-image" />
      </div>
    </div>
  );
};

export default Section3;
