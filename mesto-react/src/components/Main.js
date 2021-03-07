import React from 'react';
import avatarButton from '../images/Edit-Avatar-Icon.svg';
import api from '../utils/Api';

function Main(props) {

  // ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-section">
          <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" />
          <img src={avatarButton} alt="Поставить другой аватар" className="profile__avatar-button" onClick={props.onUpdateAvatar} />
        </div>
        <div className="profile__description">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="button profile__edit-button" onClick={props.onEditProfile}></button>
          </div>       
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="button profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="content">
      </section>
    </main>
  );
}

export default Main;