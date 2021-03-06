import React from 'react';
import defaultAvatar from '../images/spy_icon-icons.com_55034.png';
import avatarButton from '../images/Edit-Avatar-Icon.svg';

function Main(props) {

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-section">
          <img src={defaultAvatar} alt="Аватар пользователя" className="profile__avatar" />
          <img src={avatarButton} alt="Поставить другой аватар" className="profile__avatar-button" onClick={props.onUpdateAvatar} />
        </div>
        <div className="profile__description">
          <div className="profile__title-container">
            <h1 className="profile__title"></h1>
            <button type="button" className="button profile__edit-button" onClick={props.onEditProfile}></button>
          </div>       
          <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="button profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="content">
      </section>
    </main>
  );
}

export default Main;