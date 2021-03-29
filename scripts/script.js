//dom_els

const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closePopupEl = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input-name');
const positionInput = document.querySelector('.popup__input-position');

//formEditUserProfile El
const formEditUserProfile = document.querySelector('.popup__edit-form');

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
const popupFullImageEl = document.querySelector('.popup_image-content');
const fullImage = document.querySelector('.popup__image');
const closePopupImageEl = document.querySelector('.popup__close-image');
const popupPlaceName = document.querySelector('.popup__place-name');

function getCardElement(card) {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const cardPicture = cardElement.querySelector('.elements__picture');
  cardPicture.setAttribute('src', card.link);
  cardPicture.addEventListener('click', showPicture);
  cardElement.querySelector('.elements__text').textContent = card.name;
  cardElement.querySelector('.elements__picture').setAttribute('alt', card.name);
  cardElement.querySelector('.elements__delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.elements__like').addEventListener('click', likeCard);
  return cardElement
}

function renderCard(card) {
  elements.prepend(getCardElement(card))
}

initialCards.forEach(renderCard);

//utility functions
function closePopup(popup) {
  window.removeEventListener('keydown', closePopupByEscapePress);
  popup.removeEventListener('click', closePopupByOutsideClick)

  //closure feature
  // return function popupToClose() {
  //   popup.classList.remove('popup_shown');
  // }

  popup.classList.remove('popup_shown');

}

//to open popup
function openPopup(popup) {
  popup.classList.add('popup_shown');
  closePopupOutsideAndEscape();
}

// USER functions
function getUserData() {
  openPopup(popupEditProfile);
  clrMessages(popupEditProfile, '.popup__input-message');
  clrInputs(popupEditProfile, '.popup__input');
  nameInput.value = profileName.textContent;
  positionInput.value = profilePosition.textContent;
  popupEditProfile.querySelector('.popup__submit-button').classList.remove('popup__submit-button_invalid');
  popupEditProfile.querySelector('.popup__submit-button').removeAttribute('disabled');


}

function saveUserData(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profilePosition.textContent = positionInput.value;
  closePopup(popupEditProfile);
}


//USER FORM ACTIONS
//open user form
editBtn.addEventListener('click', function (event) {
  getUserData();


});
//close user form
// closePopupEl.addEventListener('click', closePopup(popupEditProfile));
closePopupEl.addEventListener('click', function () {
  closePopup(popupEditProfile);
})

//save user data
formEditUserProfile.addEventListener('submit', saveUserData)


//CARD functions
function saveCard(e) {
  e.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  renderCard(newCard);
  cardForm.reset();
  closePopup(popupAddCardEl);
}

//Card Delete
function deleteCard(e) {
  e.target.closest('.elements__item').remove();
}


//CARD FORM ACTIONS
//open card form
profileAddButton.addEventListener('click', (event) => {
  openPopup(popupAddCardEl);
  clrMessages(popupAddCardEl, '.popup__input-message');
  clrInputs(popupAddCardEl, '.popup__input');
  popupAddCardEl.querySelector('.popup__submit-button').classList.add('popup__submit-button_invalid');

});
//close card form
// closeNewCardPopupButtonEl.addEventListener('click', closePopup(popupAddCardEl));
closeNewCardPopupButtonEl.addEventListener('click', function () {
  closePopup(popupAddCardEl);
})

//save card form
cardForm.addEventListener('submit', saveCard);


// LIKE LOGIC
function likeCard() {
  this.classList.toggle('elements__like_is-liked');
}


// PICTURE LOGIC
//open picture
function showPicture(e) {
  openPopup(popupFullImageEl);
  fullImage.setAttribute('src', e.target.getAttribute('src'));
  fullImage.setAttribute('alt', `Фотография ${e.target.getAttribute('alt')}`);
  popupPlaceName.textContent = e.target.getAttribute('alt');
}

//close picture
// closePopupImageEl.addEventListener('click', closePopup(popupFullImageEl));
closePopupImageEl.addEventListener('click', function () {
  closePopup(popupFullImageEl);
});
//===========
const clrMessages = (popup, messageSelector) => {
  const messages = Array.from(popup.querySelectorAll(messageSelector));
  messages.forEach(message => {
    message.textContent = '';
    // message.classList.remove('popup__error_visible');
  })
}

const clrInputs = (popup, inputSelector) => {
  const formInputs = Array.from(popup.querySelectorAll(inputSelector));
  formInputs.forEach(formInput => {
    formInput.classList.remove('popup__input-error');
    formInput.value = '';
  })
}

