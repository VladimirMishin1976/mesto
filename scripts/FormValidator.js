export class FormValidator {
  constructor(selectors, formElement) {//принимает вторым параметром элемент той формы, которая валидируется ???
    this._selectors = selectors;
    this._formElement = formElement;
  }

  _showInputError() {
    const errorElement = this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);
    this._inputElement.classList.add(this._selectors.inputTypeErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._selectors.inputErrorActiveClass);
  };

  _hideInputError() {
    const errorElement = this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);
    this._inputElement.classList.remove(this._selectors.inputTypeErrorClass);
    errorElement.classList.remove(this._selectors.inputErrorActiveClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    this._inputElement = inputElement;
    if (!this._inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputEl) => {
      return !inputEl.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    this._inputList = [...this._formElement.querySelectorAll(this._selectors.inputSelector)]; //Массив инпутов в форме
    this._buttonElement = this._formElement.querySelector(this._selectors.submitButtonSelector);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
  // Включить валидацию
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
  // Сброс ошибок при открытии формы
  resetError() {
    this._inputList.forEach((inputElement) => {
      const errorElement = inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);
      inputElement.classList.remove(this._selectors.inputTypeErrorClass);
      errorElement.classList.remove(this._selectors.inputErrorActiveClass);
      errorElement.textContent = '';
    });
  }

}


