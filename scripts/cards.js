// Cards Массив начальной загрузки
const initialCards = [
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
// Карточки шаблон
const templateCard = page.querySelector('.template-card').content;
// Попап добавления карточки
const popupAddCard = page.querySelector('.popup_place_add-card');
// кнопка добавить карточку
const buttonAddCard = page.querySelector('.profile__add-button');
// Кнопка закрыть попап добавления карточки
const buttonCloseAddCard = page.querySelector('.popup__close_add-card');
// Поля ввода попап добавления карточки
const formAddCard = document.forms['add-place'];
const inputCardTitle = formAddCard.elements['tittle-place'];
const inputCardImage = formAddCard.elements['link-img-place'];


// Функции ---------------------------------------------------------------------------------------------------------------------------
// function togglePopup() - в файле profile.js

// Добавить карточку места с фото
function addCard(item) {
  const cardList = page.querySelector('.cards__list');
  const card = templateCard.querySelector('.card').cloneNode(true);
  const imageCard = card.querySelector('.card__image');
  imageCard.alt = item['name'];
  imageCard.src = item['link'];
  card.querySelector('.card__caption').textContent = item['name'];

  // Попап картинки
  const popupImage = card.querySelector('.popup_place_img');
  const buttonCloseImage = card.querySelector('.popup__close');
  card.querySelector('.popup__img').src = item['link'];
  card.querySelector('.popup__img').alt = item['name'];
  card.querySelector('.popup__img-caption').textContent = item['name'];
  imageCard.addEventListener('click', () => togglePopup(popupImage));
  buttonCloseImage.addEventListener('click', () => togglePopup(popupImage));
  // Реагирование на кнопку лайк
  const likeIcon = card.querySelector('.card__like');
  likeIcon.addEventListener('click', () => { likeIcon.classList.toggle('card__like_choosed') });
  cardList.prepend(card);

  // Корзина
  const trashCard = page.querySelector('.card__trash');
  trashCard.addEventListener('click', function () {
    card.remove();
  });
  cardList.prepend(card);
}
// Кнопка добавить карточку введеную в попап карточку
function handleAddCardSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const cardArguments = {};
  cardArguments.name = inputCardTitle.value;
  cardArguments.link = inputCardImage.value;
  addCard(cardArguments);
  togglePopup(popupAddCard);
}
// ---------------------------------------------------------------------------------------------------------------------------
// Добавление карточек из массива
initialCards.forEach(addCard);
// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => togglePopup(popupAddCard));
// Кнопка закрыть попап добавления карточки
buttonCloseAddCard.addEventListener('click', () => togglePopup(popupAddCard));
// Событие submit на попап Создать карточку
formAddCard.addEventListener('submit', handleAddCardSubmit);

