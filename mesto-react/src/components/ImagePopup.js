import React from 'react';

function ImagePopup(props) {
  return (    
    <div className={`popup popup_type_${props.name} ${props.isActive ? 'popup_active' : ''}`}>
      <div className="popup__photo-container">
        <button type="button" className="button popup__close-button"></button>
        <img className="popup__photo" alt={`На фото: ${props.card.name}`} src={props.card ? props.card.link : ""} />
        <p className="popup__photo-title">{props.card.name}</p>          
      </div>
    </div>
  );
}

export default ImagePopup;