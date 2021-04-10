export default class UserInfo { //отвечает за управление отображением информации о пользователе на странице
  //Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
  constructor({ userNameSelector, userJobSelector, userAvatar }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo() { //возвращает объект с данными пользователя - существующие
    return {
      name: this._userName.textContent,
      about: this._userJob.textContent,
      avatar: this._userAvatar
    };
  }

  setUserInfo({name, about, avatar}) { //принимает данные пользователя и добавляет их на страницу
    this._userName.textContent = name ? name : this._userName.textContent;
    this._userJob.textContent = about ? about : this._userJob.textContent;
    this._userAvatar.src = avatar ? avatar : this._userAvatar.src;
  }
}
