//dom_els
<<<<<<< HEAD
const editBtn = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profilePosition = document.querySelector(".profile__position");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
const saveForm = document.querySelector(".popup__submit-button");
const nameInput = document.querySelector(".popup__name");
const positionInput = document.querySelector(".popup__position");
=======
const editBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveForm = document.querySelector('.popup__submit-button');
const nameInput = document.querySelector('.popup__input-name');
const positionInput = document.querySelector('.popup__input-position');

const forma = document.querySelector('.popup__edit-form');
>>>>>>> 05dd4a5a8dd29c26d6812330b61b5a16394caf2c


<<<<<<< HEAD
editBtn.addEventListener("click", (event) => {
  popup.classList.add("popup_shown");
});

closePopup.addEventListener("click", (event) => {
  popup.classList.remove("popup_shown");
});

saveForm.addEventListener("click", (event) => {
  event.preventDefault();
  popup.classList.remove("popup_shown");

=======
function popupToClose() {
	popup.classList.remove('popup_shown');
}

function popupToOpen() {
  popup.classList.add('popup_shown');
  
}

function getUserData() {
  nameInput.value = profileName.textContent;
  positionInput.value = profilePosition.textContent;
  popupToOpen();
	
}

function saveData(e) {
  e.preventDefault();
>>>>>>> 05dd4a5a8dd29c26d6812330b61b5a16394caf2c
  profileName.textContent = nameInput.value;
  profilePosition.textContent = positionInput.value;	
  popupToClose();
}

<<<<<<< HEAD
  profilePosition.textContent = positionInput.value;
});
=======
editBtn.addEventListener('click', getUserData);
closePopup.addEventListener('click', popupToClose);
forma.addEventListener('submit', saveData)

>>>>>>> 05dd4a5a8dd29c26d6812330b61b5a16394caf2c

//like logic
// likes.forEach(function (like) {
//   like.addEventListener('click', function (event) {
//     this.classList.toggle('elements__like_is-liked');
//   })
// })
