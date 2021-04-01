import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) { //handleFormSubmit -  колбэк обработчик сабмита формы.
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() { //собирает данные всех полей формы.
    this._inputList = this._popup.querySelectorAll('.popup__input'); //массив инпутов в форме
    this._formValues = {}; //   объект для значений полей инпутов

    this._inputList.forEach(input => { // добавляем в этот объект значения всех полей
      this._formValues[input.name] = input.value;
    });
    return this._formValues;  // возвращаем объект значений
  }

  setEventListeners() {
    //добавить обработчик сабмита формы.
    this._popup.addEventListener('submit', () => {
      // добавим вызов функции _handleFormSubmit
      // передадим ей объект — результат работы _getInputValues
      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }

  close() {
    super.close();
    //сбросить форму при закрытии
    this._popup.querySelector('form').reset();
  }
  open() {
    //  событие инпут в полях ввода при открытии формы
    this._popup.querySelectorAll('.popup__input').forEach(input => input.dispatchEvent(new Event('input')));
    super.open();
  }
}
