import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/footer"; 
import Gallery from "./components/Gallery"; 
import Breeding from "./components/Breeding"; 
import Testimonials from "./components/Testimonials"; 
import Contact from "./components/Contact"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={
          <>
            <Hero />
            <Section0 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </>
        }/>

        {/* Other Pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/breeding-details" element={<Breeding />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
