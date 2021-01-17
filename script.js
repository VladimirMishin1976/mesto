let page = document.querySelector('.page');

let popup = page.querySelector('.popup');
let popupClose = page.querySelector('.popup__close');
let formElement = page.querySelector('.popup__container');

let profileTitle = page.querySelector('.profile__title');
let jobProfile = page.querySelector('.profile__subtitle');
let profileEditButton = page.querySelector('.profile__edit-button');


// функция скрыть/открыть popup
function popupToggle() {
  popup.classList.toggle('popup_opened');
  // заполнение плейсходлеров форм редактирования профиля содержимым
  formElement.elements.nameProfile.placeholder = profileTitle.textContent;
  formElement.elements.jobProfile.placeholder = jobProfile.textContent;
}

// кнопка открытие окна редактирования профиля
profileEditButton.addEventListener('click', popupToggle);

// закрытие окна редактирования профиля
popupClose.addEventListener('click', popupToggle);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  let nameInput = page.querySelectorAll('.popup__input')[0].value; // Воспользуйтесь инструментом .querySelector()
  let jobInput = page.querySelectorAll('.popup__input')[1].value; // Воспользуйтесь инструментом .querySelector()
  // Получите значение полей из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput;
  jobProfile.textContent = jobInput;
  popupToggle();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);


