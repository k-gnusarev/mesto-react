import logo from './logo.svg';
import './pages/index.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img src="<%=require('./images/logo.svg')%>" className="logo" alt="Логотип Mesto Russia" />
      </header>
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
      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button type="button" className="button popup__close-button"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="edit-profile" className="popup__form" novalidate>
            <section className="popup__section">
              <input
                type="text"
                name="title"
                className="popup__input"
                id="edit-title"
                placeholder="Имя профиля"
                required
                minlength="2"
                maxlength="40" />
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
                minlength="2"
                maxlength="200" />
              <span className="popup__form-error" id="edit-subtitle-error"></span>
            </section>
            <button type="submit" className="button popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button type="button" className="button popup__close-button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form name="add-place" className="popup__form popup__form_type_add" novalidate>
            <section className="popup__section">
              <input
                type="text"
                name="placeName"
                className="popup__input"
                id="add-name"
                placeholder="Название"
                required
                minlength="2"
                maxlength="30" />
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
            <button type="submit" className="button popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_update-avatar">
        <div className="popup__container">
          <button type="button" className="button popup__close-button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form name="update-avatar" className="popup__form popup__form_type_update-avatar" novalidate>
            <section className="popup__section">
              <input
                type="url"
                name="avatarLink"
                className="popup__input"
                id="avatar-url"
                placeholder="Ссылка на аватар"
                required />
              <span className="popup__form-error" id="avatar-url-error"></span>
            </section>        
            <button type="submit" className="button popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>
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
          <form name="confirm-delete" className="popup__form" novalidate>
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
