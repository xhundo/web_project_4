class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
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
    const submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    if (inputList && this._hasValidInputs(inputList)) {
      submitButton.disabled = false;

      submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      submitButton.disabled = true;

      submitButton.classList.add(this._inactiveButtonClass);
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
    const inputList = this._formElement.querySelectorAll(this._inputSelector);
    const submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(input);
        this.toggleSubmitButton(inputList);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => e.preventDefault());
    this._setEventListeners(this._formElement);
  }
}

export default FormValidator;
