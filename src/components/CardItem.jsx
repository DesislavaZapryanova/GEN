// CardItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem({ src, label, path }) {
  return (
    <div className="cards__item">
      <Link
        className="cards__item__link"
        to={path}>
        <figure
          className="cards__item__pic-wrap"
          data-category={label}>
          <img
            className="cards__item__img"
            src={src}
            alt={label}
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{label}</h5>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;
