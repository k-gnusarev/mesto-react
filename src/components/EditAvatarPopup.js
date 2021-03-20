import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  return (
    <PopupWithForm
      isActive={props.isActive}
      onClose={props.onClose}
      title="Обновить аватар"
      name="update-avatar"
      buttonCaption="Сохранить"
      handleSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatarLink"
        className="popup__input"
        id="avatar-url"
        placeholder="Ссылка на аватар"
        required
        ref={avatarRef}/>

      <span
        className="popup__form-error"
        id="avatar-url-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;