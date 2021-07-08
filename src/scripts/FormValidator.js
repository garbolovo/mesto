export default class FormValidator {
    constructor(settings, formSelector) {
        this._settings = settings;
        this._formSelector = formSelector;

        this._inputList = Array.from(this._formSelector.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._formSelector.querySelector(this._settings.submitButtonSelector);

    }

    _hasInvalidInput(inputList) {
        return inputList.some(input => !input.validity.valid);
    }

    _changeSubmitButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._settings.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');

        }
    }

    _showInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.classList.add(this._settings.errorClass);
    };

    _hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.textContent = '';

        errorElement.classList.remove(this._settings.errorClass);

    };

    _isValid = (formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement);
        } else {
            this._hideInputError(formElement, inputElement)
        }
    }

    _setInputListeners = () => {
        this._changeSubmitButtonState(this._inputList, this._buttonElement);
        //setting listeners
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                //check validation
                this._isValid(this._formSelector, inputElement);
                //on/off button
                this._changeSubmitButtonState(this._inputList, this._buttonElement);
            })

        })
    }


    enableValidation = () => {
        // this._formSelector._setInputListeners()
        this._setInputListeners();
    }

    // clearInputs() {
    //     // const formInputs = Array.from(this._formSelector.querySelectorAll('.popup__input'));
    //     this._inputList.forEach(formInput => {
    //         formInput.classList.remove('popup__input-error');
    //         formInput.value = '';
    //     })
    // }
    //
    //
    // clearMessages() {
    //     const messages = Array.from(this._formSelector.querySelectorAll('.popup__input-message'));
    //     messages.forEach(message => {
    //         message.textContent = '';
    //         // message.classList.remove('popup__error_visible');
    //     })
    // }


    clearForm() {
        const messages = Array.from(this._formSelector.querySelectorAll('.popup__input-message'));
        messages.forEach(message => {
            message.textContent = '';
            // message.classList.remove('popup__error_visible');
        })

        // this._inputList.forEach(formInput => {
        //     formInput.classList.remove('popup__input-error');
        //     formInput.value = '';
        // })


        this._inputList.forEach(formInput => {
            this._hideInputError(this._formSelector, formInput);
        })
        this._formSelector.reset();

    }
    


}
