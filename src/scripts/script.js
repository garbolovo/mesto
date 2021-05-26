import {initialCards} from "./initial-cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

//validation
import {addButton, cardForm, editBtn, elements, formEditUserProfile, validationConfig} from "./utils.js";

//css
import '/src/pages/index.css';

//BUTTONS action
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
    cardAddPopup._formSubmitButton.classList.add("popup__submit-button_invalid");


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
    userInfo.getUserInfo();
    userInfo.setUserInfo(inputs);
    profilePopup.close();
});

const imagePopup = new PopupWithImage('popup_image-content');


profilePopup.setEventListeners();
cardAddPopup.setEventListeners();
imagePopup.setEventListeners();



