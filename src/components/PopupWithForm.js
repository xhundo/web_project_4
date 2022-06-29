import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handlePlaceFormSubmit) {
    super(popupSelector);
    this._handlePlaceFormSubmit = handlePlaceFormSubmit;
    this._form = document.querySelectorAll(".modal__form, .modal-place__form");
  }

  _getInputValues() {
    const values = {};
    const inputList = this._popupElement.querySelector(".modal__input");
    inputList.forEach((inputElement) => {
      values[inputElement.name] = inputElement.value;
    });

    return values;
  }

  setEventListeners() {
    const imageModal = document.querySelector("#image-modal");
    const imageModalClose = document.querySelector(".modal-image__button");

    this._popupElement.addEventListener("click", (e) => {
      e.preventDefault();
      imageModalClose.classList.remove("modal_open");
    });

    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      imageModalClose.classList.remove("modal_open");
    });

    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export default PopupWithForm;
