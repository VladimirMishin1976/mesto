// Cards
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
// Карточки
const templateCard = page.querySelector('.template-card').content;
const profileAddButton = page.querySelector('.profile__add-button');

// Попап добавления карточки
const popupAddCard = page.querySelector('.popup_add-card');


// Добавить карточку места с фото
function addCard(item) {
  const cardList = page.querySelector('.cards__list');
  const card = templateCard.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = item['link'];
  card.querySelector('.card__caption').textContent = item['name'];
  cardList.prepend(card);
}

// function popupToggle() - в файле profile.js

// Добавление карточек из массива
initialCards.forEach(addCard);

// Открытие окна добавления карточки
// profileAddButton.addEventListener('submit', )
