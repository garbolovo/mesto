import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupElement = document.querySelector(`.${this._popupSelector}`);

    }

    open() {
        super.open()
        console.log('IMAGE OPEN');
    }

    close() {
        super.close()
        console.log('IMAGE CLOSED');
    }
    
    setEventListeners() {
        super.setEventListeners();
    }
}