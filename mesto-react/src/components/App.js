import '../pages/index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UpdateAvatarPopup from './UpdateAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import ImagePopup from './ImagePopup';

function App() {
  // УПРАВЛЕНИЕ ПОПАПАМИ
  const [isUpdateAvatarActive, setUpdateAvatarActive] = React.useState(false);
  const [isEditProfileActive, setEditProfileActive] = React.useState(false);
  const [isAddPlaceActive, setAddPlaceActive] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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

  const handleCardClick = (props) => {
    setSelectedCard(props);
  }
  // TODO: попап подтверждения удаления

  // Закрытие попапов

  function closePopups() {
    setUpdateAvatarActive(false);
    setEditProfileActive(false);
    setAddPlaceActive(false);
    setSelectedCard(null);
  }

  // --Закрытие по Esc

  React.useEffect(() => {
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
        onCardClick={handleCardClick}
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
      <ConfirmDeletePopup
      />

    </div>
  );
}

export default App;
