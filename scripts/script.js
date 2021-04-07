import Card from './Card.js'
import FormValidator from './FormValidator.js'
import {initialCards} from './initial-cards.js'


const projectFormValidationSettings = {
  formSelector: '.popup__edit-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_visible'

}


//outside click logic
const closePopupByOutsideClick = (event, popup) => {
  if ((event.target.classList.contains('popup_shown')) || event.target.classList.contains('popup__content')) {
    popup.classList.remove('popup_shown');
  }
}

//escape logic
const closePopupByEscapePress = (event, popup) => {
  if (event.key === 'Escape') {
    popup.classList.remove('popup_shown')
  }
}

//extra close popup settings
const closePopupOutsideAndEscape = () => {
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach(popup => {

    //mouse click outside
    popup.addEventListener('click', (event) => {
      closePopupByOutsideClick(event, popup);
    })

    //escape press popup close
    window.addEventListener('keydown', function (event) {
      closePopupByEscapePress(event, popup);

    })


  });


}
closePopupOutsideAndEscape()

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


//forms
const formEditUserProfile = document.querySelector('.popup__edit-form');
const cardForm = document.querySelector('.popup__edit-form_new-card-form');

//submit buttons
const profileSubmitBtn = popupEditProfile.querySelector('.popup__submit-button');
const cardAddSubmitBtn = popupAddCardEl.querySelector('.popup__submit-button');


//close popup buttons X
const closePopupEl = document.querySelector('.popup__close');
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
  closePopupOutsideAndEscape();
}

function closePopup(popup) {
  window.removeEventListener('keydown', closePopupByEscapePress);
  popup.removeEventListener('click', closePopupByOutsideClick)
  popup.classList.remove('popup_shown');

}


//profile
function getUserData() {
  openPopup(popupEditProfile);
  clrMessages(popupEditProfile);
  clrInputs(popupEditProfile);
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
  getUserData();
});

addButton.addEventListener('click', (event) => {
  openPopup(popupAddCardEl);
  clrMessages(popupAddCardEl);
  clrInputs(popupAddCardEl);
  cardAddSubmitBtn.classList.add('popup__submit-button_invalid');
});


//close user form
// closePopupEl.addEventListener('click', closePopup(popupEditProfile));
closePopupEl.addEventListener('click', function () {
  closePopup(popupEditProfile);
})


//CARD functions
function saveCard(e) {
  e.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  console.log(newCard);

  const card = new Card(newCard);
  // card._addNewCard();
  console.log(card);


  // renderCard(card);
  card.render(elements);
  cardForm.reset();
  closePopup(popupAddCardEl);
}

//Card Delete
function deleteCard(e) {
  e.target.closest('.elements__item').remove();
}


closeNewCardPopupButtonEl.addEventListener('click', function () {
  closePopup(popupAddCardEl);
})

//save card form
cardForm.addEventListener('submit', saveCard);


closePopupImageEl.addEventListener('click', function () {
  closePopup(popupFullImageEl);
});


//===========
const clrMessages = (popup) => {
  const messages = Array.from(popup.querySelectorAll('.popup__input-message'));
  messages.forEach(message => {
    message.textContent = '';
    // message.classList.remove('popup__error_visible');
  })
}

const clrInputs = (popup) => {
  const formInputs = Array.from(popup.querySelectorAll('.popup__input'));
  formInputs.forEach(formInput => {
    formInput.classList.remove('popup__input-error');
    formInput.value = '';
  })
}


//CLASS Card
initialCards.forEach(cardItem => {
  const card = new Card(cardItem);
  console.log(card)
  card.render(elements);
})


//CLASS Validation
const validator = new FormValidator(projectFormValidationSettings);
validator.enableValidation(projectFormValidationSettings);
