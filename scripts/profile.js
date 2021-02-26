const page = document.querySelector('.page');

// Попап редактирования профиля
const popupProfile = page.querySelector('.popup_place_profile');
const buttonCloseProfileEdit = page.querySelector('.popup__close_profile');
const formProfile = document.forms['edit-profile'];
const nameInput = formProfile.elements['name-profile'];
const jobInput = formProfile.elements['job-profile'];

// профиль
const profileTitle = page.querySelector('.profile__title');
const jobProfile = page.querySelector('.profile__subtitle');
const buttonProfileEdit = page.querySelector('.profile__edit-button');

// функция скрыть popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  page.removeEventListener('keydown', closePopupEscape);
}
// функция открыть popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  
  page.addEventListener('keydown', closePopupEscape); // закрыть попап по Esc
}
//  Закрыть попап по клику на оверлей
const closePopupClickOverlay = (popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
}
// открытие и заполнение форм редактирования профиля содержимым
function openPopupProfile() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = jobProfile.textContent;
  nameInput.dispatchEvent(new Event('input'));
  jobInput.dispatchEvent(new Event('input'));
  openPopup(popupProfile);
}
// закрыть попап кнопкой Escape
function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = page.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет'
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

// --------------------------------------------------------------------------------------------------------------------------------

// кнопка открытие окна редактирования профиля
buttonProfileEdit.addEventListener('click', openPopupProfile);

// закрытие окна редактирования профиля
buttonCloseProfileEdit.addEventListener('click', () => closePopup(popupProfile));

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', handleProfileFormSubmit);


