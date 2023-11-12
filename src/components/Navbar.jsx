// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    showButton();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setClick(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}>
          <img
            src="./images/GEN_logo.jpg"
            alt="GEN Logo"
          />
        </Link>
        <div
          className="menu-icon"
          onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/collection"
              className="nav-links"
              onClick={closeMobileMenu}>
              COLLECTION
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}>
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}>
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacts"
              className="nav-links"
              onClick={closeMobileMenu}>
              CONTACTS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
