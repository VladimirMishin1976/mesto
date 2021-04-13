import './index.css'; // добавьте импорт главного файла стилей
import {
  popupProfile, nameInput, jobInput, buttonAvatarEdit, popupAvatarEdit, popupAvatarInput,
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

export let userId = 0;
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
      handleCardClick: () => {  // Открытие попапа увеличенной картинки
        popupWithImage.open(card._name, card._link);
      },
      handleTrashClick: () => { // Открытие попапа удаления карточки
        popupTrashCard.open();
        api.getCurrentElement(card);//  передача ссылки удаляемой карточки в api
      },
      handleLikeClick: () => { //8. Постановка и снятие лайка
        api.getCurrentElement(card); //  передача ссылки текущей карточки в api
        if (card._likeOwner) { // Проверка своего лайка
          api.deleteLike()
            .then(response => {
              card._likeOwner = false;
              card._deleteLike();
              card._likeCount.textContent = response.likes.length;
            }).catch(err => console.error(err));
        } else {
          api.putLike()
            .then(response => {
              card._likeOwner = true;
              card._addLike();
              card._likeCount.textContent = response.likes.length;
            }).catch(err => console.error(err));
        }
      }
    }
  );
  return card.createCard(data);
}

// 6. Попап удаления карточки -----------------------------------------
const popupTrashCard = new PopupWithButton({
  popupSelector: '.popup_place_trash-card',
  handleSubmit: () => {
    api.removeCard()
      .then(() => {
        api._elem.removeCard();
      }).catch(err => console.error(err));
  }
});
popupTrashCard.setEventListeners();

// Api--------------------------------------------------
const api = new Api({ address: address, token: token });

// ++++++++++++++           КОД ДО ПРИМЕНЕНИЯ   Promise.all             ++++++++++++++++++++++++
// api.getInitialCards() // 2. Загрузка карточек с сервера
// .then(cards => {
//   cardList.renderItems(cards); // Добавление карточек c сервера
// }).catch(err => console.error(err));

// api.getUserInfo() // 1. Загрузка информации о пользователе с сервера
// .then(info => {
//   userInfo.setUserInfo(info); // Установили на странице данные пользователя с сервера
// }).catch(err => console.error(err));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(result => {
    userId = result[1]._id;
    cardList.renderItems(result[0]); // Добавление карточек c сервера
    userInfo.setUserInfo(result[1]); // Установили на странице данные пользователя с сервера
  }).catch(err => console.error(err));

// Cекция с карточками-------------------------------------------------------
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(cardPhoto(item));
  },
  containerSelector: '.cards__list'
});

// ПОпап добавления карточки ----------------------------------------------------------------------------------
const formAddCard = new PopupWithForm({
  popupSelector: '.popup_place_add-card',
  handleFormSubmit: (formData) => { //handleFormSubmit -  колбэк обработчик сабмита формы - принимает объект данных полей формы
    api.addCard(formData)
      .then(dataCard => { //4. Добавление новой карточки
        cardList.addItem(cardPhoto(dataCard));
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

// 9. Обновление аватара пользователя -----------------------------------------
const formAvatarEdit = new PopupWithForm({
  popupSelector: '.popup_place_avatar',
  handleFormSubmit: (formData) => { //handleFormSubmit -  колбэк обработчик сабмита формы - принимает объект данных полей формы
    api.editAvatarPhoto(formData)
      .then(dataCard => {
        userInfo._userAvatar.src = dataCard.avatar;//formData.link;
      }).catch(err => console.error(err));
  }
});

formAvatarEdit.setEventListeners();
// Открытие окна добавления карточки
buttonAvatarEdit.addEventListener('click', () => {
  popupAvatarInput.value = userInfo._userAvatar.src;
  formAvatarEdit.open();
});

// Валидация ------------------------------------------------------------------------------------------------------
const formValidatorProfile = new FormValidator(selectorsForm, popupProfile);
const formValidatorAddCard = new FormValidator(selectorsForm, popupAddCard);
const formValidatorAvatarEdit = new FormValidator(selectorsForm, popupAvatarEdit);
formValidatorAddCard.enableValidation();
formValidatorProfile.enableValidation();
formValidatorAvatarEdit.enableValidation();










