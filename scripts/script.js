//dom_els

const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closePopup = document.querySelector('.popup__close');
// const closePopup = document.querySelectorAll('.popup__close');
const saveForm = document.querySelector('.popup__submit-button');
const nameInput = document.querySelector('.popup__input-name');
const positionInput = document.querySelector('.popup__input-position');

//forma El
const forma = document.querySelector('.popup__edit-form');

// edit-button El
const editBtn = document.querySelector('.profile__edit-button');


//new-card-popup Els
// - buttons
const popupAddCardEl = document.querySelector('.popup_add-card');
const profileAddButton = document.querySelector('.profile__add-button');
const closeNewCardPopupButtonEl = document.querySelector('.popup__close_new-card-form');
// - inputs
const placeNameInput = document.querySelector('.popup__input-place-name');
const placeLinkInput = document.querySelector('.popup__input-place-link');
const cardForm = document.querySelector('.popup__edit-form_new-card-form');

//elements (cards)
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

//FULL IMAGE Els
const popupFullImageEl = document.querySelector('.popup__image-content');
const fullImage = document.querySelector('.popup__image');
const closePopupImageEl = document.querySelector('.popup__close-image');
const popupPlaceName = document.querySelector('.popup__place-name');

//cards init
function addCard(card) {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  cardElement.querySelector('.elements__picture').setAttribute('src', card.link);
  cardElement.querySelector('.elements__text').textContent = card.name;
  cardElement.querySelector('.elements__picture').setAttribute('alt', card.name);
  cardElement.querySelector('.elements__delete').addEventListener('click', toDeleteCard);
  cardElement.querySelector('.elements__like').addEventListener('click', toLikeCard);
  cardElement.querySelector('.elements__picture').addEventListener('click', toOpenPicture);
  elements.append(cardElement);
  
}

initialCards.forEach(addCard);

//utility functions
//to close popup
function toClosePopup(popup) {
  return function popupToClose() {
    console.log(popup);
    popup.classList.remove('popup_shown');
  }
}

//to open popup
function popupToOpen(popup) {
  popup.classList.add('popup_shown');

}



// USER functions
function getUserData() {
  nameInput.value = profileName.textContent;
  positionInput.value = profilePosition.textContent;
  popupToOpen(popupEditProfile);

}

function saveUserData(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profilePosition.textContent = positionInput.value;
  toClosePopup(popupEditProfile)();
}


//USER FORM ACTIONS
//open user form
editBtn.addEventListener('click', getUserData);
//close user form
closePopup.addEventListener('click', toClosePopup(popupEditProfile));
//save user data
forma.addEventListener('submit', saveUserData)



//CARD functions
function saveCard(e) {
  e.preventDefault();
  let newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  addCard(newCard);
  placeNameInput.value = '';
  placeLinkInput.value = '';
  toClosePopup(popupAddCardEl)();
}

//Card Delete
function toDeleteCard(e) {
  e.target.closest('.elements__item').remove();
}


//CARD FORM ACTIONS
//open card form
profileAddButton.addEventListener('click', () => {
  popupToOpen(popupAddCardEl);
});
//close card form
closeNewCardPopupButtonEl.addEventListener('click', toClosePopup(popupAddCardEl));
//save card form
cardForm.addEventListener('submit', saveCard);



// LIKE LOGIC
function toLikeCard() {
  this.classList.toggle('elements__like_is-liked');
}


// PICTURE LOGIC
//open picture
function toOpenPicture(e) {
  popupToOpen(popupFullImageEl);
  fullImage.setAttribute('src', e.target.getAttribute('src'));
  popupPlaceName.textContent = e.target.getAttribute('alt');
}

//close picture
closePopupImageEl.addEventListener('click', toClosePopup(popupFullImageEl));