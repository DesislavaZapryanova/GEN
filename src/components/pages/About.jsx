import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container-about-page">
      <div className="container-frame">
        <div className="container-texts">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <img
          className="about-image"
          src="images/3.jpg"
        />
      </div>
    </div>
  );
}

export default About;
