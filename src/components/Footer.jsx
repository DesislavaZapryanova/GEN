// Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
      <section className="contacts">
        <img
          className="logo"
          src="images/GEN_logo.jpg"
          alt="Logo"
        />
        <Link className="about-link">example@gmail.com </Link>
      </section>

      <section className="social-media">
        <Link
          className="social-link"
          target="_blank"
          aria-label="Facebook">
          Facebook
          <i className="fab fa-facebook-square" />
        </Link>

        <Link
          className="social-link"
          target="_blank"
          aria-label="Instagram">
          Instagram
          <i className="fab fa-instagram" />
        </Link>

        <Link
          className="social-link"
          target="_blank"
          aria-label="LinkedIn">
          LinkedIn
          <i className="fab fa-linkedin" />
        </Link>
      </section>
    </div>
  );
}

export default Footer;
