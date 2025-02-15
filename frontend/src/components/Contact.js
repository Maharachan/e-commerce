import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import contactImage from "../assets/14.png"; // Adjust the path as needed

function ContactForm1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false); // New state to track form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://api.brevo.com/v3/smtp/email", 
        {
          sender: { name: "Cane Corso", email: "tnlkrishna1234@gmail.com" },
          to: [{ email: formData.email, name: formData.firstName }],
          subject: "Thank You for Contacting Us!",
          htmlContent: `<p>Hello ${formData.firstName},</p>
                        <p>Thank you for reaching out to us. We will get back to you shortly.</p>
                        <p>Best regards,<br/>Your Company</p>`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": "apikey",  // Replace with your actual API key
          },
        }
      );

      if (response.status === 201) {
        setMessage("Thank you! We will get back to you soon.");
        setSubmitted(true); // Hide the form after successful submission
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container1">
      <div className="contact-image1">
        <img src={contactImage} alt="Contact Us" />
      </div>

      <div className="contact-form1">
        <h2>Contact Us</h2>

        {message && <p className="success-message1">{message}</p>}

        {!submitted && ( // Hide form after submission
          <form onSubmit={handleSubmit}>
            <div className="input-group1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm1;
