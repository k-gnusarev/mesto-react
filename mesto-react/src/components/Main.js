import React from 'react';

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-section">
          <img src="<%=require('./images/spy_icon-icons.com_55034.png')%>" alt="Аватар пользователя" className="profile__avatar" />
          <img src="<%=require('./images/Edit-Avatar-Icon.svg')%>" alt="Поставить другой аватар" className="profile__avatar-button" />
        </div>
        <div className="profile__description">
          <div className="profile__title-container">
            <h1 className="profile__title"></h1>
            <button type="button" className="button profile__edit-button"></button>
          </div>       
          <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="button profile__add-button"></button>
      </section>
      <section className="content">
      </section>
    </main>
  );
}

export default Main;