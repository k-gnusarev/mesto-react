import React from 'react';

function ImagePopup({ card, onClose }) {
  return (    
    <div className={`popup popup_type_viewer ${card ? "popup_active" : ""}`}>
      <div className="popup__photo-container">
        <button type="button" className="button popup__close-button" onClick={onClose}></button>
        <img className="popup__photo" alt={card ? card.name : ""} src={card ? card.link : ""} />
        <p className="popup__photo-title">{card ? card.name : ""}</p>          
      </div>
    </div>
  );
}

export default ImagePopup;