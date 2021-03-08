import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img className="card__photo" alt={`На фото: ${props.card.name}`} src={props.card.link} />
      <div className="card__menu">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="button card__like-button"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="button card__delete-button"></button>
    </div>);
}

export default Card;