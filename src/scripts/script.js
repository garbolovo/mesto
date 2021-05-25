import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {initialCards} from "./initial-cards.js";
import {cardForm, closePopupByEscapePress, closePopupByOutsideClick, formEditUserProfile} from "./utils.js";

import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import PopupWithImage from "./PopupWithImage.js";

//css
import '/src/pages/index.css';

const validationConfig = {
    // formSelector: '.popup__edit-form',
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_invalid",
    inputErrorClass: "popup__input-error",
    errorClass: "popup__error_visible",
};
//popups
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupAddCardEl = document.querySelector(".popup_add-card");
const popupFullImageEl = document.querySelector(".popup_image-content");

//edit buttons (opens)
const editBtn = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

//submit buttons
const profileSubmitBtn = popupEditProfile.querySelector(".popup__submit-button");
const cardAddSubmitBtn = popupAddCardEl.querySelector(".popup__submit-button");
// - inputs
const placeNameInput = document.querySelector(".popup__input-place-name");
const placeLinkInput = document.querySelector(".popup__input-place-link");
//elements (cards)
const elements = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card").content;


//BUTTONS
editBtn.addEventListener("click", function (event) {
    // openEditProfilePopup();
    profilePopup.open();
    const initialUserInfo = new UserInfo(
        ".profile__name",
        ".profile__position"
    );
    const userData = initialUserInfo.getUserInfo();
    profilePopup._inputName.value = userData.name;
    profilePopup._inputPosition.value = userData.position;
    profilePopup._formSubmitButton["disabled"] = false;
    profilePopup._formSubmitButton.classList.remove("popup__submit-button_invalid");
});

addButton.addEventListener("click", (event) => {
    // openPopup(popupAddCardEl);
    cardAddPopup.open();
    cardValidator.clearInputs();
    cardValidator.clearMessages();
    cardAddSubmitBtn.classList.add("popup__submit-button_invalid");
});


//CLASS Validation
const formValidator = new FormValidator(validationConfig, formEditUserProfile);
const cardValidator = new FormValidator(validationConfig, cardForm);
formValidator.enableValidation();
cardValidator.enableValidation();

//Section
const cardList = new Section(
    {
        data: initialCards,
        renderer: (item) => {


            const card = new Card(item, "#card", (name, link) => {
                imagePopup.open();
                // console.log(imagePopup._popupElement);
                const fullImageElement = imagePopup._popupElement;
                fullImageElement.querySelector('.popup__image').setAttribute('src', link);
                fullImageElement.querySelector('.popup__image').setAttribute('alt', name);
                fullImageElement.querySelector('.popup__place-name').textContent = name;
            });

            const cardElement = card.getCard();
            cardList.setItem(cardElement);
        },
    },
    ".elements"
);

cardList.renderItems();

//POP UPs

const cardAddPopup = new PopupWithForm("popup_add-card", (inputs) => {
    // console.log(inputs);
    const cardData = {
        name: inputs.placename,
        link: inputs.placelink,
    };

    const card = new Card(cardData, "#card", (name, link) => {
        imagePopup.open();
        const element = imagePopup._popupElement;
        element.querySelector('.popup__image').setAttribute('src', link);
        element.querySelector('.popup__image').setAttribute('alt', name);
        element.querySelector('.popup__place-name').textContent = name;

    });

    const cardElement = card.getCard();
    elements.prepend(cardElement);
    cardAddPopup.close();
});

const profilePopup = new PopupWithForm("popup_edit-profile", (inputs) => {
    const userInfo = new UserInfo(".profile__name", ".profile__position");
    let userObj = userInfo.getUserInfo();
    userInfo.setUserInfo(inputs);
    profilePopup.close();
});

const imagePopup = new PopupWithImage('popup_image-content');


profilePopup.setEventListeners();
cardAddPopup.setEventListeners();
imagePopup.setEventListeners();


