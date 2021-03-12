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
// Класс Card ---------------------------------------------------------------------------------------------------------------------------
class Card {
  constructor(item, selector) {
    this._card = page.querySelector(selector).content.querySelector('.card').cloneNode(true);
    this._imageCard = this._card.querySelector('.card__image');
    this._captionCard = this._card.querySelector('.card__caption');
    this._likeIcon = this._card.querySelector('.card__like');
    this._trashCard = this._card.querySelector('.card__trash');
    this._name = item['name'];
    this._link = item['link'];
  }

  // Открытие попапа увеличенной картинки
  _handlePopupImageCard() {
    popupCardImage.src = this._link;
    popupCardImage.alt = this._name;
    popupCardCaption.textContent = this._name;
    openPopup(popupCard);
  }
  // Создать карточку места с фото
  createCard() {
    this._imageCard.alt = this._name;
    this._imageCard.src = this._link;
    this._captionCard.textContent = this._name;
    // Открыть попап картинки (клик по картинке карточки)
    this._imageCard.addEventListener('click', () => {
      this._handlePopupImageCard();
    });
    // Реагирование на кнопку лайк
    this._likeIcon.addEventListener('click', () => { this._likeIcon.classList.toggle('card__like_choosed') });
    // Корзина
    this._trashCard.addEventListener('click', () => { this._card.remove() });
    return this._card;
  }
}

// Функции ---------------------------------------------------------------------------------------------------------------------------
// function openPopup() и closePopup- в файле profile.js

// Создать карточку места с фото
// function createCard(item) {
//   const card = page.querySelector('.template-card').content.cloneNode(true);
//   const imageCard = card.querySelector('.card__image');
//   const captionCard = card.querySelector('.card__caption');
//   imageCard.alt = item['name'];
//   imageCard.src = item['link'];
//   captionCard.textContent = item['name'];
//   // Открыть попап картинки (клик по картинке карточки)
//   imageCard.addEventListener('click', () => {
//     handlePopupImageCard(item['name'], item['link']);
//   });
//   // Реагирование на кнопку лайк
//   const likeIcon = card.querySelector('.card__like');
//   likeIcon.addEventListener('click', () => { likeIcon.classList.toggle('card__like_choosed') });
//   // Корзина
//   const trashCard = card.querySelector('.card__trash');
//   trashCard.addEventListener('click', function () { card.remove(); });
//   return card;
// }
// Добавить карточку
function addCardToCardList(item) {
  cardList.prepend(new Card(item, '.template-card').createCard());
}
// // Открытие попапа увеличенной картинки при клике на картинку карточки
// function handlePopupImageCard(name, link) {
//   popupCardImage.src = link;
//   popupCardImage.alt = name;
//   popupCardCaption.textContent = name;
//   openPopup(popupCard);
// }
// Кнопка добавить карточку введеную в попап карточку - открытие попапа
function handleAddCardSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const cardArguments = { name: inputCardTitle.value, link: inputCardImage.value };

  addCardToCardList(cardArguments);
  closePopup(popupAddCard);
}

// ---------------------------------------------------------------------------------------------------------------------------
// Добавление карточек из массива
initialCards.forEach(addCardToCardList);
// Открытие окна добавления карточки
buttonAddCard.addEventListener('click', () => {
  formAddCard.reset();
  openPopup(popupAddCard);
  inputCardTitle.dispatchEvent(new Event('input'));
  inputCardImage.dispatchEvent(new Event('input'));
});
// Кнопка закрыть попап добавления карточки
buttonCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard)
});
// Событие submit на попап Создать карточку
formAddCard.addEventListener('submit', handleAddCardSubmit);
// Закрыть попап картинки карточки
popupCardClose.addEventListener('click', () => closePopup(popupCard));

// Закрыть попап по Оверлею
closePopupClickOverlay(popupCard);
closePopupClickOverlay(popupAddCard);
closePopupClickOverlay(popupProfile);


