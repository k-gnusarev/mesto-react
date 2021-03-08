import React from 'react';

function Card({card, onCardClick}) {

  function cardClick () {
    onCardClick(card);
  }

  return (
    <div className="card">
      <img className="card__photo" alt={`На фото: ${card.name}`} src={card.link} onClick={cardClick} />
      <div className="card__menu">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="button card__like-button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button className="button card__delete-button"></button>
    </div>);
}

export default Card;