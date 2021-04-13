import UserInfo from "./UserInfo";

export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }

  getUserInfo() { //1. Загрузка информации о пользователе с сервера
    return fetch(`${this._address}/users/me`,
      {
        headers: {
          authorization: this._token
        }
      }).then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`)
      );
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
    ).then(response => response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`));
  }

  getInitialCards() { //2. Загрузка карточек с сервера
    return fetch(`${this._address}/cards`,
      {
        headers: {
          authorization: this._token
        }
      }
    ).then(cards => cards.ok
      ? cards.json()
      : Promise.reject(`Ошибка: ${response.status}`)
    );
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
      }).then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`))
  }

  removeCard() {  // 7. Удаление карточки
    return fetch(`${this._address}/cards/${this._elem._id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        },
      }).then(response => response.ok
        ? Promise.resolve('success')
        : Promise.reject(`Ошибка: ${response.status}`));
  }

  // Получение ссылки текущей(выбраной) карточки
  getCurrentElement(elem) {
    this._elem = elem;
  }

  // 8. Постановка и снятие лайка
  deleteLike() {
    return fetch(`${this._address}/cards/likes/${this._elem._id}`,
      {
        method: 'Delete',
        headers: {
          authorization: this._token
        }
      }).then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`));
  }

  putLike() {
    return fetch(`${this._address}/cards/likes/${this._elem._id}`,
      {
        method: 'PUT',
        headers: {
          authorization: this._token
        }

      }).then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`))
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
      }).then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`))
  }
}

