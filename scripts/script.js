//dom_els
const editBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveForm = document.querySelector('.popup__submit-button');
const nameInput = document.querySelector('.popup__name');
const positionInput = document.querySelector('.popup__position');


nameInput.value = profileName.textContent;
positionInput.value = profilePosition.textContent;


editBtn.addEventListener('click', (event) => {
  popup.classList.add('popup_shown');

})

closePopup.addEventListener('click', (event) => {
  popup.classList.remove('popup_shown');
})

saveForm.addEventListener('click', (event) => {
  event.preventDefault();
  popup.classList.remove('popup_shown');

  profileName.textContent = nameInput.value;

  profilePosition.textContent = positionInput.value;

})


//like logic
// likes.forEach(function (like) {
//   like.addEventListener('click', function (event) {
//     this.classList.toggle('elements__like_is-liked');
//   })
// })


