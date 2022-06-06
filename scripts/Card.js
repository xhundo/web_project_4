class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__button-trash")
      .addEventListener("click", () => this._handleDeleteCard);

    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => this._handlePreviewPicture);

    this._element
      .querySelector(".elements__button")
      .addEventListener("click", () => this._handleLikeIcon);
  }

  _handleLikeIcon() {}

  _handleDeleteCard() {}

  _handlePreviewPicture() {}

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector(".elements__image").src = this._link;
    this._element.querySelector(".elements__title").textContent = this._name;
    this._setEventListeners = this._setEventListeners();
  }
}

export default Card;
