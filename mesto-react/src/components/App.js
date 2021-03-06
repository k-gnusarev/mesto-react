import '../pages/index.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UpdateAvatarPopup from './UpdateAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  // УПРАВЛЕНИЕ ПОПАПАМИ
  const [isUpdateAvatarActive, setUpdateAvatarActive] = React.useState(false);
  const [isEditProfileActive, setEditProfileActive] = React.useState(false);
  const [isAddPlaceActive, setAddPlaceActive] = React.useState(false);

  // Открытие попапов
  const handleUpdateAvatarClick = () => {
    setUpdateAvatarActive(true);
  };

  const handleEditProfileClick = () => {
    setEditProfileActive(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlaceActive(true);
  };
  // TODO: попап подтверждения удаления

  // Закрытие попапов

  function closePopups() {
    setUpdateAvatarActive(false);
    setEditProfileActive(false);
    setAddPlaceActive(false);
  }

  // --Закрытие по Esc

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closePopups();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  },
  [])

  return (
    <div className="page">
      <Header />
      <Main
        onUpdateAvatar={handleUpdateAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <EditProfilePopup
        isActive={isEditProfileActive}
        onClose={closePopups}
      />
      <AddPlacePopup
        isActive={isAddPlaceActive}
        onClose={closePopups}
      />
      <UpdateAvatarPopup
        isActive={isUpdateAvatarActive}
        onClose={closePopups}
      />
      <div className="popup popup_type_viewer">
        <div className="popup__photo-container">
          <button type="button" className="button popup__close-button"></button>
          <img className="popup__photo" alt="#" src="#" />
          <p className="popup__photo-title"></p>          
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button type="button" className="button popup__close-button"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <form name="confirm-delete" className="popup__form" noValidate>
            <button type="submit" className="button popup__submit-button">Да</button>
          </form>      
        </div>
      </div>
      <template className="card-template">
        <div className="card">
          <img className="card__photo" alt="#" src="#" />
          <div className="card__menu">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button type="button" className="button card__like-button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
          <button className="button card__delete-button"></button>
        </div>
      </template>
    </div>
  );
}

export default App;
