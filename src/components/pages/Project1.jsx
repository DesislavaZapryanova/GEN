import React from 'react';
import './Project1.css';

function Project1() {
  return (
    <div className="container-project-page">
      <div className="container-images">
        <img
          className="project1-image"
          src="images/kitchen-1.jpg"
          alt="Kitchen 1"
        />
        <img
          className="project1-image"
          src="images/kitchen-2.jpg"
          alt="Kitchen 2"
        />
        <img
          className="project1-image"
          src="images/living_room2.jpg"
          alt="Living Room 2"
        />
        <img
          className="project1-image"
          src="images/living_room2-1.jpg"
          alt="Living Room 2-1"
        />
        <img
          className="project1-image"
          src="images/bedroom3.jpg"
          alt="Bedroom 3"
        />
      </div>
    </div>
  );
}

export default Project1;
