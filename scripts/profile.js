const page = document.querySelector('.page');

// Попап редактирования профиля
const popupProfile = page.querySelector('.popup_profile');
const buttonCloseProfileEdit = page.querySelector('.popup__close_profile');
const formProfile = document.forms['edit-profile'];
const nameInput = formProfile.elements['name-profile'];
const jobInput = formProfile.elements['job-profile'];

// профиль
const profileTitle = page.querySelector('.profile__title');
const jobProfile = page.querySelector('.profile__subtitle');
const buttonProfileEdit = page.querySelector('.profile__edit-button');


// функция скрыть/открыть popup
function popupToggle(popup) {
  popup.classList.toggle('popup_opened');
}

// заполнение форм редактирования профиля содержимым при открытии формы редактирования профиля
function popupSaveOpen() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = jobProfile.textContent;
  popupToggle(popupProfile);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет'
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupToggle(popupProfile);
}

// кнопка открытие окна редактирования профиля
buttonProfileEdit.addEventListener('click', popupSaveOpen);

// закрытие окна редактирования профиля
buttonCloseProfileEdit.addEventListener('click', () => popupToggle(popupProfile));

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', handleFormSubmit);



