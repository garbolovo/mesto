import FormValidator from "./FormValidator.js";

import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

//API
import Api from "./Api";

//validation
import cardGenerator, {addButton, cardForm, editBtn, formEditUserProfile, validationConfig} from "./utils.js";

//css
import '/src/pages/index.css';

const api = new Api();

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


//api cards
api.getInitialCards()

    .then(cards => {
        const cardList = new Section(
            {
                data: cards,
                renderer: (item) => {
                    const card = cardGenerator(item, "#card", imagePopup)
                    // const cardElement = card.getCard();
                    cardList.setItem(card);
                },
            },
            ".elements"
        );

        cardList.renderItems();


    })


//api userInfo
api.getUserInfo().then(userData => {
    // document.querySelector('.profile__name').textContent = userData['name'];
    // document.querySelector('.profile__position').textContent = userData['about'];
    // document.querySelector('.profile__avatar').src = userData['avatar'];


    const data = {
        username: userData['name'],
        userPosition: userData['about'],
        avatar: userData['avatar'],
    }
    initialUserInfo.setUserInfo(data)

})


//Section
// const cardList = new Section(
//     {
//         data: initialCards,
//         renderer: (item) => {
//             const card = cardGenerator(item, "#card", imagePopup)
//             // const cardElement = card.getCard();
//             cardList.setItem(card);
//         },
//     },
//     ".elements"
// );

// cardList.renderItems();

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
    ".profile__position",
    ".profile__avatar",
);

profilePopup.setEventListeners();
cardAddPopup.setEventListeners();
imagePopup.setEventListeners();


