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
    ).then(cards => {
      if (cards.ok) {
        return cards.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`,
      {
        headers: {
          authorization: this._token
        }
      }
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  editUserInfo(name, about) {
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
    )
  }
}

