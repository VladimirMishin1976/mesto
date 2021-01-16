let page = document.querySelector('.page');
let profileEditButton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let popupClose = page.querySelector('.popup__close');

// функция скрыть/открыть popup
function popupToggle() {
  popup.classList.toggle('popup_opened');
}

// кнопка открытие окна редактирования профиля
profileEditButton.addEventListener('click', popupToggle);

// закрытие окна редактирования профиля
popupClose.addEventListener('click', popupToggle);
