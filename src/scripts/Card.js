
export default class Card {
  constructor(item, selector) {
    this._card = document.querySelector(selector).content.querySelector('.card').cloneNode(true);
    this._imageCard = this._card.querySelector('.card__image');
    this._captionCard = this._card.querySelector('.card__caption');
    this._likeIcon = this._card.querySelector('.card__like');
    this._trashCard = this._card.querySelector('.card__trash');
    this._name = item['name'];
    this._link = item['link'];
  }
  // Реагирование на кнопку лайк
  _toggleLike() {
    this._likeIcon.classList.toggle('card__like_choosed');
  }
  // Корзина
  _removeCard() {
    this._card.remove();
    this._card = null;
  }
  _setEventListeners() {
    this._likeIcon.addEventListener('click', () => this._toggleLike());
    this._trashCard.addEventListener('click', () => this._removeCard());
  }
  // Создать карточку места с фото
  createCard() {
    this._imageCard.alt = this._name;
    this._imageCard.src = this._link;
    this._captionCard.textContent = this._name;
    this._setEventListeners();
    return this._card;
  }
}



