const selectorsForm = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  labelSelector: '.popup__field',
  inputErrorSelector: '.popup__input-error',
  inputTypeErrorClass: 'popup__input_type_error',
  inputErrorActiveClass: 'popup__input-error_active'
};


const showInputError = (inputElement, errorMessage, selectors) => {
  const errorElement = inputElement.closest(selectors.labelSelector).querySelector(selectors.inputErrorSelector);
  inputElement.classList.add(selectors.inputTypeErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.inputErrorActiveClass);
};

const hideInputError = (inputElement, selectors) => {
  const errorElement = inputElement.closest(selectors.labelSelector).querySelector(selectors.inputErrorSelector);
  inputElement.classList.remove(selectors.inputTypeErrorClass);
  errorElement.classList.remove(selectors.inputErrorActiveClass);
  errorElement.textContent = '';
};

const checkInputValidity = (inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(inputElement, selectors);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(selectors.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(selectors.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, selectors);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, selectors);
      toggleButtonState(inputList, buttonElement, selectors);
    });
  });
};

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));// Массив форм
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectors);
  });
};

enableValidation(selectorsForm);



