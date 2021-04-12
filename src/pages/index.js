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
import PopupWithButton from '../components/PopupWithButton.js';

// --Card -------------------------------------------------------------------------------------------------------------------------
// попап большого изображения - Открытие закрытие
const popupWithImage = new PopupWithImage('.popup_place_img');
popupWithImage.setEventListeners();

// Функция создать карточку
const cardPhoto = (data, userId) => {
  const card = new Card(
    {
      item: data,
      userId: userId,
      selector: '.template-card',
      handleCardClick: () => {  // Открытие попапа увеличенной картинки
        popupWithImage.open(card._name, card._link);
      },
      handleTrashClick: () => { // Открытие попапа удаления карточки
        popupTrashCard.open();
        api.getDataRemoveCard(card._idCard, card);//  передача ID  и ссылки удаляемой карточки в api
      }
    }
  );
  return card.createCard();
}

// 6. Попап удаления карточки -----------------------------------------
const popupTrashCard = new PopupWithButton({
  popupSelector: '.popup_place_trash-card',
  handleSubmit: () => {
    api.removeCard()
      .then(() => {
        api._card.removeCard(); 
      }).catch(err => console.log(err));
  }
});
popupTrashCard.setEventListeners();

// Cекция с карточками-------------------------------------------------------
const cardList = new Section({
  renderer: (item) => {
console.log(userInfo._userId)
    cardList.addItem(cardPhoto(item, userInfo._userId));
  },
  containerSelector: '.cards__list'
});


// Api
const api = new Api({ address: address, token: token });

api.getInitialCards() // 2. Загрузка карточек с сервера
  .then(cards => {
    cardList.renderItems(cards); // Добавление карточек c сервера
  }).catch(err => console.error(err));

api.getUserInfo() // 1. Загрузка информации о пользователе с сервера
  .then(info => {
    userInfo.setUserInfo(info); // Установили на странице данные пользователя с сервера
  }).catch(err => console.error(err));

// ПОпап добавления карточки ----------------------------------------------------------------------------------
const formAddCard = new PopupWithForm({
  popupSelector: '.popup_place_add-card',
  handleFormSubmit: (formData) => { //handleFormSubmit -  колбэк обработчик сабмита формы - принимает объект данных полей формы
    api.addCard(formData)
      .then(dataCard => { //4. Добавление новой карточки
        cardList.addItem(cardPhoto(dataCard, userInfo._userId));
      }).catch(err => console.error(err));
  }
});

formAddCard.setEventListeners();
// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => {
  formAddCard.open();
  // Сброс ошибок при открытии формы
  formValidatorAddCard.resetError();
});


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











