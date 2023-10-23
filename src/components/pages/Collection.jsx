import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Collection.css';
import Footer from '../Footer';

function Collection() {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isHovered,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    initialSlide: 0,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  return (
    <div className="container-page">
      <ul className="collections-container">
        <Slider
          {...sliderSettings}
          className="collection-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}>
          <img
            className="collection-image"
            src="images/kitchen-1.jpg"
            alt="Kitchen 1"
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
          <img
            className="collection-image"
            src="images/living_room2-1.jpg"
            alt="Living Room 2-1"
          />
          <img
            className="collection-image"
            src="images/bedroom3.jpg"
            alt="Bedroom 3"
          />
        </Slider>

        <Slider
          {...sliderSettings}
          className="collection-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}>
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

        <Slider
          {...sliderSettings}
          className="collection-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}>
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
          <img
            className="collection-image"
            src="images/bedroom1-1.jpg"
            alt="Bedroom 1-1"
          />
          <img
            className="collection-image"
            src="images/bedroom1-2.jpg"
            alt="Bedroom 1-2"
          />
          <img
            className="collection-image"
            src="images/bedroom1-3.jpg"
            alt="Bedroom 1-3"
          />
        </Slider>

        <Slider
          {...sliderSettings}
          className="collection-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}>
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

        <Slider
          {...sliderSettings}
          className="collection-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}>
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
      </ul>
      <Footer />
    </div>
  );
}

export default Collection;
