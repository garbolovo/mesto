export default class Card {
    constructor({name, link}, cardSelector, handleCardClick) {
        this._cardName = name;
        this._cardLink = link;
        // this._cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
        this._template = document.querySelector(cardSelector).content
        this._handleCardClick = handleCardClick;
    }

    _createView() {
        this._view = this._template
            .querySelector('.elements__item')
            .cloneNode(true);
        this._picture = this._view.querySelector('.elements__picture')
    }

    //like
    _like() {
        this._view.querySelector('.elements__like').classList.toggle('elements__like_is-liked')
    }

    //delete
    _delete() {
        this._view.remove();
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
                this._handleCardClick(this._cardName, this._cardLink);
            }
        })

    }

    getCard() {
        this._createView();
        this._setEventListeners();
        this._picture.setAttribute('src', this._cardLink);
        this._picture.setAttribute('alt', this._cardName);
        this._view.querySelector('.elements__text').textContent = this._cardName;
        // console.log(this._view);

        return this._view
    }
}
