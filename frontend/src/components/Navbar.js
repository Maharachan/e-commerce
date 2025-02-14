import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
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
      <Link to="/contact" className="contact-btn">CONTACT US</Link>
    </nav>
  );
};

export default Navbar;
