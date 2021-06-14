import {initialCards} from "./initial-cards.js";
import FormValidator from "./FormValidator.js";

import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

//validation
import cardGenerator, {addButton, cardForm, editBtn, formEditUserProfile, validationConfig} from "./utils.js";

//css
import '/src/pages/index.css';

//BUTTONS action
editBtn.addEventListener("click", function () {
    profilePopup.open();
    const userData = initialUserInfo.getUserInfo();
    profilePopup.inputName.value = userData.name;
    profilePopup.inputPosition.value = userData.position;
    profilePopup.formSubmitButton["disabled"] = false;
    profilePopup.formSubmitButton.classList.remove("popup__submit-button_invalid");
});

addButton.addEventListener("click", () => {
    cardAddPopup.open();
    cardValidator.clearForm();
    cardAddPopup.formSubmitButton.classList.add("popup__submit-button_invalid");
});

//CLASS Validation
const formValidator = new FormValidator(validationConfig, formEditUserProfile);
const cardValidator = new FormValidator(validationConfig, cardForm);
formValidator.enableValidation();
cardValidator.enableValidation();

//imagePopup
const imagePopup = new PopupWithImage('popup_image-content');

//Section
const cardList = new Section(
    {
        data: initialCards,
        renderer: (item) => {
            const card = cardGenerator(item, "#card", imagePopup)
            // const cardElement = card.getCard();
            cardList.setItem(card);
        },
    },
    ".elements"
);

cardList.renderItems();

//POP UPs
const cardAddPopup = new PopupWithForm("popup_add-card", (inputs) => {
    const cardData = {
        name: inputs.placename,
        link: inputs.placelink,
    };
    const card = cardGenerator(cardData, "#card", imagePopup)
    cardList.setItem(card);
    cardAddPopup.close();
});

const profilePopup = new PopupWithForm("popup_edit-profile", (inputs) => {
    initialUserInfo.setUserInfo(inputs);
    profilePopup.close();
});

//userInfo
const initialUserInfo = new UserInfo(
    ".profile__name",
    ".profile__position"
);

profilePopup.setEventListeners();
cardAddPopup.setEventListeners();
imagePopup.setEventListeners();



