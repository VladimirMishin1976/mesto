const page = document.querySelector('.page');

// Попап редактирования профиля
const popupProfile = page.querySelector('.popup_profile');
const popupClose = page.querySelector('.popup__close_profile');
const formProfile = document.forms['edit-profile'];
const nameInput = formProfile.elements['name-profile'];
const jobInput = formProfile.elements['job-profile'];

// профиль
const profileTitle = page.querySelector('.profile__title');
const jobProfile = page.querySelector('.profile__subtitle');
const profileEditButton = page.querySelector('.profile__edit-button');


// функция скрыть/открыть popup
function popupProfileToggle(popup) {
  popup.classList.toggle('popup_opened');
}

// заполнение форм редактирования профиля содержимым при открытии формы редактирования профиля
function popupSaveOpen() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = jobProfile.textContent;
  popupProfileToggle(popupProfile);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет'
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupProfileToggle(popupProfile);
}

// кнопка открытие окна редактирования профиля
profileEditButton.addEventListener('click', popupSaveOpen);

// закрытие окна редактирования профиля
popupClose.addEventListener('click', () => popupProfileToggle(popupProfile));

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', handleFormSubmit);



