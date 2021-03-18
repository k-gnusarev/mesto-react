import '../index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';

function App() {
  const [currentUser, setCurrentUser] = React.useState();
  // УПРАВЛЕНИЕ ПОПАПАМИ
  const [isUpdateAvatarActive, setUpdateAvatarActive] = React.useState(false);
  const [isEditProfileActive, setEditProfileActive] = React.useState(false);
  const [isAddPlaceActive, setAddPlaceActive] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        console.log(res);
        setCurrentUser(res);
        console.log(currentUser);
      })
      .catch((err) => console.log(err));
  }, []);

  // Открытие попапов
  function handleUpdateAvatarClick() {
    setUpdateAvatarActive(true);
  };

  function handleEditProfileClick() {
    setEditProfileActive(true);
  };

  function handleAddPlaceClick() {
    setAddPlaceActive(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

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

    // ЗАГРУЗКА КАРТОЧЕК

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      api.getInitialCards()
        .then(res => {
          setCards(res);
        })
        .catch((err) => console.log(err));
    }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    console.log('---Main: card---');
    console.log(card);
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    const changeLikeCardStatus = isLiked ? api.removeLike(card._id) : api.setLike(card._id);
    changeLikeCardStatus.then(updatedCard => {
      const newCards = cards.map(c => c._id === card._id ? updatedCard : c);
      setCards(newCards);
    })
    .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        setCards(newCards);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        {currentUser && <Main
          onUpdateAvatar={handleUpdateAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />}
        <Footer />
        <PopupWithForm
          isActive={isEditProfileActive}
          onClose={closePopups}
          title="Редактировать профиль"
          name="edit"
          buttonCaption="Сохранить"
        >
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
        </PopupWithForm>

        <PopupWithForm
          isActive={isAddPlaceActive}
          onClose={closePopups}
          title="Добавить место"
          name="add"
          buttonCaption="Сохранить">
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
        </PopupWithForm>
        <PopupWithForm
          isActive={isUpdateAvatarActive}
          onClose={closePopups}
          title="Обновить аватар"
          name="update-avatar"
          buttonCaption="Сохранить"
        >
          <input
            type="url"
            name="avatarLink"
            className="popup__input"
            id="avatar-url"
            placeholder="Ссылка на аватар"
            required />

          <span
            className="popup__form-error"
            id="avatar-url-error"></span>
        </PopupWithForm>
        <PopupWithForm
          onClose={closePopups}
          title="Вы уверены?"
          name="delete"
          buttonCaption="Да"
        >

        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closePopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
