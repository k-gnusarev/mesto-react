import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      children=""
      isActive={props.isActive}
      onClose={props.onClose}>

      <section className="popup__section">
        <input
          type="text"
          name="title"
          className="popup__input"
          id="edit-title"
          placeholder="Имя профиля"
          required
          minLength="2"
          maxLength="40" />
        <span className="popup__form-error" id="edit-title-error"></span>
      </section>

      <section className="popup__section">
        <input
          type="text"
          name="subtitle"
          className="popup__input"
          id="edit-subtitle"
          placeholder="Описание профиля"
          required
          minLength="2"
          maxLength="200" />

        <span className="popup__form-error" id="edit-subtitle-error"></span>
      </section>
      <button type="submit" className="button popup__submit-button">Сохранить</button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;