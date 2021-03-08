import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      children=""
      isActive={props.isActive}
      onClose={props.onClose}>

      <button type="submit" className="button popup__submit-button">Да</button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;