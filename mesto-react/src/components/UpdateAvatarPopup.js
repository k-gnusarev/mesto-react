import React from 'react';
import PopupWithForm from './PopupWithForm';

function UpdateAvatarPopup(props) {
  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      children=""
      isActive={props.isActive}
      onClose={props.onClose}>

        <section className="popup__section">

          <input
            type="url"
            name="avatarLink"
            className="popup__input"
            id="avatar-url"
            placeholder="Ссылка на аватар"
            required />

          <span
            className="popup__form-error"
            id="avatar-url-error">
          </span>

          <button
            type="submit"
            className="button popup__submit-button">Сохранить</button>

        </section>

    </PopupWithForm>
  );
}

export default UpdateAvatarPopup;
