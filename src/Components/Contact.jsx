import React, { useState } from "react";
import "./ContactPage.css"; // import the stylesheet

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Here, you can add your logic for sending the contact form data to your server or email address
  };

  return (
    <div className="contact-page-container">
      <h1 className="contact-page-header">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact-page-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="contact-page-input"
        />

        <label htmlFor="email" className="contact-page-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="contact-page-input"
        />

        <label htmlFor="message" className="contact-page-label">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="contact-page-input contact-page-textarea"
        ></textarea>

        <button type="submit" className="contact-page-button">
          Submit
        </button>
      </form>
    </div>
    
  );
}

export default Contact;
