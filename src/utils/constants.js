// адресс и токен сервера
export const address = 'https://mesto.nomoreparties.co/v1/cohort-22';
export const token = '1ffa7dc3-7c04-464d-a554-c3e498742c2a';
export const page = document.querySelector('.page');
// Попап редактирования профиля
export const popupProfile = page.querySelector('.popup_place_profile');
export const formProfile = document.forms['edit-profile'];
export const nameInput = formProfile.elements['name'];
export const jobInput = formProfile.elements['about'];
export const buttonSubmitProfile = popupProfile.querySelector('.popup__save');
// профиль кнопка открытия попапа
export const buttonProfileEdit = page.querySelector('.profile__edit-button');
// Попап добавления карточки_________________________________________________________________
export const popupAddCard = page.querySelector('.popup_place_add-card');
// кнопка сабмита попапа добавления карточки
export const buttonSubmitAddCard = popupAddCard.querySelector('.popup__save');
// кнопка открыть попап = добавить карточку
export const buttonAddCard = page.querySelector('.profile__add-button');
// кнопка открыть попап аватара
export const buttonAvatarEdit = page.querySelector('.profile__aratar-pointer');
// темплейт попапа редактирования фото аватара
export const popupAvatarEdit = page.querySelector('.popup_place_avatar');
export const buttonSubmitAvatarEdit = popupAvatarEdit.querySelector('.popup__save');
// поле ввода ссылки изображения аватара
export const popupAvatarInput = document.forms['avatar-photo'].elements['link'];

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
