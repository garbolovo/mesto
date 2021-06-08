import {ESCAPE_KEY} from "./utils";


export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector);
        // this._popupCloseButton = this._popupElement.querySelector('.popup__close')
        this._handler = this._handleEscClose.bind(this);
    }

    _handleEscClose(event) {
        if (event.key === ESCAPE_KEY) {
            this.close()
        }
    }

    open() {
        //set escape listener
        this._popupElement.classList.add('popup_shown');
        console.log('OPEN');
        // window.addEventListener('keydown', this._handleEscClose.bind(this));
        window.addEventListener('keydown', this._handler);


    }

    close() {
        // window.removeEventListener('keydown', this._handleEscClose.bind(this));
        window.removeEventListener('keydown', this._handler);
        this._popupElement.classList.remove('popup_shown');

    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (event) => {
            if ((event.target.classList.contains('popup_shown'))
                || event.target.classList.contains('popup__content')
                || event.target.classList.contains('popup__close')) {

                this.close()
            }
        })

    }

}
