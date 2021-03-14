export class FormValidator {
  constructor(selectors, formElement) {//принимает вторым параметром элемент той формы, которая валидируется ???
    this._selectors = selectors;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);
    inputElement.classList.add(this._selectors.inputTypeErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selectors.inputErrorActiveClass);
  };

  _hideInputError(inputElement) {
    const errorElement = inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);
    inputElement.classList.remove(this._selectors.inputTypeErrorClass);
    errorElement.classList.remove(this._selectors.inputErrorActiveClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputEl) => {
      return !inputEl.validity.valid;
    })
  };

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._selectors.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._selectors.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector)); //Массив инпутов в форме
    const buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}


