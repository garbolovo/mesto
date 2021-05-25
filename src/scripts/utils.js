export const popupImageContent = document.querySelector('.popup_image-content');
export const formEditUserProfile = document.querySelector('.popup__edit-form_profile');
export const cardForm = document.querySelector('.popup__edit-form_new-card-form');


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


