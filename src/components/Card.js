import { deleteCard } from "../utils/constants";
import PopupWithForm from "./PopupWithForm";
const deletePopup = new PopupWithForm(deleteCard);

class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".elements__image");
    this._elementDeleteButton = this._element.querySelector(
      ".elements__button-trash"
    );
    this._deleteCardForm = document.querySelector("#delete_card-form");
    this._deleteCardSubmitButton = document.querySelector(
      ".modal__submit-delete"
    );
  }

  _setEventListeners() {
    this._elementDeleteButton.addEventListener("click", () =>
      this._handleDeleteIconClick(this)
    );

    this._elementImage.addEventListener("click", () => this._handleCardClick());

    this._element
      .querySelector(".elements__button")
      .addEventListener("click", this._handleLikeIcon);

    this._deleteCardSubmitButton.addEventListener("click", (e) => {
      e.preventDefault();
      this._handleDeleteCardSubmit();
    });
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle("elements__button_active");
  }

  _handleDeleteCardSubmit() {
    this._element.remove();
    deletePopup.close();
  }

  _handleDeleteIconClick() {
    deletePopup.open();
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
