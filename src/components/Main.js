import React from 'react';
import avatarButton from '../images/Edit-Avatar-Icon.svg';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  // ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ

  const currentUser = React.useContext(CurrentUserContext);

  // ЗАГРУЗКА КАРТОЧЕК

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-section">
          <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__avatar" />
          <img src={avatarButton} alt="Поставить другой аватар" className="profile__avatar-button" onClick={props.onUpdateAvatar} />
        </div>
        <div className="profile__description">
          <div className="profile__title-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="button profile__edit-button" onClick={props.onEditProfile}></button>
          </div>       
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="button profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="content">
        {
          cards.map(card => (
              <Card
                card={card}
                onCardClick={props.onCardClick}
                key={card._id}
              />
            ))
        }
      </section>
    </main>
  );
}

export default Main;