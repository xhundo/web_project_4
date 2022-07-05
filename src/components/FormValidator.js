class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputs = this._formElement.querySelectorAll(this._inputSelector);
  }

  _showInputError(input) {
    const errorElement = this._formElement.querySelector(
      "#" + input.id + "-error"
    );
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input, errorMessage) {
    const errorElement = this._formElement.querySelector(
      "#" + input.id + "-error"
    );
    errorElement.textContent = errorMessage;
    input.classList.remove(this._inputErrorClass);
  }

  _hasValidInputs(inputList) {
    return Array.from(inputList).every(
      (input) => input.validity.valid === true
    );
  }

  toggleSubmitButton(inputList) {
    if (inputList && this._hasValidInputs(inputList)) {
      this._submitButton.disabled = false;

      this._submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      this._submitButton.disabled = true;

      this._submitButton.classList.add(this._inactiveButtonClass);
    }
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(input);
        this.toggleSubmitButton(this._inputs);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => e.preventDefault());
    this._setEventListeners(this._formElement);
  }
}

export default FormValidator;
