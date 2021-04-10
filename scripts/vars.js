export const popupImageContent = document.querySelector('.popup_image-content');
export const formEditUserProfile = document.querySelector('.popup__edit-form_profile');
export const cardForm = document.querySelector('.popup__edit-form_new-card-form');


//outside click logic
export const closePopupByOutsideClick = (event, popup) => {
  if ((event.target.classList.contains('popup_shown')) || event.target.classList.contains('popup__content')) {
    popup.classList.remove('popup_shown');
  }
}

//escape logic
export const closePopupByEscapePress = (event, popup) => {
  if (event.key === 'Escape') {
    popup.classList.remove('popup_shown')
  }
}
