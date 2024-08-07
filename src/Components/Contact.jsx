import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you. Get in touch with us for any inquiries or feedback!</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <ul>
              <li>
                <strong>Address:</strong> 123 Burger Lane, Foodtown
              </li>
              <li>
                <strong>Email:</strong> info@burgerhut.com
              </li>
              <li>
                <strong>Phone:</strong> (123) 456-7890
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;