// Cards.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    initialSlide: 0,
  };

  return (
    <div className="cards-container">
      <h1>GEN Interiors</h1>
      <Slider
        {...settings}
        className="cards-slider">
        <CardItem src="images/living-room-3.jpg" />
        <CardItem src="images/living-room-1.jpg" />
      </Slider>
    </div>
  );
}

export default Cards;
