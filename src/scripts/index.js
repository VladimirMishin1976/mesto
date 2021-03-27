import {
  page, initialCards, buttonCloseProfileEdit, popupProfile, formProfile, nameInput, jobInput,
  profileTitle, jobProfile, buttonProfileEdit, popupAddCard, buttonAddCard, buttonCloseAddCard,
  formAddCard, inputCardTitle, inputCardImage, cardListSection, popupCard, popupCardImage,
  popupCardCaption, popupCardClose, selectorsForm
} from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';

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
// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Функции-- Card-------------------------------------------------------------------------------------------------------------------------
// Кнопка добавить карточку введеную в попап карточку
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const cardArguments = { name: inputCardTitle.value, link: inputCardImage.value };
  const cardList = new Section({
    data: [cardArguments],
    renderer: (item) => {
      const card = new Card(item, '.template-card');
      const cardElement = card.createCard();
      cardList.addItem(cardElement);
    }
  },
    cardListSection
  );
  cardList.renderItems();
  closePopup(popupAddCard);
}

// Открыть попап увеличенной картинки
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
// Добавление карточек из массива через класс Section
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template-card');
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
},
  cardListSection
);

cardList.renderItems();

// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => {
  formAddCard.reset();
  openPopup(popupAddCard);
  inputCardTitle.dispatchEvent(new Event('input'));
  inputCardImage.dispatchEvent(new Event('input'));
  // Сброс ошибок при открытии формы
  formValidatorAddCard.resetError();
});
// Кнопка закрыть попап добавления карточки
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
// Событие submit на попап Создать карточку
formAddCard.addEventListener('submit', handleAddCardSubmit);
// Закрыть попап картинки карточки
popupCardClose.addEventListener('click', () => closePopup(popupCard));
// Открытие попапа увеличенной картинки
cardListSection.addEventListener('click', handlePopupImageCard);

// Закрыть попап по Оверлею
closePopupClickOverlay(popupCard);
closePopupClickOverlay(popupAddCard);
closePopupClickOverlay(popupProfile);
// Валидация
const formValidatorProfile = new FormValidator(selectorsForm, popupProfile);
const formValidatorAddCard = new FormValidator(selectorsForm, popupAddCard);
formValidatorAddCard.enableValidation();
formValidatorProfile.enableValidation();

