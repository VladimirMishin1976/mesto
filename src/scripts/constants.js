// Cards Массив начальной загрузки
export const initialCards = [
  {
    name: 'Пенза',
    link: 'https://riapo.ru/upload/0penza/Beliakov/2407-5.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Марс',
    link: 'https://360tv.ru/media/images/articles/cover/72ef513b-2d22-4265-8b57-0cf2b9e7913a/3d-surreal-mars-style-landscape_1048-9878.jpg'
  }
];

export const page = document.querySelector('.page');
// Попап редактирования профиля
export const buttonCloseProfileEdit = page.querySelector('.popup__close_profile');
export const popupProfile = page.querySelector('.popup_place_profile');
export const formProfile = document.forms['edit-profile'];
export const nameInput = formProfile.elements['name-profile'];
export const jobInput = formProfile.elements['job-profile'];
// профиль
export const profileTitle = page.querySelector('.profile__title');
export const jobProfile = page.querySelector('.profile__subtitle');
export const buttonProfileEdit = page.querySelector('.profile__edit-button');
// Попап добавления карточки_________________________________________________________________
export const popupAddCard = page.querySelector('.popup_place_add-card');
// кнопка добавить карточку
export const buttonAddCard = page.querySelector('.profile__add-button');
// Кнопка закрыть попап добавления карточки
export const buttonCloseAddCard = page.querySelector('.popup__close_add-card');
// Поля ввода попап добавления карточки
export const formAddCard = document.forms['add-place'];
export const inputCardTitle = formAddCard.elements['tittle-place'];
export const inputCardImage = formAddCard.elements['link-img-place'];
// Список карточек(контейнер карточек)
export const cardListSection = page.querySelector('.cards__list');
// Переменные попапа картинки карточки
export const popupCard = page.querySelector('.popup_place_img');
export const popupCardImage = popupCard.querySelector('.popup__img');
export const popupCardCaption = popupCard.querySelector('.popup__img-caption');
export const popupCardClose = popupCard.querySelector('.popup__close');

export const selectorsForm = { // объект с селекторами для FormValidator
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  labelSelector: '.popup__field',
  inputErrorSelector: '.popup__input-error',
  inputTypeErrorClass: 'popup__input_type_error',
  inputErrorActiveClass: 'popup__input-error_active'
};
