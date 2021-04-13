// import {idUser} from '../pages/index.js';
export default class Card {
  // handleCardClick - функция должна открывать попап с картинкой при клике на карточку.
  // item = объект с name и link карточки
  // selector - селектор темплейта карточки
  constructor({ item, userId, selector, handleCardClick, handleTrashClick, handleLikeClick }) {
    this._card = document.querySelector(selector).content.querySelector('.card').cloneNode(true);
    this._userId = userId;
    // Элементы карточки
    this._imageCard = this._card.querySelector('.card__image');
    this._captionCard = this._card.querySelector('.card__caption');
    this._likeIcon = this._card.querySelector('.card__like');
    this._trashCard = this._card.querySelector('.card__trash');
    this._likeCount = this._card.querySelector('.card__like-count');
    // Данные элементов карточек
    this._name = item['name'];
    this._link = item['link'];
    this._likeData = item['likes']; // данные количества лайков с сервера
    this._id = item['_id'];
    this._idOwnerCard = item.owner['_id'];
    console.log()
    this._likeOwner = this._likeData.some(element => element._id === this._userId); // Проверка своего лайка
    // Колбеки
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
  }

  // Реагирование на кнопку лайк
  _addLike() {
    this._likeIcon.classList.add('card__like_choosed');
  }

  _deleteLike() {
    this._likeIcon.classList.remove('card__like_choosed');
  }

  // Корзина
  removeCard() {
    this._card.remove();
    this._card = null;
  }

  _setEventListeners() {
    this._likeIcon.addEventListener('click', () => this._handleLikeClick());
    this._trashCard.addEventListener('click', () => this._handleTrashClick());
    this._imageCard.addEventListener('click', () => this._handleCardClick());
  }
  // Создать карточку места с фото
  createCard() {
    if (this._idOwnerCard !== this._userId) {// Удаление корзины у чужих карточек
      this._trashCard.remove();
    }

    if (this._likeOwner) { // Проверка своего лайка
      this._addLike();
    }

    this._imageCard.alt = this._name;
    this._imageCard.src = this._link;
    this._captionCard.textContent = this._name;
    this._likeCount.textContent = this._likeData.length;
    this._setEventListeners();
    return this._card;
  }
}



