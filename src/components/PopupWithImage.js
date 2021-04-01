import Popup from './Popup.js';

export default class PopupWithImage extends Popup { // Открытие попап большой картинки
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popup.querySelector('.popup__img');//картинка попапа
    this._caption = this._popup.querySelector('.popup__img-caption');//Подпись попапа картинки

  }
  open(imageTitle, imageSrc) {
    super.open();

    this._imagePopup.src = imageSrc;
    this._imagePopup.alt = imageTitle;
    this._caption.textContent = imageTitle;
  }
}

