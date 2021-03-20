import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const nameInputRef = React.useRef();
  const linkInputRef = React.useRef();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    props.onAddPlace({
      name: nameInputRef.current.value,
      link: linkInputRef.current.value
    });
  }

  return (
    <PopupWithForm
      isActive={props.isActive}
      onClose={props.onClose}
      title="Добавить место"
      name="add"
      buttonCaption="Сохранить"
      handleSubmit={handleSubmit}>
      <section className="popup__section">
        <input
          type="text"
          name="placeName"
          className="popup__input"
          id="add-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          ref={nameInputRef} />
        <span className="popup__form-error" id="add-name-error"></span>
      </section>

      <section className="popup__section">
        <input
          type="url"
          name="placeLink"
          className="popup__input"
          id="add-url"
          placeholder="Ссылка на картинку"
          required
          ref={linkInputRef} />
        <span className="popup__form-error" id="add-url-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default AddPlacePopup;