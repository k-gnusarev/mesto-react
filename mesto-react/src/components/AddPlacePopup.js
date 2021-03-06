import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      children=""
      isActive={props.isActive}
      onClose={props.onClose}>

      <section className="popup__section">
        <input
          type="text"
          name="placeName"
          className="popup__input"
          id="add-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30" />
      <span className="popup__form-error" id="add-name-error"></span>
      </section>

      <section className="popup__section">
        <input
          type="url"
          name="placeLink"
          className="popup__input"
          id="add-url"
          placeholder="Ссылка на картинку"
          required />
        <span className="popup__form-error" id="add-url-error"></span>
      </section>        

      <button type="submit" className="button popup__submit-button">Сохранить</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;