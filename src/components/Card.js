class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".elements__image");
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__button-trash")
      .addEventListener("click", () => this._handleDeleteCard());

    this._elementImage.addEventListener("click", () => this._handleCardClick());

    this._element
      .querySelector(".elements__button")
      .addEventListener("click", this._handleLikeIcon);
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle("elements__button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
  }

  getView() {
    this._elementImage.src = this._link;
    this._elementImage.alt = `Photo of ${this._name}`;
    this._element.querySelector(".elements__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
