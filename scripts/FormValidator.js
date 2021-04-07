

export default class FormValidator {
  constructor(settings) {
  }

  _hasInvalidInput(inputList) {
    return inputList.some(input => !input.validity.valid);
  }

  _changeSubmitButtonState(inputList, buttonElement, {inactiveButtonClass}) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');

    }
  }

  _showInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';

    errorElement.classList.remove(errorClass);

  };

  _isValid = (formElement, inputElement, rest) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, rest);
    } else {
      this._hideInputError(formElement, inputElement, rest)
    }
  }

  _setInputListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));

    //button
    const buttonElement = formElement.querySelector(submitButtonSelector);
    this._changeSubmitButtonState(inputList, buttonElement, rest);


    //setting listeners
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        //check validation
        this._isValid(formElement, inputElement, rest);
        //on/off button
        this._changeSubmitButtonState(inputList, buttonElement, rest);
      })

    })
  }

  enableValidation = ({formSelector, ...rest}) => {

    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(formElement => {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
      })

      // add listeners for form element (formElement)
      this._setInputListeners(formElement, rest);

    })
  };






}
