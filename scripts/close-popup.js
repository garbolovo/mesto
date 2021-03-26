//outside click logic
const closePopupByOutsideClick = (event, popup) => {
  if ((event.target.classList.contains('popup_shown')) || event.target.classList.contains('popup__content')) {
    popup.classList.remove('popup_shown');
  }
}

//escape logic
const closePopupByEscapePress = (event, popup) => {
  if(event.key === 'Escape') {
    popup.classList.remove('popup_shown')
  }
}

//extra close popup settings
const closePopupOutsideAndEscape = () => {
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach(popup => {

    //mouse click outside
    popup.addEventListener('click', (event) => {
      closePopupByOutsideClick(event, popup);
    })

    //escape press popup close
    window.addEventListener('keydown', function (event) {
      closePopupByEscapePress(event, popup);

    })
});

}

//turn on extra popup closing
closePopupOutsideAndEscape();
