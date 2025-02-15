import React from "react";
import "./Testimonials.css";
import user1 from "../assets/13.png";
import user2 from "../assets/13.png";
import user3 from "../assets/13.png";
import user4 from "../assets/13.png";

const testimonials = [
  {
    id: 1,
    name: "Michael Smith",
    feedback: "Breeding my Cane Corso was a smooth process with the right guidance. This resource helped me understand every step.",
    image: user1,
  },
  {
    id: 2,
    name: "Jessica Brown",
    feedback: "I learned so much about responsible breeding. The information provided was detailed and easy to follow.",
    image: user2,
  },
  {
    id: 3,
    name: "David Johnson",
    feedback: "Ensuring the health and temperament of my Cane Corso puppies became my top priority after reading this guide.",
    image: user3,
  },
  {
    id: 4,
    name: "Sophia Williams",
    feedback: "The tips on selecting the right breeding stock and socializing the puppies were truly helpful. Highly recommended!",
    image: user4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What Our Breeders Say</h1>
      <div className="divider1"></div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <h2 className="testimonial-name">{testimonial.name}</h2>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
