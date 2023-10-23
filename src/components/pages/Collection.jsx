// Collection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Collection.css'; // Import your CSS file

function Collection() {
  const sliderSettings = {
    // Add your slider settings here
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const imageStacksData = [
    [
      { src: 'images/kitchen-1.jpg', to: '/project1' },
      { src: 'images/kitchen-2.jpg', to: '/project1' },
    ],
    [
      { src: 'images/1.jpg', to: '/project2' },
      { src: 'images/bedroom2-1.jpg', to: '/project2' },
    ],
    [
      { src: 'images/living-room-3.jpg', to: '/project3' },
      { src: 'images/living-room-2.jpg', to: '/project3' },
    ],
    [
      { src: 'images/2.jpg', to: '/project4' },
      { src: 'images/4.jpg', to: '/project4' },
    ],
    [
      { src: 'images/bathroom-1.jpg', to: '/project5' },
      { src: 'images/bathroom-2.jpg', to: '/project5' },
    ],
  ];

  return (
    <div className="container-page">
      <div className="collections-container">
        {imageStacksData.map((imageStack, index) => (
          <Slider
            className="collection-slider"
            key={index}
            {...sliderSettings}>
            {imageStack.map((image, imageIndex) => (
              <Link
                to={image.to}
                key={imageIndex}>
                <img
                  className="collection-image"
                  src={image.src}
                  alt={`Image ${index + 1}-${imageIndex + 1}`}
                />
              </Link>
            ))}
          </Slider>
        ))}
      </div>
    </div>
  );
}

export default Collection;
