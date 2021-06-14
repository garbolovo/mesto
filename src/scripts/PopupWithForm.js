import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handlerSubmitForm) {
        super(popupSelector);
        this._popupElement = document.querySelector(`.${this._popupSelector}`);
        this._formElement = this._popupElement.querySelector('.popup__edit-form');

        this.formSubmitButton = this._popupElement.querySelector('.popup__submit-button');
        this.inputName = this._formElement.querySelector('.popup__input-name');
        this.inputPosition = this._formElement.querySelector('.popup__input-position');

        this._handlerSubmitForm = handlerSubmitForm.bind(this);

    }

    _getInputValues() {

        const inputsList = Array.from(this._formElement.querySelectorAll('.popup__input'));
        const newValue = {}
        inputsList.forEach(input => {
            newValue[input.name] = input.value
        })

        return newValue
    }

    open() {
        super.open();

    }


    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputData = this._getInputValues();
            this._handlerSubmitForm(inputData);

        });


    }

    close() {
        super.close();
        // this._formElement.reset();
    }


    _handleEscClose(event) {
        super._handleEscClose(event);
    }

}
