export const popupImageContent = document.querySelector('.popup_image-content');
export const formEditUserProfile = document.querySelector('.popup__edit-form_profile');
export const cardForm = document.querySelector('.popup__edit-form_new-card-form');

export const elements = document.querySelector(".elements");

export const editBtn = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");

//validation settings
export const validationConfig = {
    // formSelector: '.popup__edit-form',
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_invalid",
    inputErrorClass: "popup__input-error",
    errorClass: "popup__error_visible",
};


//outside click logic
export const closePopupByOutsideClick = (event) => {
    const popupOpened = document.querySelector('.popup_shown');
    if ((event.target.classList.contains('popup_shown')) || event.target.classList.contains('popup__content')) {
        if (popupOpened) {
            popupOpened.classList.remove('popup_shown');
        }

    }
}
//escape logic
export const closePopupByEscapePress = (event) => {
  const popupOpened = document.querySelector('.popup_shown');
  if (event.key === 'Escape') {
    if (popupOpened) {
      popupOpened.classList.remove('popup_shown');
    }
  }
}


export const closePopupByEscapePressInClassPopup = (event, popup) => {
  if (event.key === 'Escape') {
    if (popup) {
      popup.classList.remove('popup_shown');
    }
  }
}


