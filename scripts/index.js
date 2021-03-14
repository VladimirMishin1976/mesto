import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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
// Попап добавления карточки_________________________________________________________________
const popupAddCard = page.querySelector('.popup_place_add-card');
// кнопка добавить карточку
const buttonAddCard = page.querySelector('.profile__add-button');
// Кнопка закрыть попап добавления карточки
const buttonCloseAddCard = page.querySelector('.popup__close_add-card');
// Поля ввода попап добавления карточки
const formAddCard = document.forms['add-place'];
const inputCardTitle = formAddCard.elements['tittle-place'];
const inputCardImage = formAddCard.elements['link-img-place'];
// Список карточек
const cardList = page.querySelector('.cards__list');
// Переменные попапа картинки карточки
const popupCard = page.querySelector('.popup_place_img');
const popupCardImage = popupCard.querySelector('.popup__img');
const popupCardCaption = popupCard.querySelector('.popup__img-caption');
const popupCardClose = popupCard.querySelector('.popup__close');

const selectorsForm = { // объект с селекторами для FormValidator
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  labelSelector: '.popup__field',
  inputErrorSelector: '.popup__input-error',
  inputTypeErrorClass: 'popup__input_type_error',
  inputErrorActiveClass: 'popup__input-error_active'
};

// функция скрыть popup---------------------------------------------------------------------profile
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

// Функции-- Card-------------------------------------------------------------------------------------------------------------------------
// Добавить карточку
function addCardToCardList(item) {
  cardList.prepend(new Card(item, '.template-card').createCard());
}

// Кнопка добавить карточку введеную в попап карточку - открытие попапа
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const cardArguments = { name: inputCardTitle.value, link: inputCardImage.value };

  addCardToCardList(cardArguments);
  closePopup(popupAddCard);
}

// Открытие попапа увеличенной картинки
function handlePopupImageCard(evt) {
  if (evt.target.classList.contains('card__image')) {
    popupCardImage.src = evt.target.src;
    popupCardImage.alt = evt.target.alt;
    popupCardCaption.textContent = evt.target.alt;
    openPopup(popupCard);
  }
}
// --profile вызовы------------------------------------------------------------------------------------------------------------------------------

// кнопка открытие окна редактирования профиля
buttonProfileEdit.addEventListener('click', openPopupProfile);

// закрытие окна редактирования профиля
buttonCloseProfileEdit.addEventListener('click', () => closePopup(popupProfile));

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', handleProfileFormSubmit);

// --Card вызовы-------------------------------------------------------------------------------------------------------------------------
// Добавление карточек из массива
initialCards.forEach(addCardToCardList);
// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => {
  formAddCard.reset();
  openPopup(popupAddCard);
  inputCardTitle.dispatchEvent(new Event('input'));
  inputCardImage.dispatchEvent(new Event('input'));
});
// Кнопка закрыть попап добавления карточки
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
// Событие submit на попап Создать карточку
formAddCard.addEventListener('submit', handleAddCardSubmit);
// Закрыть попап картинки карточки
popupCardClose.addEventListener('click', () => closePopup(popupCard));
// Открытие попапа увеличенной картинки
cardList.addEventListener('click', handlePopupImageCard);

// Закрыть попап по Оверлею
closePopupClickOverlay(popupCard);
closePopupClickOverlay(popupAddCard);
closePopupClickOverlay(popupProfile);
// Валидация
new FormValidator(selectorsForm, popupProfile).enableValidation();
new FormValidator(selectorsForm, popupAddCard).enableValidation();
