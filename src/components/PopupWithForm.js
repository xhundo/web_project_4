import Popup from "./Popup";

class PopupwithForm extends Popup {
  constructor({ popupSelector }, handlePlaceFormSubmit) {
    super(popupSelector);
    this._handlePlaceFormSubmit = handlePlaceFormSubmit;
  }

  _getInputValues() {
    const values = {};
    values.forEach((inputElement) => {
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
  }

  close() {
    this._form.reset();
    this.close();
  }
}

export default PopupwithForm;
