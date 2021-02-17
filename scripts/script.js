//dom_els
const editBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveForm = document.querySelector('.popup__submit-button');
const nameInput = document.querySelector('.popup__name');
const positionInput = document.querySelector('.popup__position');

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


editBtn.addEventListener('click', (ev) => {
    popup.classList.add('popup_shown');
    settingUpProfile();

})

closePopup.addEventListener('click', (ev) => {
    popup.classList.remove('popup_shown');
})

saveForm.addEventListener('click', (ev) => {
    ev.preventDefault();
    popup.classList.remove('popup_shown');

    localStorage.setItem('name', nameInput.value);
    profileName.textContent = nameInput.value;

    localStorage.setItem('position', positionInput.value);
    profilePosition.textContent = positionInput.value;

})


