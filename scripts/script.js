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
  popup.removeEventListener('click', closePopupByOutsideClick )

  return function popupToClose() {
    popup.classList.remove('popup_shown');
  }
  // popup.classList.remove('popup_shown');



}

//to open popup
function openPopup(popup) {
  popup.classList.add('popup_shown');
  closePopupOutsideAndEscape();
  resetErrors();
  resetCardErrors();


}

// USER functions
function getUserData() {
  nameInput.value = profileName.textContent;
  positionInput.value = profilePosition.textContent;
  openPopup(popupEditProfile);

}

function saveUserData(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profilePosition.textContent = positionInput.value;
  closePopup(popupEditProfile)();
}


//USER FORM ACTIONS
//open user form
editBtn.addEventListener('click', getUserData);
//close user form
closePopupEl.addEventListener('click', closePopup(popupEditProfile));
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
  closePopup(popupAddCardEl)();
}

//Card Delete
function deleteCard(e) {
  e.target.closest('.elements__item').remove();
}


//CARD FORM ACTIONS
//open card form
profileAddButton.addEventListener('click', () => {
  openPopup(popupAddCardEl);
  // closePopupOutsideAndEscape();

});
//close card form
closeNewCardPopupButtonEl.addEventListener('click', closePopup(popupAddCardEl));
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
closePopupImageEl.addEventListener('click', closePopup(popupFullImageEl));

// ================= //

const cleanErrorMessagesFields = () => {
  const errorFieldMessages = Array.from(document.querySelectorAll('.popup__input-message'));
  errorFieldMessages.forEach(field => {
    field.textContent = '';
    field.classList.remove('popup__error_visible');
  })

}


const resetCardErrors = () => {

  //inputs
  placeNameInput.value = '';
  placeLinkInput.value = '';
  placeNameInput.classList.remove('popup__input-error');
  placeLinkInput.classList.remove('popup__input-error');


  //btn
  const btnSubmitAddNewCardForm = cardForm.querySelector('.popup__submit-button');
  btnSubmitAddNewCardForm.classList.add('popup__submit-button_invalid');

}

const resetProfileErrors = () => {

  //btn
  const btnSubmitUserProfile = formEditUserProfile.querySelector('.popup__submit-button');
  btnSubmitUserProfile.classList.remove('popup__submit-button_invalid');
  btnSubmitUserProfile.removeAttribute('disabled');

  //inputs
  nameInput.classList.remove('popup__input-error');
  positionInput.classList.remove('popup__input-error');

}




const resetErrors = () => {
  cleanErrorMessagesFields();
  resetProfileErrors();
  resetCardErrors();

  // const inputNameError = formEditUserProfile.querySelector('.popup__input-name-error');
  // inputNameError.textContent = '';
  // inputNameError.classList.remove('popup__error_visible');
  //
  // const inputPositionError = formEditUserProfile.querySelector('.popup__input-position-error');
  // inputPositionError.textContent = '';



}



