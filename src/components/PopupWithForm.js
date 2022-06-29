import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(
      ".modal__form, .modal-place__form"
    );
  }

  _getInputValues() {
    const values = {};
    const inputList = this._popupElement.querySelectorAll(".modal__input");
    inputList.forEach((inputElement) => {
      values[inputElement.name] = inputElement.value;
    });

    return values;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());

      this.close();
    });

    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export default PopupWithForm;
