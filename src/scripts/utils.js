import Card from "./Card";

export const popupImageContent = document.querySelector('.popup_image-content');
export const formEditUserProfile = document.querySelector('.popup__edit-form_profile');
export const cardForm = document.querySelector('.popup__edit-form_new-card-form');

export const elements = document.querySelector(".elements");

export const editBtn = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");

export const ESCAPE_KEY = 'Escape';


//validation settings
export const validationConfig = {
    // formSelector: '.popup__edit-form',
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_invalid",
    inputErrorClass: "popup__input-error",
    errorClass: "popup__error_visible",
};


export const handleCardClickHelper = (name, link, popup) => {
    popup.open();
    const fullImageElement = popup._popupElement;
    const popupImageElement = fullImageElement.querySelector('.popup__image');
    // fullImageElement.querySelector('.popup__image').setAttribute('src', link);
    // fullImageElement.querySelector('.popup__image').setAttribute('alt', name);

    popupImageElement.setAttribute('src', link);
    popupImageElement.setAttribute('alt', name);


    fullImageElement.querySelector('.popup__place-name').textContent = name;

}

export default function cardGenerator(cardItem, selector, popup) {
    // const cardElement = card.getCard();
    // cardList.setItem(cardElement);
    const card = new Card(cardItem, selector, (name, link) => {
        handleCardClickHelper(name, link, popup)
    })

    return card.getCard();
}
