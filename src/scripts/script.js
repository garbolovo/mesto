import FormValidator from "./FormValidator.js";

// import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

import Section from "./Section";

import {initialCards} from "./initial-cards";

// console.log(initialCards)
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
    console.log(userData)
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



//api userInfo
api.getUserInfo().then(userData => {
    // document.querySelector('.profile__name').textContent = userData['name'];
    // document.querySelector('.profile__position').textContent = userData['about'];
    // document.querySelector('.profile__avatar').src = userData['avatar'];


    const data = {
        name: userData['name'],
        about: userData['about'],
        avatar: userData['avatar'],
    }
    initialUserInfo.setUserInfo(data)

})


//api cards
// api.getInitialCards()
//
//     .then(cards => {
//         const cardList = new Section(
//             {
//                 data: cards,
//                 renderer: (item) => {
//                     const card = cardGenerator(item, "#card", imagePopup)
//                     // const cardElement = card.getCard();
//                     cardList.setItem(card);
//                 },
//             },
//             ".elements"
//         );
//
//         cardList.renderItems();
//
//
//     })
//


Section
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
//


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

//userInfo
const initialUserInfo = new UserInfo(
    ".profile__name",
    ".profile__position",
    ".profile__avatar",
);


const profilePopup = new PopupWithForm("popup_edit-profile", (inputs) => {

    // initialUserInfo.setUserInfo(inputs);
    // api.editUserProfile(inputs.name, inputs.about)

    console.log(inputs)
    api.editUserProfile(inputs)
        .then(data => {
            console.log('DATA', data)
            initialUserInfo.setUserInfo(data);
            profilePopup.close();


        })


        .catch(err => {
            console.log(err)
        })


});


profilePopup.setEventListeners();
cardAddPopup.setEventListeners();
imagePopup.setEventListeners();

//=================================== T E S T  ZONE =================================

// api.addCard({name: 'Щёлково', link: 'https://myksp.ru/upload/000/u1/b/3/redaktor-saita-po-posyolku-garbolovo-photo-big.jpg'})
//     .then(res => {
//         if (res.ok) {
//             return res.json()
//
//         }
//     })
//     .then(data => {
//         console.log(data)
//     })
