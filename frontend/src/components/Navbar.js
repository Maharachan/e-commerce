import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Mildstone Kennels" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/breeding-details">Breeding Details</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
      </ul>
      <button className="contact-btn" onClick={() => navigate("/contact")}>
        CONTACT US
      </button>
    </nav>
  );
};

export default Navbar;
