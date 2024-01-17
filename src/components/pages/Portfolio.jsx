import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnFocus: true,
    initialSlide: 0,
  };

  return (
    <div className="container-page">
      <ul className="collections-container">
        <Link to="/project1">
          <Slider
            {...sliderSettings}
            className="collection-slider">
            <img
              className="collection-image"
              src="images/kitchen-1.jpg"
            />

            <img
              className="collection-image"
              src="images/kitchen-2.jpg"
              alt="Kitchen 2"
            />

            <img
              className="collection-image"
              src="images/living_room2.jpg"
              alt="Living Room 2"
            />
          </Slider>
        </Link>
        <Link to="/project2">
          <Slider
            {...sliderSettings}
            className="collection-slider">
            <img
              className="collection-image"
              src="images/1.jpg"
              alt="Image 1"
            />
            <img
              className="collection-image"
              src="images/bedroom2-1.jpg"
              alt="Bedroom 2-1"
            />
            <img
              className="collection-image"
              src="images/bedroom2-2.jpg"
              alt="Bedroom 2-2"
            />
          </Slider>
        </Link>
        <Link to="/project3">
          <Slider
            {...sliderSettings}
            className="collection-slider">
            <img
              className="collection-image"
              src="images/living-room-3.jpg"
              alt="Living Room 3"
            />
            <img
              className="collection-image"
              src="images/living-room-2.jpg"
              alt="Living Room 2"
            />
            <img
              className="collection-image"
              src="images/living-room-1.jpg"
              alt="Living Room 1"
            />
          </Slider>
        </Link>
        <Link to="/project4">
          <Slider
            {...sliderSettings}
            className="collection-slider">
            <img
              className="collection-image"
              src="images/bathroom-1.jpg"
              alt="Bathroom 1"
            />
            <img
              className="collection-image"
              src="images/bathroom-2.jpg"
              alt="Bathroom 2"
            />
            <img
              className="collection-image"
              src="images/bathroom-3.jpg"
              alt="Bathroom 3"
            />
          </Slider>
        </Link>
        <Link to="/project5">
          <Slider
            {...sliderSettings}
            className="collection-slider">
            <img
              className="collection-image"
              src="images/2.jpg"
              alt="Image 2"
            />
            <img
              className="collection-image"
              src="images/4.jpg"
              alt="Image 4"
            />
          </Slider>
        </Link>
      </ul>
    </div>
  );
}

export default Portfolio;
