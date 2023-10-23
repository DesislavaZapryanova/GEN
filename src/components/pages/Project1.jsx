// Project1.js

import React, { useState } from 'react';
import './Project1.css';

function Project1() {
  const images = [
    'images/kitchen-1.jpg',
    'images/kitchen-2.jpg',
    'images/living_room2.jpg',
    'images/living_room2-1.jpg',
    'images/bedroom3.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + images.length) % images.length
        : (currentIndex + 1) % images.length;

    setSelectedImage(images[newIndex]); // Update the selected image
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container-project-page">
      <div className="container-images">
        {images.map((src, index) => (
          <img
            key={index}
            className="project1-image"
            src={src}
            alt={`Project ${index + 1}`}
            onClick={() => openImage(src, index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={closeImage}>
          <button
            className="arrow-button left-arrow"
            onClick={(e) => {
              e.stopPropagation(); // Stop propagation to prevent modal closure
              navigate('prev');
            }}>
            &lt;
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="modal-image"
          />
          <button
            className="arrow-button right-arrow"
            onClick={(e) => {
              e.stopPropagation(); // Stop propagation to prevent modal closure
              navigate('next');
            }}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default Project1;
