//dom_els
const editBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveForm = document.querySelector('.popup__submit-button');
const nameInput = document.querySelector('.popup__input-name');
const positionInput = document.querySelector('.popup__input-position');



function popupToClose() {
	popup.classList.remove('popup_shown');
}

function popupToOpen() {
  popup.classList.add('popup_shown');
  getUserData();
}

function getUserData() {
  nameInput.value = profileName.textContent;
  positionInput.value = profilePosition.textContent;
  popupToOpen();
	
}

function saveData(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profilePosition.textContent = positionInput.value;	
  popupToClose();
}


editBtn.addEventListener('click', popupToOpen);
closePopup.addEventListener('click', popupToClose);
saveForm.addEventListener('click', saveData)


//like logic
// likes.forEach(function (like) {
//   like.addEventListener('click', function (event) {
//     this.classList.toggle('elements__like_is-liked');
//   })
// })


