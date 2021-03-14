
export class Card {
  constructor(item, selector) {
    this._card = document.querySelector(selector).content.querySelector('.card').cloneNode(true);
    this._imageCard = this._card.querySelector('.card__image');
    this._captionCard = this._card.querySelector('.card__caption');
    this._likeIcon = this._card.querySelector('.card__like');
    this._trashCard = this._card.querySelector('.card__trash');
    this._name = item['name'];
    this._link = item['link'];
  }

  // Открытие попапа увеличенной картинки
  // _handlePopupImageCard() {
  //   popupCardImage.src = this._link;
  //   popupCardImage.alt = this._name;
  //   popupCardCaption.textContent = this._name;
  //   openPopup(popupCard);
  // }
  // Создать карточку места с фото
  createCard() {
    this._imageCard.alt = this._name;
    this._imageCard.src = this._link;
    this._captionCard.textContent = this._name;
    // // Открыть попап картинки (клик по картинке карточки)
    // this._imageCard.addEventListener('click', () => {
    //   this._handlePopupImageCard();
    // });
    // Реагирование на кнопку лайк
    this._likeIcon.addEventListener('click', () => { this._likeIcon.classList.toggle('card__like_choosed') });
    // Корзина
    this._trashCard.addEventListener('click', () => { this._card.remove() });
    return this._card;
  }
}



