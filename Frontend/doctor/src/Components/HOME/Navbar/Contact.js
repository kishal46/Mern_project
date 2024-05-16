import React from 'react';
import './Singup.css'
const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Email: kishal@gmail.com</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Address: 123 Saravanampatti, Coimbatore </p>
      </div>
      <div className="contact-form">
        <h2>Contact us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
