import './index.css'; // добавьте импорт главного файла стилей
import {
  popupProfile, nameInput, jobInput,
  buttonProfileEdit, popupAddCard, buttonAddCard, selectorsForm, address, token
} from '../utils/constants.js';
import Api from '../components/Api.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// --Card -------------------------------------------------------------------------------------------------------------------------
// попап большого изображения - Открытие закрытие
const popupWithImage = new PopupWithImage('.popup_place_img');
popupWithImage.setEventListeners();

// Функция создать карточку
const cardPhoto = (data) => {
  const card = new Card(
    {
      item: data,
      selector: '.template-card',
      // Открытие попапа увеличенной картинки
      handleCardClick: () => {
        popupWithImage.open(card._name, card._link);
      },
      handleTrashClick: () => {
        popupTrashCard.open();
      }
    }
  );
  return card.createCard();
}

// 6. Попап удаления карточки -----------------------------------------
const popupTrashCard = new PopupWithForm({
  popupSelector: '.popup_place_trash-card',
  handleFormSubmit: () => {

  }
});
popupTrashCard.setEventListeners();
// Открытие окна удаления карточки

// Cекция с карточками
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(cardPhoto(item));
  },
  containerSelector: '.cards__list'
});

// ПОпап добавления карточки ----------------------------------------------------------------------------------
const popupAddCardForm = new PopupWithForm({
  popupSelector: '.popup_place_add-card',
  handleFormSubmit: (formData) => { //handleFormSubmit -  колбэк обработчик сабмита формы - принимает объект данных полей формы
    api.addCard(formData)
      .then(dataCard => { //4. Добавление новой карточки
        cardList.addItem(cardPhoto(dataCard));
      }).catch(err => console.error(err));
    // popupAddCardForm.close();
  }
});

popupAddCardForm.setEventListeners();
// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => {
  popupAddCardForm.open();
  // Сброс ошибок при открытии формы
  formValidatorAddCard.resetError();
});

// Api
const api = new Api({ address: address, token: token });

api.getUserInfo() // 1. Загрузка информации о пользователе с сервера
  .then(info => {
    userInfo.setUserInfo({
      name: info.name,
      about: info.about,
      avatar: info.avatar
    });
  }).catch(err => console.error(err));

api.getInitialCards() // 2. Загрузка карточек с сервера
  .then(cards => {
    cardList.renderItems(cards); // Добавление карточек c сервера
  }).catch(err => console.error(err));

// --profile edit------------------------------------------------------------------------------------------------------------------------------
const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__subtitle',
  userAvatar: '.profile__avatar'
});
// ПОпап профиля
const popupProfileForm = new PopupWithForm(
  {
    popupSelector: '.popup_place_profile',
    handleFormSubmit: (formDataProfile) => { //колбек вызываемый при сабмите - принимает данные всех полей формы.
      api.editUserInfo(formDataProfile) //3. Редактирование профиля
        .then(() => userInfo.setUserInfo(formDataProfile))
        .catch(err => console.error(err));
      // popupProfileForm.close();
    }
  }

);
popupProfileForm.setEventListeners();

// кнопка открытие окна редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();

  // присваиваем полям ввода значения из страницы
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupProfileForm.open()
});


// Валидация ------------------------------------------------------------------------------------------------------
const formValidatorProfile = new FormValidator(selectorsForm, popupProfile);
const formValidatorAddCard = new FormValidator(selectorsForm, popupAddCard);
formValidatorAddCard.enableValidation();
formValidatorProfile.enableValidation();










