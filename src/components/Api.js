export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }

  //  проверка ответа
  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`);
  }


  getUserInfo() { //1. Загрузка информации о пользователе с сервера
    return fetch(`${this._address}/users/me`,
      {
        headers: {
          authorization: this._token
        }
      }).then(this._checkResponse);
  }

  editUserInfo({ name, about }) { //3. Редактирование профиля
    return fetch(`${this._address}/users/me`,
      {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }
    ).then(this._checkResponse);
  }

  getInitialCards() { //2. Загрузка карточек с сервера
    return fetch(`${this._address}/cards`,
      {
        headers: {
          authorization: this._token
        }
      }).then(this._checkResponse);
  }

  addCard({ name, link }) {  //4. Добавление новой карточки
    return fetch(`${this._address}/cards`,
      {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this._checkResponse);
  }

  removeCard() {  // 7. Удаление карточки
    return fetch(`${this._address}/cards/${this.elem._id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        },
      }).then(this._checkResponse);
  }

  // Получение ссылки текущей(выбраной) карточки
  setCurrentElement(elem) {
    this.elem = elem;
  }

  // 8. Постановка и снятие лайка
  deleteLike() {
    return fetch(`${this._address}/cards/likes/${this.elem._id}`,
      {
        method: 'Delete',
        headers: {
          authorization: this._token
        }
      }).then(this._checkResponse);
  }

  putLike() {
    return fetch(`${this._address}/cards/likes/${this.elem._id}`,
      {
        method: 'PUT',
        headers: {
          authorization: this._token
        }

      }).then(this._checkResponse);
  }

  // 9. Обновление аватара пользователя
  editAvatarPhoto({ link }) {
    return fetch(`${this._address}/users/me/avatar`,
      {
        method: "PATCH",
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: link
        })
      }).then(this._checkResponse);
  }
}

