import Popup from './Popup.js'

export default class PopupWithButton extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    this._popup.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleSubmit();
      super.close();
    })
    super.setEventListeners();
  }

  removeCard(cardId) {
    
  }

}
