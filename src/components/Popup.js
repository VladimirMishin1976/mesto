import { keyClosePopup } from '../utils/constants.js';

export default class Popup { //отвечает за открытие и закрытие попапа
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) { //закрыть попап клавишей Esc
    if (evt.key === keyClosePopup) {
      this.close();
    }
  }

  _handleOverlayClose(evt) { //закрыть попап по клику на оверлей
    if (evt.target === this._popup) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() { //добавляет слушатель клика иконке закрытия попапа  и оверлею
    const buttonClose = this._popup.querySelector('.popup__close');
    buttonClose.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (evt) => this._handleOverlayClose(evt));
  }
}
