import Card from './Card.js'
import FormValidator from './FormValidator.js'
import { initialCards } from './initial-cards.js'
import { formEditUserProfile } from './utils.js'
import { cardForm } from './utils.js'
import { closePopupByOutsideClick } from './utils.js';
import { closePopupByEscapePress } from './utils.js';

function createCard(cardItem) {
  const card = new Card(cardItem, '#card');
  return card;
}

const validationConfig = {
  // formSelector: '.popup__edit-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_visible'

}

//dom_els
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');

//popups
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCardEl = document.querySelector('.popup_add-card');
const popupFullImageEl = document.querySelector('.popup_image-content');

//edit buttons
const editBtn = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

//submit buttons
const profileSubmitBtn = popupEditProfile.querySelector('.popup__submit-button');
const cardAddSubmitBtn = popupAddCardEl.querySelector('.popup__submit-button');

//close popup buttons X
const closeEditProfilePopupBtn = document.querySelector('.popup__close');
const closeNewCardPopupButtonEl = document.querySelector('.popup__close_new-card-form');
const closePopupImageEl = document.querySelector('.popup__close-image');

// - inputs
const placeNameInput = document.querySelector('.popup__input-place-name');
const placeLinkInput = document.querySelector('.popup__input-place-link');

const nameInput = document.querySelector('.popup__input-name');
const positionInput = document.querySelector('.popup__input-position');

//elements (cards)
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

//utility functions
function openPopup(popup) {
  popup.classList.add('popup_shown');
  window.addEventListener('keydown', closePopupByEscapePress);
  popup.addEventListener('click', closePopupByOutsideClick);
}

function closePopup(popup) {
  window.removeEventListener('keydown', closePopupByEscapePress);
  popup.removeEventListener('click', closePopupByOutsideClick)
  popup.classList.remove('popup_shown');
}
//profile
function openEditProfilePopup() {
  openPopup(popupEditProfile);
  formValidator.clearInputs()
  formValidator.clearMessages()
  nameInput.value = profileName.textContent;
  positionInput.value = profilePosition.textContent;
  profileSubmitBtn.classList.remove('popup__submit-button_invalid');
  profileSubmitBtn.removeAttribute('disabled');

}

function saveUserData(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profilePosition.textContent = positionInput.value;
  closePopup(popupEditProfile);
}

//save user data
formEditUserProfile.addEventListener('submit', saveUserData)

//open buttons actions
editBtn.addEventListener('click', function (event) {
  openEditProfilePopup();
});

addButton.addEventListener('click', (event) => {
  openPopup(popupAddCardEl);
  cardValidator.clearInputs()
  cardValidator.clearMessages()
  cardAddSubmitBtn.classList.add('popup__submit-button_invalid');
});

//close user form
// closePopupEl.addEventListener('click', closePopup(popupEditProfile));
closeEditProfilePopupBtn.addEventListener('click', function () {
  closePopup(popupEditProfile);
})

//CARD functions
function saveCard(e) {
  e.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };
  // const card = new Card(newCard, '#card');
  const card = createCard(newCard);

  // renderCard(card);
  elements.prepend(card.getCard());
  cardForm.reset();
  closePopup(popupAddCardEl);
}

closeNewCardPopupButtonEl.addEventListener('click', function () {
  closePopup(popupAddCardEl);
})

//save card form
cardForm.addEventListener('submit', saveCard);

closePopupImageEl.addEventListener('click', function () {
  closePopup(popupFullImageEl);
});

//CLASS Card
initialCards.forEach(cardItem => {
  // const card = new Card(cardItem, '#card');
  const card = createCard(cardItem);
  elements.prepend(card.getCard());
})

//CLASS Validation
const formValidator = new FormValidator(validationConfig, formEditUserProfile);
const cardValidator = new FormValidator(validationConfig, cardForm);
formValidator.enableValidation();
cardValidator.enableValidation();





