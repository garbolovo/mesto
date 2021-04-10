import { popupImageContent } from "./vars.js";
import { closePopupByOutsideClick } from './vars.js';
import { closePopupByEscapePress } from './vars.js';


//methods - like, delete, show full image
export default class Card {
  constructor({ name, link }, cardSelector) {
    this._cardName = name;
    this._cardLink = link;
    // this._cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
    this._template = document.querySelector(cardSelector).content
    this._fullImage = popupImageContent.querySelector('.popup__image')
    this._fullImageText = popupImageContent.querySelector('.popup__place-name')
  }

  _createView() {
    this._view = this._template
      .querySelector('.elements__item')
      .cloneNode(true);
  }

  //like
  _like() {
    this._view.querySelector('.elements__like').classList.toggle('elements__like_is-liked')
  }

  //delete
  _delete() {
    this._view.remove();
  }

  //show full image
  _showFullImage() {
    popupImageContent.classList.add('popup_shown')
    this._fullImage.setAttribute('src', this._cardLink);
    this._fullImage.setAttribute('alt', this._cardName);
    this._fullImageText.textContent = this._cardName;
    window.addEventListener('keydown', function (event) {
      closePopupByEscapePress(event, popupImageContent)
      console.log('escape pressed !')
    })
    popupImageContent.addEventListener('click', function (event) {
      closePopupByOutsideClick(event, this)
    })


  }


  _setEventListeners() {
    this._view.addEventListener('click', (event) => {
      if (event.target.classList.contains('elements__like')) {
        this._like();
      }

      if (event.target.classList.contains('elements__delete')) {
        // event.target.closest('.elements__item').remove()
        this._delete();
      }

      if (event.target.classList.contains('elements__picture')) {
        console.log('PICTURE')
        this._showFullImage();
      }


    })

  }

  getCard() {
    this._createView();
    this._setEventListeners();
    this._view.querySelector('.elements__picture').setAttribute('src', this._cardLink);
    this._view.querySelector('.elements__picture').setAttribute('alt', this._cardName);
    this._view.querySelector('.elements__text').textContent = this._cardName;
    // console.log(this._view);


    return this._view
  }
}
