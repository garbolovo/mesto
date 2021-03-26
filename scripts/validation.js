//validation settings data
const projectFormValidationSettings = {
  formSelector: '.popup__edit-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_visible'

}

const hasInvalidInput = (inputList) => {
  console.log(inputList[0].validity.valid);
  return inputList.some(input => !input.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
  // console.log(rest)
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');

  }
}

const showInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';

  errorElement.classList.remove(errorClass);

};


const isValid = (formElement, inputElement, rest) => {
  console.log(rest)
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, rest);
  } else {
    hideInputError(formElement, inputElement, rest)
  }
};

//set input listeners logic
const setInputListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  //button
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, rest);


  //setting listeners
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      //check validation
      isValid(formElement, inputElement, rest);
      //on/off button
      toggleButtonState(inputList, buttonElement, rest);
    })

  })
}

//form validation settings main
const enableValidation = ({formSelector, ...rest}) => {

  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    })

    // add listeners for form element (formElement)
    setInputListeners(formElement, rest);

  })
};

enableValidation(projectFormValidationSettings);
