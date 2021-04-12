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

// Api
const api = new Api({ address: address, token: token });

api.getUserInfo() // 1. Загрузка информации о пользователе с сервера
  .then(info => {
    userInfo.setUserInfo({ // Установили на странице данные пользователя с сервера
      name: info.name,
      about: info.about,
      avatar: info.avatar
    });

    // Cекция с карточками
    const cardList = new Section({
      renderer: (item) => {
        cardList.addItem(cardPhoto(item, info._id));
      },
      containerSelector: '.cards__list'
    });

    // ПОпап добавления карточки ----------------------------------------------------------------------------------
    const popupAddCard = new PopupWithForm({
      popupSelector: '.popup_place_add-card',
      handleFormSubmit: (formData) => { //handleFormSubmit -  колбэк обработчик сабмита формы - принимает объект данных полей формы
        api.addCard(formData)
          .then(dataCard => { //4. Добавление новой карточки
            cardList.addItem(cardPhoto(dataCard, info._id));
          }).catch(err => console.error(err));
      }
    });
    // Открытие окна удаления карточки
    popupAddCard.setEventListeners();
    // Открытие окна добавления карточки
    buttonAddCard.addEventListener('click', () => {
      popupAddCard.open();
      // Сброс ошибок при открытии формы
      formValidatorAddCard.resetError();
    });
    api.getInitialCards() // 2. Загрузка карточек с сервера
      .then(cards => {
        cardList.renderItems(cards); // Добавление карточек c сервера
      }).catch(err => console.error(err));
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











