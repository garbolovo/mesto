//dom_els
const editBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveForm = document.querySelector('.popup__submit-button');
const nameInput = document.querySelector('.popup__name');
const positionInput = document.querySelector('.popup__position');

// like element
const likes = document.querySelectorAll('.elements__like');

function settingUpProfile() {
  if (localStorage.getItem('name') !== null) {
    profileName.textContent = localStorage.getItem('name');
    nameInput.value = profileName.textContent;

  } else {
    nameInput.value = profileName.textContent;
  }

  if (localStorage.getItem('position') !== null) {
    profilePosition.textContent = localStorage.getItem('position');
    positionInput.value = profilePosition.textContent;

  } else {
    positionInput.value = profilePosition.textContent;
  }

}

settingUpProfile();


editBtn.addEventListener('click', (event) => {
  popup.classList.add('popup_shown');
  settingUpProfile();

})

closePopup.addEventListener('click', (event) => {
  popup.classList.remove('popup_shown');
})

saveForm.addEventListener('click', (event) => {
  event.preventDefault();
  popup.classList.remove('popup_shown');

  localStorage.setItem('name', nameInput.value);
  profileName.textContent = nameInput.value;

  localStorage.setItem('position', positionInput.value);
  profilePosition.textContent = positionInput.value;

})


//like logic
likes.forEach(function(like) {
  like.addEventListener('click', function(event) {
    this.classList.toggle('elements__like_is-liked');
  })
})


