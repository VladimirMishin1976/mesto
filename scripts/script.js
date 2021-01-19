let page = document.querySelector('.page');

let popup = page.querySelector('.popup');
let popupClose = page.querySelector('.popup__close');
let formElement = page.querySelector('.popup__container');
let nameInput = page.querySelector('.popup__input_name');
let jobInput = page.querySelector('.popup__input_job');

let profileTitle = page.querySelector('.profile__title');
let jobProfile = page.querySelector('.profile__subtitle');
let profileEditButton = page.querySelector('.profile__edit-button');

// функция скрыть/открыть popup
function popupToggle() {
  popup.classList.toggle('popup_opened');
}

// заполнение форм редактирования профиля содержимым при открытии формы редактирования профиля
function popupSave() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = jobProfile.textContent;
  popupToggle();
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupToggle();
}

// кнопка открытие окна редактирования профиля
profileEditButton.addEventListener('click', popupSave);

// закрытие окна редактирования профиля
popupClose.addEventListener('click', popupToggle);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);


