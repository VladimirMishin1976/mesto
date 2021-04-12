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
    return fetch(`${this._address}/cards/${this._idRemoveCard}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        },
      }).then(response => response.ok
        ? Promise.resolve('success')
        : Promise.reject(`Ошибка: ${response.status}`))
  }

  // Получение ID удаляемой  карточки
  getIdRemoveCard(id, card) {
    this._idRemoveCard = id;
    this._card = card;
  }
}
