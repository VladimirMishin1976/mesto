import {
  initialCards, popupProfile, nameInput, jobInput,
  buttonProfileEdit, popupAddCard, buttonAddCard, selectorsForm
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// --profile edit------------------------------------------------------------------------------------------------------------------------------
const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__subtitle'
});
// ПОпап профиля
const popupProfileForm = new PopupWithForm('.popup_place_profile',
  (formDataProfile) => { //колбек вызываемый при сабмите - принимает данные всех полей формы.
    userInfo.setUserInfo(formDataProfile);
    popupProfileForm.close();
  }
);
popupProfileForm.setEventListeners();
// кнопка открытие окна редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  // присваиваем полям ввода значения из страницы
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupProfileForm.open()
});

// --Card -------------------------------------------------------------------------------------------------------------------------
// попап большого изображения - Открытие закрытие
const popupWithImage = new PopupWithImage('.popup_place_img');
popupWithImage.setEventListeners();

// Добавление карточек из массива через класс Section
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item,
      '.template-card',
      // Открытие попапа увеличенной картинки
      () => {
        popupWithImage.open(card._name, card._link);
      }
    );
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
},
  '.cards__list'
);

cardList.renderItems();

// Валидация ------------------------------------------------------------------------------------------------------
const formValidatorProfile = new FormValidator(selectorsForm, popupProfile);
const formValidatorAddCard = new FormValidator(selectorsForm, popupAddCard);
formValidatorAddCard.enableValidation();
formValidatorProfile.enableValidation();

// ПОпап добавления карточки ----------------------------------------------------------------------------------
const popupAddCardForm = new PopupWithForm('.popup_place_add-card',
  (formData) => {
    const card = new Card(formData,
      '.template-card',
      // Открытие попапа увеличенной картинки
      () => {
        popupWithImage.open(card._name, card._link);
      }
    );
    const cardElement = card.createCard();
    cardList.addItem(cardElement);

    popupAddCardForm.close();
  }
);

popupAddCardForm.setEventListeners();
// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => {
  popupAddCardForm.open();
  // Сброс ошибок при открытии формы
  formValidatorAddCard.resetError();
});


