import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
    this._inputs = this._popupElement.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((inputElement) => {
      values[inputElement.name] = inputElement.value;
    });

    return values;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault;
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
