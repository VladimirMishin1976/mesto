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
      job: this._userJob.textContent,
      avatar: this._userAvatar
    };
  }

  setUserInfo({name, job, avatar}) { //принимает данные пользователя и добавляет их на страницу
    this._userName.textContent = name;
    this._userJob.textContent = job;
    this._userAvatar.src = avatar;
  }
}
