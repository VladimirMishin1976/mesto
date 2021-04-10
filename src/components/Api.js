export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }

  getInitialCards() {
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

  getUserInfo() {
    return fetch(`${this._address}/users/me`,
      {
        headers: {
          authorization: this._token
        }
      }
    ).then(response => response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`)
    );
  }

  editUserInfo({ name, about }) {
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
      : Promise.reject(`Ошибка: ${response.status}`)
    );

  }
}

