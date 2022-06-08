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

  _handleLikeIcon() {
    this._element
      .querySelector(".elements__button")
      .addEventListener("click", (evt) => {
        if (evt.target.classList.contains("elements__button_active")) {
          evt.target.classList.remove("elements__button_active");
        } else {
          evt.target.classList.add("elements__button_active");
        }
      });
  }

  _handleDeleteCard() {
    const deleteButton = cardElement.querySelector(".elements__button-trash");
    deleteButton.addEventListener("click", () => {
      this._element.remove();
    });
  }

  _handlePreviewPicture() {
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        imageElement.src = data.link;
        imageCaption.textContent = data.name;
        imageElement.alt = data.name;
        openModal(imageModal);
      });
  }

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
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
