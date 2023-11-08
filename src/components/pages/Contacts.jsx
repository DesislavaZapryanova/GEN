// Contact.js

import React, { useState } from 'react';
import './Contacts.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container-contacts-page">
      <h1>CONTACTS</h1>
      <div className="container-forms">
        <div className="container-form">
          <form
            id="contact-form"
            onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="NAME"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required></textarea>
            <button type="submit">
              <div>
                <span>SEND</span>
              </div>
            </button>
          </form>
        </div>

        <div className="container-form-social">
          <ul>
            <li>
              <i className="fa fa-map-marker fa-2x" />
              <span>City, State</span>
            </li>
            <li>
              <i className="fa fa-phone fa-2x" />
              <span>
                <a
                  href="tel:1-212-555-5555"
                  title="Give me a call">
                  (212) 555-2368
                </a>
              </span>
            </li>
            <li>
              <i className="fa fa-envelope fa-2x" />
              <span>
                <a href="mailto:#">example@gmail.com</a>
              </span>
            </li>
          </ul>
          <hr />
          <div className="social-icons">
            <Link
              className="social-link"
              target="_blank"
              aria-label="Facebook">
              <i className="fab fa-facebook-square" />
            </Link>

            <Link
              className="social-link"
              target="_blank"
              aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link>

            <Link
              className="social-link"
              target="_blank"
              aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </Link>
          </div>
          <hr />
          <div className="copyright">© GEN Interiors Ltd 2023 - All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
