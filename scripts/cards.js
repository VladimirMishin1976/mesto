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
// Список карточек
const cardList = page.querySelector('.cards__list');
// Переменные попапа картинки карточки
const popupCard = page.querySelector('.popup_place_img');
const popupCardImage = popupCard.querySelector('.popup__img');
const popupCardCaption = popupCard.querySelector('.popup__img-caption');
const popupCardClose = popupCard.querySelector('.popup__close');



// Функции ---------------------------------------------------------------------------------------------------------------------------
// function openPopup() и closePopup- в файле profile.js

// Создать карточку места с фото
function createCard(item) {
  const card = templateCard.querySelector('.card').cloneNode(true);
  const imageCard = card.querySelector('.card__image');
  const captionCard = card.querySelector('.card__caption');
  imageCard.alt = item['name'];
  imageCard.src = item['link'];
  captionCard.textContent = item['name'];
  // Открыть попап картинки (клик по картинке карточки)
  imageCard.addEventListener('click', handlePopupImageCard);
  // Реагирование на кнопку лайк
  const likeIcon = card.querySelector('.card__like');
  likeIcon.addEventListener('click', () => { likeIcon.classList.toggle('card__like_choosed') });
  // Корзина
  const trashCard = card.querySelector('.card__trash');
  trashCard.addEventListener('click', function () { card.remove(); });
  return card;
}

// Добавить карточку
function addCardToCardList(item) {
  cardList.prepend(createCard(item));
}

// Открытие попапа увеличенной картинки при клике на картинку карточки
function handlePopupImageCard(evt) {
  // Переменные карточки
  const imageCard = evt.target;
  const card = imageCard.closest('.card');
  const captionCard = card.querySelector('.card__caption');
  popupCardImage.src = imageCard.src;
  popupCardImage.alt = imageCard.alt;
  popupCardCaption.textContent = captionCard.textContent;
  openPopup(popupCard);
}

// Кнопка добавить карточку введеную в попап карточку - открытие попапа
function handleAddCardSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const cardArguments = { name: inputCardTitle.value, link: inputCardImage.value };

  addCardToCardList(cardArguments);
  closePopup(popupAddCard);
  formAddCard.reset();
}

// ---------------------------------------------------------------------------------------------------------------------------
// Добавление карточек из массива
initialCards.forEach(addCardToCardList);
// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));
// Кнопка закрыть попап добавления карточки
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
// Событие submit на попап Создать карточку
formAddCard.addEventListener('submit', handleAddCardSubmit);
// Закрыть попап картинки карточки
popupCardClose.addEventListener('click', () => closePopup(popupCard));


