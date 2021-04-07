//methods - like, delete, show full image

export default class Card {
  constructor({name, link}) {
    this._cardName = name;
    this._cardLink = link;
    // this._cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
    this._template = document.querySelector('#card').content
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
    // console.log(popupFullImageEl);
    const popupImage = document.querySelector('.popup_image-content');
    popupImage.classList.add('popup_shown')
    popupImage.querySelector('.popup__image').setAttribute('src', this._cardLink);
    popupImage.querySelector('.popup__image').setAttribute('alt', this._cardName);
    popupImage.querySelector('.popup__place-name').textContent = this._cardName;

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

  render(container) {
    this._createView();
    this._setEventListeners();
    this._view.querySelector('.elements__picture').setAttribute('src', this._cardLink);
    this._view.querySelector('.elements__picture').setAttribute('alt', this._cardName);
    this._view.querySelector('.elements__text').textContent = this._cardName;
    console.log(this._view);
    container.prepend(this._view)
  }
}
