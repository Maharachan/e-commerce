import React, { useState, useEffect } from 'react';
import './Section5.css';

const testimonials = [
  { name: "John Doe", text: "This is an amazing service. Highly recommend! This is an amazing service. Highly recommend! This is an amazing service. Highly recommend!" },
  { name: "Jane Smith", text: "A life-changing experience. Will definitely use again.This is an amazing service. Highly recommend! This is an amazing service. Highly recommend!" },
  { name: "Robert Johnson", text: "Fantastic! Exceeded my expectations! This is an amazing service. Highly recommend! This is an amazing service. Highly recommend!" },
];

const Section5 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    
    <div className="section5">
      
      <div className="carousel">
        <div className="testimonial">
          <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
          <p className="testimonial-name">- {testimonials[currentTestimonial].name}</p>
        </div>
      </div>
      
      </div>
   
    
  );
};

export default Section5;
