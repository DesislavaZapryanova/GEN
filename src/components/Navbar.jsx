// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={isMobile ? 'stacked-nav' : ''}>
      <div className="nav-logo">
        <Link
          to="/"
          className="unframed-link">
          <img
            src="./images/GEN_logo.jpg"
            alt="GEN Logo"
          />
        </Link>
      </div>
      <div className="nav-links">
        <Link
          to="/collection"
          className="nav-link">
          COLLECTION
        </Link>

        <Link
          to="/"
          className="nav-link">
          ABOUT
        </Link>

        <Link
          to="/contacts"
          className="nav-link">
          CONTACTS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
